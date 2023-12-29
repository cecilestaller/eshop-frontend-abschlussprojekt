import smartwatch from "../../../public/img/smartwatch.svg";
import smartphone from "../../../public/img/smartphone.png";
import sofa from "../../../public/img/sofa.svg";
import laptop from "../../../public/img/laptop.png";
import fragrance from "../../../public/img/fragrance.png";
import skincare from "../../../public/img/skincare.png";
import grocery from "../../../public/img/grocery.png";
import decoration from "../../../public/img/decoration.png";
import motorcycle from "../../../public/img/motorcycle.png";
import automotive from "../../../public/img/automotive.png";
import lighting from "../../../public/img/lighting.png";
import sunglasses from "../../../public/img/sunglasses.png";
import clothes from "../../../public/img/clothes.png";
import "./CategoryBar.scss";
import { Link } from "react-router-dom";

const CategoryBar = () => {
	const Smartphones = "smartphones";
	const Furniture = "furniture";
	const Laptops = "laptops";
	const Fragrances = "fragrances";
	const Skincare = "skincare";
	const Homedecoration = "home-decoration";
	const Motorcycle = "motorcycle";
	const Watches = "watches";
	const Groceries = "groceries";
	const Automotive = "automotive";
	const Lighting = "lighting";
	const Sunglasses = "sunglasses";
	const Dress = "dress";

	return (
		<section className='categoryBar'>
			<Link to={`/productlist/${Smartphones}`}>
				<img
					src={smartphone}
					alt=''
				/>
			</Link>
			<Link to={`/productlist/${Laptops}`}>
				<img
					src={laptop}
					alt=''
				/>
			</Link>
			<Link to={`/productlist/${Fragrances}`}>
				<img
					src={fragrance}
					alt=''
				/>
			</Link>
			<Link to={`/productlist/${Skincare}`}>
				<img
					src={skincare}
					alt=''
				/>
			</Link>
			<Link to={`/productlist/${Sunglasses}`}>
				<img
					src={sunglasses}
					alt=''
				/>
			</Link>
			<Link to={`/productlist/${Groceries}`}>
				<img
					src={grocery}
					alt=''
				/>
			</Link>
			<Link to={`/productlist/${Dress}`}>
				<img
					src={clothes}
					alt=''
				/>
			</Link>
			<Link to={`/productlist/${Furniture}`}>
				<img
					src={sofa}
					alt=''
				/>
			</Link>
			<Link to={`/productlist/${Homedecoration}`}>
				<img
					src={decoration}
					alt=''
				/>
			</Link>
			<Link to={`/productlist/${Watches}`}>
				<img
					src={smartwatch}
					alt=''
				/>
			</Link>
			<Link to={`/productlist/${Motorcycle}`}>
				<img
					src={motorcycle}
					alt=''
				/>
			</Link>
			<Link to={`/productlist/${Automotive}`}>
				<img
					src={automotive}
					alt=''
				/>
			</Link>
			<Link to={`/productlist/${Lighting}`}>
				<img
					src={lighting}
					alt=''
				/>
			</Link>
		</section>
	);
};

export default CategoryBar;
