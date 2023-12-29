import { useContext, useState, useEffect } from "react";
import { Products } from "../context/Context";
import Search from "../components/search/Search";
import CategoryBar from "../components/categorybar/CategoryBar";
import Gallery from "../components/gallery/Gallery";
import "./Home.scss";
import { Link } from "react-router-dom";
import "./Home.scss";
import SlideIn from "../components/slideIn/SlideIn";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
	const context = useContext(Products);
	const popular = [...context.products]
		.sort((a, b) => b.rating - a.rating)
		.slice(0, 10);
	const Allproducts = "all";
	const slide = context.slide;
	const setSlide = context.setSlide;
	return (
		<main className='galleryContainer_Home'>
			<SlideIn
				slide={slide}
				setSlide={setSlide}
			/>
			<Search />
			<CategoryBar />
			<div className='title'>
				<h3>Popular</h3>
				<Link to={`/productlist/${Allproducts}`}>
					<h3>All Products</h3>
				</Link>
			</div>
			<Gallery renderProducts={popular} />
			<Navbar />
		</main>
	);
};

export default Home;
