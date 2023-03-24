import "./cart-dropdown.css"
import Button from "../button/button";
//import productData from "../../products.json"
import CartItems from "../card-items/card-items";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

const CartDropdown = () => {
    const {currentCart}=useContext(CartContext)
    const navigate = useNavigate()
    return (
        <div className="cart-dropdown-container" >
            <div className="cart-items">
            {currentCart.map((product)=>      
            <CartItems key={product.id} product={product} />        
            )}
            </div>
            <Button onClick={()=>navigate("/checkout")} buttonText="Go to Checkout" />
        </div>
    )
}
export default CartDropdown;