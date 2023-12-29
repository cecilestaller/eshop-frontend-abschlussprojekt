import { useParams, useLocation, Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { Products } from "../../context/Context";
import Gallery from "../gallery/Gallery";
import Search from "../search/Search";
import "./ProductList.scss";
import Navbar from "../navbar/Navbar";
import SlideIn from "../slideIn/SlideIn";

const ProduktList = () => {
	const context = useContext(Products);
	const id = useParams().id;
	const allProducts = [...context.products];
	const [sort, setSort] = useState("");

	const searchResult = useLocation();

	const [renderProducts, setRenderProducts] = useState([]);

	const dress = [...context.products].filter((product) =>
		product.category === "tops" ||
		product.category === "womens-dresses" ||
		product.category === "womens-shoes" ||
		product.category === "mens-shirts" ||
		product.category === "womens-bags" ||
		product.category === "womens-jewellery"
			? product
			: null,
	);
	const category = [...context.products].filter((product) =>
		product.category === id ? product : null,
	);

	const watches = [...context.products].filter((product) =>
		product.category.toString().includes("watch") ? product : null,
	);

	const renderProductsHigh = [...renderProducts].sort(
		(a, b) => b.price - a.price,
	);
	const renderProductsLow = [...renderProducts].sort(
		(a, b) => a.price - b.price,
	);
	const renderProductsRating = [...renderProducts].sort(
		(a, b) => b.rating - a.rating,
	);

	useEffect(() => {
		if (id === "dress") {
			setRenderProducts(dress);
		} else if (id === "watches") {
			setRenderProducts(watches);
		} else if (id === "search") {
			setRenderProducts(searchResult.state.result);
		} else if (id === "all") {
			setRenderProducts(allProducts);
		} else {
			setRenderProducts(category);
		}
	}, [id, searchResult, sort]);

	return (
		<section className='productList'>
			<SlideIn />
			<Search />
			<form className='sortandall'>
				<label htmlFor=''>
					sort by:
					<select
						onChange={(e) => setSort(e.target.value)}
						name=''
						id=''>
						<option value='bestRating'>Best Rating</option>
						<option value='lowestPrice'>Lowest Price</option>
						<option value='highestPrice'>Highest Price</option>
					</select>
				</label>
			</form>
			<Gallery
				renderProducts={
					sort === "highestPrice"
						? renderProductsHigh
						: sort === "lowestPrice"
						? renderProductsLow
						: renderProductsRating
				}
				setRenderProducts={setRenderProducts}
				id={id}
			/>
			<Navbar />
		</section>
	);
};

export default ProduktList;
