import "./App.scss";
import {
	allProducts,
	allCarts,
	allPosts,
	allComments,
	allTodos,
	allQoutes,
} from "./data/Data";
import { useContext, useEffect, useState } from "react";
import {
	Products,
	Carts,
	Posts,
	Comments,
	Todos,
	Qoutes,
} from "./context/Context";
import Home from "./pages/Home";
import Splashscreen from "./pages/splashscreen/Splashscreen";
import Onboarding from "./pages/Onboarding/Onboarding";
import { Route, Routes, json } from "react-router-dom";
import ProductDetails from "./components/productdetails/ProductDetails";
import Search from "./components/search/Search";
import ProduktList from "./components/productlist/ProductList";
import Favorites from "./components/favorites/Favorites";
import Cart from "./components/cart/Cart";
import Login from "./pages/Login/Login";
import UserHome from "./pages/UserHome/UserHome";


function App() {
	const productContext = useContext(Products);
	const cartsContext = useContext(Carts);
	const postsContext = useContext(Posts);
	const commetsContext = useContext(Comments);
	const todosContext = useContext(Todos);
	const qoutesContext = useContext(Qoutes);

	const [darkmode, setDarkmode] = useState(false);
	const [products, setProducts] = useState(allProducts);
	const [carts, setCarts] = useState(allCarts);

	const [posts, setPosts] = useState(allPosts);
	const [comments, setComments] = useState(allComments);
	const [todos, setTodos] = useState(allTodos);
	const [qoutes, setQoutes] = useState(allQoutes);
	const [slide, setSlide] = useState(false);
	const [price, setPrice] = useState({ lowest: "", highest: "" });
	const [brand, setBrand] = useState("");
	const [favorites, setFavorites] = useState([]);
	const [warenkorb, setWarenkorb] = useState([]);
	const [filteredCart, setFilteredCart] = useState([]);
	const [cartlength, setCartlength] = useState(filteredCart.length);
	const [filterFavorites, setFilterFavorites] = useState([]);
	const [user, setUser] = useState("");
	const [users, setUsers] = useState([]);
	const [newUser, setNewUser] = useState(0);
	const contextObject = {
		products,
		setProducts,
		carts,
		setCarts,
		posts,
		setPosts,
		comments,
		setComments,
		todos,
		setTodos,
		qoutes,
		setQoutes,
		slide,
		setSlide,
		price,
		setPrice,
		brand,
		setBrand,
		favorites,
		setFavorites,
		warenkorb,
		setWarenkorb,
		darkmode,
		setDarkmode,
		cartlength,
		setCartlength,
		filteredCart,
		setFilteredCart,
		filterFavorites,
		setFilterFavorites,
		users,
		setUsers,
		user,
		setUser,
		newUser,
		setNewUser,
	};

	useEffect(() => {
		if (localStorage.getItem("darkmode") === "true") {
			setDarkmode(true);
		} else {
			setDarkmode(false);
		}
	}, []);

	useEffect(() => {
		const activeUser = localStorage.activeUser;
		console.log(activeUser);
		setUser(activeUser);
		if (activeUser) {
			const localWarenkorb = JSON.parse(
				localStorage.getItem("cart" + activeUser),
			);
			const localfav = JSON.parse(
				localStorage.getItem("fav" + activeUser),
			);
			setWarenkorb([...new Set(localWarenkorb)]);
			setFavorites([...new Set(localfav)]);
			console.log(localStorage);
			console.log("success");
		} else {
			setWarenkorb([...warenkorb]);
			setFavorites([...favorites]);
			console.log("sucks");
		}
	}, [newUser]);

	useEffect(() => {
		console.log(user);
	}, [user]);

	useEffect(() => {
		if (user) {
			localStorage.setItem("cart" + user, JSON.stringify(warenkorb));

			localStorage.setItem("fav" + user, JSON.stringify(favorites));
		} else {
			console.log("no user available");
		}
	}, [warenkorb, favorites, user]);

	return (
		<Products.Provider value={contextObject}>
			<div className={`appContainer_App ${darkmode ? "darkmode" : ""}`}>
				<Routes>
					<Route
						path='/'
						element={<Splashscreen />}
					/>
					<Route
						path='/onboarding'
						element={<Onboarding />}
					/>
					<Route
						path='/productlist/:id'
						element={<ProduktList />}
					/>
					<Route
						path='/home'
						element={<Home />}
					/>
					<Route
						path='/product-details/:id'
						element={<ProductDetails />}
					/>
					<Route
						path='/favorites'
						element={<Favorites />}
					/>
					<Route
						path='/cart'
						element={<Cart />}
					/>
					<Route
						path='login'
						element={<Login />}
					/>
					<Route
						path='userhome'
						element={<UserHome />}
					/>
				</Routes>
			</div>
		</Products.Provider>
	);
}

export default App;
