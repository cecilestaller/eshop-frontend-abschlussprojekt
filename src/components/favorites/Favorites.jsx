import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Products } from "./../../context/Context";
import ProductItem from "../productitem/ProductItem";
import './Favorites.scss'
import Navbar from "../navbar/Navbar";
import HeartFilled from "../svg/HeartFilled";
import Star from "../svg/Star";
import Frame from "../../../public/img/Frame.svg";
import Framecopy from "../../../public/img/Framecopy.svg";

const favorites = () => {
    const { favorites, setFavorites, filterFavorites, setFilterFavorites, darkmode, setDarkmode, warenkorb, setWarenkorb } = useContext(Products);
    console.log('Array favorites', favorites);

    
    useEffect(() => {
        setFilterFavorites([...new Set(favorites)])
    }, [favorites])

    const deleteFavorite = (id) => {
        const filteredFavorites = favorites.filter((singleProduct) => singleProduct.id !== id);
        setFavorites(filteredFavorites);
    }

    const addToCart = (object) => {
		setWarenkorb([...warenkorb, object] )
	}
    console.log(filterFavorites);

    return (  
        <>
        <section className="favorites_wrap">
            <h2>Your desired products</h2>
            <section className="new_wrap_favorites">
            {filterFavorites.length !== 0 ? (
                filterFavorites.map((product, index) => (

                    <div className="singleFavoriteItem_wrap" key={index}>

                        <Link  to={`/product-details/${product.id}`}>
                            <img src={product.thumbnail} alt={product.title} className="productImage_favorites"/>
                            <h2>{product.title}</h2>
                            <h4 className='rating_favorites'> <Star /> {product.rating}</h4>
                        </Link>

                        <div className="pricingContainer_favorites">
                            <h3 className="price_favorites">${Number(product.price).toFixed(2)}</h3>

                            <div onClick={() => deleteFavorite(product.id)} className="filledHeart_wrap_favorites">
                                <HeartFilled/>
                            </div>

                            <Link className='addButton_favorites' onClick={() => addToCart(product)}>
					            <img
						            src={darkmode ? Framecopy : Frame}
						            alt='button for adding to cart'
						            className='addButton'/>
				            </Link>
                        </div>
                        
                    </div>
                ))) : (
                    <p>No favorites selected yet</p>
                )
            }
            </section>
        </section>
        <Navbar />
        </>
    );
}
 
export default favorites;