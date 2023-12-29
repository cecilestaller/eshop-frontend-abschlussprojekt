import Cart from "../../components/cart/Cart";
import Favorites from "../../components/favorites/Favorites";

const UserHome = () => {
    return ( 
        <section>
            <div>
                <Cart/>
            </div>
            <div>
                <Favorites/>
            </div>
        </section>
     );
}
 
export default UserHome;