import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import Button from "../button/button"
import "./products-card.css"


const ProductsCard = ({ product }) => {
    const {addItemToCart}=useContext(CartContext)
    return (
        <div className="product-card-container">
            <img src={product.imageUrl} alt={product.name} />
            <div className="footer">
                <span className="name">
                    {product.name}
                </span>
                <span className="price">
                    {product.price}
                </span>
            </div>
            <Button onClick={()=>addItemToCart(product)} 
            buttonText="Add to cart" buttonClass="inverted" />
        </div>
    )
}
export default ProductsCard;