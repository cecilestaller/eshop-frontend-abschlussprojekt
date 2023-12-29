import "./Gallery.scss";
import ProductItem from "../productitem/ProductItem";
import { useContext, useEffect, useState } from "react";
import { Products } from "../../context/Context";

const Gallery = ({ renderProducts, id }) => {
	const { price, brand } = useContext(Products);
	const [resultProducts, setResultproducts] = useState(renderProducts);
	useEffect(() => {
		if (price.lowest !== "" && price.highest !== "") {
			setResultproducts(
				[...renderProducts].filter((product) => {
					if (
						product.price > price.lowest && price.highest
							? product.price < price.highest
							: null
					) {
						return product;
					}
				}),
			);
		} else {
			setResultproducts(renderProducts);
		}
		if (brand !== "") {
			setResultproducts(
				[...resultProducts].filter((product) =>
					product.brand === brand ? product : null,
				),
			);
		}
		// console.log(price.highest, price.lowest);
	}, [renderProducts, brand, price]);

	useEffect(() => {
		setResultproducts(renderProducts);
	}, []);
	return (
		<section className='gallery'>
			{resultProducts.map((product) => (
				<ProductItem
					product={product}
					id={product.id}
					key={product.id}
					title={product.title}
					price={Number(product.price).toFixed(2)}
					image={product.thumbnail}
					rating={product.rating}
				/>
			))}
		</section>
	);
};

export default Gallery;
