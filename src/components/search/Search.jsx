import "./Search.scss";
import Filter from "../../../public/img/Filter.svg";
import { useState, useContext, useEffect } from "react";
import { Products } from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";
import Iconblue from "./../../assets/images/splashscreen/splashscreenIcon2copyblue.svg";
import Iconorange from "./../../assets/images/splashscreen/splashscreenIcon2copyorange.svg";
import loginblue from "./../../../public/img/login.svg";
import loginorange from "./../../../public/img/logincopy.svg";
import logout from "./../../../public/img/logout.svg";

const Search = () => {
	const [searchInput, setSearchInput] = useState("");
	const [result, setResult] = useState([]);
	const navigate = useNavigate();
	const {
		products,
		slide,
		setSlide,
		loggedIn,
		setLoggedIn,
		users,
		setUser,
		user,
		setWarenkorb,
		warenkorb,
		favorites,
		setFavorites,
	} = useContext(Products);
	const darkmode = useContext(Products);

	const searchRender = "search";

	const search = () => {
		event.preventDefault();
		navigate(`/productlist/${searchRender}`, {
			state: { result },
		});
	};

	useEffect(() => {
		if (searchInput.length > 3) {
			setResult(
				[...products].filter((product) => {
					if (
						product.title.toLowerCase().includes(searchInput) ||
						product.description
							.toLowerCase()
							.includes(searchInput) ||
						product.category.toLowerCase().includes(searchInput)
					) {
						return product;
					}
				}),
			);
		}
	}, [searchInput]);

	const logOut = () => {
		setTimeout(() => window.location.reload(), 100);
		localStorage.removeItem("activeUser");
	};

	return (
		<section className='searchWrapper'>
			<div className='containerIcons_Search'>
				<Link to='/home'>
					<img
						className='icon_Search'
						src={darkmode.darkmode ? Iconorange : Iconblue}
						alt='company icon'
					/>
				</Link>
				<div className='LoginOut_Container'>
					<Link>
						<img
							className='loginImage_Search'
							src={
								logout //darkmode.darkmode ? loginorange : loginblue
							}
							alt='login button'
							onClick={() => logOut()}
						/>
					</Link>
					<Link to='/login'>
						<img
							className='loginImage_Search'
							src={darkmode.darkmode ? loginorange : loginblue}
							alt='login button'
						/>
					</Link>
				</div>
			</div>
			<div className='searchContainer_Search'>
				<form
					className='search'
					onSubmit={search}>
					<input
						type='text'
						placeholder='Search...'
						onChange={(e) => setSearchInput(e.target.value)}
					/>
				</form>
				<section className='imageHolder'>
					<img
						src={Filter}
						alt=''
						onClick={() => setSlide(!slide)}
						className='filterIcon'
					/>
				</section>
			</div>
		</section>
	);
};

export default Search;
