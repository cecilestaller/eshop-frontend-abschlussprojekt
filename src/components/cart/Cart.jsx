import { useContext, useEffect, useState } from "react";
import { Products } from "../../context/Context";
import Navbar from "../navbar/Navbar";
import CartItem from "../cartitem/CartItem";
import "./Cart.scss";

const Cart = () => {
	const {
		warenkorb,
		setWarenkorb,
		cartlength,
		setCartlength,
		filteredCart,
		setFilteredCart,
	} = useContext(Products);
	const [productcount, setProductCount] = useState({});
	const [totalPrice, setTotalPrice] = useState(0);

	const [voucherText, setVoucherText] = useState("");
	const [showButton, setShowButton] = useState(false);
	/* const [filteredCart, setFilteredCart] = useState(warenkorb)
	 */
	useEffect(() => {
		setFilteredCart([...new Set(warenkorb)]);
		const countObject = warenkorb.reduce((x, y) => {
			if (x[y.id]) {
				x[y.id] += 1;
			} else {
				x[y.id] = 1;
			}
			return x;
		}, {});
		setProductCount(countObject);
		let sum = 0;
		warenkorb.forEach((product) => {
			sum += Number(product.price);
		});
		setTotalPrice(sum);
		console.log(filteredCart);
	}, [warenkorb]);

	useEffect(() => {
		setCartlength(filteredCart.length);
	}, [warenkorb, filteredCart]);

	const handleAccordion = () => {
		setShowButton(!showButton);
		console.log("klick");
		console.log(showButton);
	};

	const handleVoucherChange = (event) => {
		setVoucherText(event.target.value);
		setShowButton(event.target.value !== "");
	};

	const handleSubmitVoucher = () => {
		applyVoucher(voucherText);
		console.log("Voucher redeemed amk:", voucherText);
		setVoucherText("");
		setShowButton(false);
	};

	const applyVoucher = (code) => {
		const validCode = "Metin der Zerstörer";

		if (code === validCode) {
			const discount = totalPrice * 0.2;
			const discountedPrice = totalPrice - discount;
			setTotalPrice(discountedPrice);
			/*         console.log("Rabatt angewendet!");
			 */
		} else {
			/*         console.log("Ungültiger Gutscheincode!");
			 */
		}
	};

	return (
		<section className='cartcontainer_Cart'>
			<div className='media_query'>
				{filteredCart.length !== 0 ? (
					filteredCart.map((product, index) => (
						<CartItem
							product={product}
							key={index}
							title={product.title}
							price={Number(product.price).toFixed(2)}
							image={product.thumbnail}
							rating={product.rating}
							counter={productcount[`${product.id}`]}
							id={product.id}
						/>
					))
				) : (
					<p className='cart_empty'>Your Cart is Empty</p>
				)}
			</div>
			<div className='price_container'>
				<h2>Total</h2>
				<p>Subtotal: <span>$ {totalPrice} </span></p>
				<p>Delivery:<span> $ 0.00 </span></p>
				<p>Total Cost (incl. VAT.): <span>$ {totalPrice} </span></p>
				<div>
					<button className='checkout_btn'>Pay</button>
				</div>
				<div>
					<button
						className='accordion'
						onClick={() => handleAccordion()}>
						Add a voucher (Optional)
					</button>
					<div
						className='panel'
						style={
							showButton
								? { display: "block" }
								: { display: "none" }
						}>
						<input
							className='input_voucher'
							type='text'
							value={voucherText}
							onChange={handleVoucherChange}
							placeholder='Enter voucher code...'
						/>
						{showButton && (
							<button
								className='redeem_btn'
								onClick={handleSubmitVoucher}>
								REDEEM
							</button>
						)}
					</div>
				</div>
			</div>
			<Navbar />
		</section>
	);
};

export default Cart;
