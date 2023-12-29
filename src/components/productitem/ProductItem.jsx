import { Link } from "react-router-dom";
import "./ProductItem.scss";
import Frame from "../../../public/img/Frame.svg";
import Framecopy from "../../../public/img/Framecopy.svg";
import { useContext, useState } from "react";
import Star from "../svg/Star";
import { Products } from "../../context/Context";

const ProductItem = ({ count, id, product, title, price, image, rating }) => {
	const { warenkorb, setWarenkorb, loggedIn, users } = useContext(Products);
	const changeIcon = useContext(Products);

	const addToCart = () => {
		setWarenkorb([...warenkorb, product]);
		localStorage.setItem("users", JSON.stringify(users));
	};

	return (
		<article className='productItem'>
			<Link
				className='productinfoLink_ProductItem'
				to={`/product-details/${id}`}>
				<img
					src={image}
					alt=''
					className='productImage'
				/>
				<h4 className='rating_productitem'>
					<Star /> {rating}
				</h4>
				<h2>{title}</h2>
			</Link>
			<div className='priceContainer'>
				<h3>${Number(price).toFixed(2)}</h3>
				<Link
					className='addButton'
					onClick={() => addToCart()}>
					<img
						src={changeIcon.darkmode ? Framecopy : Frame}
						alt='button for adding to cart'
						className='addButton'
					/>
				</Link>
			</div>
			<p>{count}</p>
		</article>
	);
};

export default ProductItem;
