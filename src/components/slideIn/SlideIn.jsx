import { useContext, useEffect } from "react";
import "./SlideIn.scss";
import { Products } from "../../context/Context";
import CategoryBar from "../categorybar/CategoryBar";
import { useNavigate } from "react-router-dom";

const SlideIn = () => {
	const { slide, setSlide, price, setPrice, brand, setBrand } =
		useContext(Products);

	const filterPrice = (low, high) => {
		setPrice({ lowest: low, highest: high });
	};

	const navigate = useNavigate();

	const All = "all";

	const resetFilter = () => {
		setPrice({ lowest: "", highest: "" });
		setBrand("");
		setSlide(!slide);
		navigate(`/productlist/${All}`);
	};

	useEffect(() => {
		// console.log(price);
		// console.log(brand);
	}, [slide, price, brand]);
	return (
		<section className={slide ? "slideAktive slide" : "slide"}>
			<article>
				<h3>Categories</h3>
				<CategoryBar />
			</article>
			<article>
				<h3>Price</h3>
				<div>
					<p onClick={() => filterPrice(0, 20)}>0 - 20€</p>
					<p onClick={() => filterPrice(20, 50)}>20 - 50€</p>
					<p onClick={() => filterPrice(50, 100)}>50 - 100€</p>
					<p onClick={() => filterPrice(100, 100000)}>Über 100€</p>
				</div>
			</article>
			<article>
				<h3>Brands</h3>
				<div>
					<p onClick={(e) => setBrand(e.target.innerText)}>Apple</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>Samsung</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>OPPO</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>Huawei</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>
						LouisWill
					</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>Infinix</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>Darojay</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>Xiangle</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>DADAWU</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>YIOSI</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>
						JIEPOLLY
					</p>
				</div>
			</article>
			<div className='btnWrapper'>
				<button
					className='addFilterBtn'
					onClick={() => setSlide(!slide)}>
					Apply Filter
				</button>
				<button
					className='addFilterBtn'
					onClick={() => resetFilter()}>
					Reset Filter
				</button>
			</div>
		</section>
	);
};

export default SlideIn;
