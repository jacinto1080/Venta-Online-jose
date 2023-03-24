import { useContext, useEffect, useState } from "react";
import { ReactComponent as LogoCart } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart-context";
import "./cart-icon.css"

const CartIcon = ({onClickIcon}) => {
    const {currentCart}=useContext(CartContext)
    const [articleTotal,setArticleTotal]=useState(0)
    
    useEffect(()=>{
    let temporalQuantity = 0 ;

    currentCart.forEach(element => {
        temporalQuantity = temporalQuantity + element.quantity
    })
    setArticleTotal(temporalQuantity)
})

    return (
        <div onClick={onClickIcon} className="cart-icon-container" >
            <LogoCart className="shopping-icon" />
            <span className="item-count">{articleTotal}</span>
        </div>
    )
}
export default CartIcon;