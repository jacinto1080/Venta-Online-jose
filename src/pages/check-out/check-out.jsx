import CheckoutItems from "../../components/checkout-items/checkout-items";
import "./check-out.css"
//import productData from "../../products.json"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart-context";


const CheckOut = () => {
    const { currentCart } = useContext(CartContext)
    const [ totalCompra, setTotalCompra] = useState(0)
    
    useEffect(() => {
        let temporalBuy = 0
        currentCart.forEach(element => {
            temporalBuy = (element.quantity * element.price) + temporalBuy       
        }) 
        setTotalCompra(temporalBuy)
    }, [currentCart])
    
return (
    <div className="checkout-container" >
        <div className="checkout-header" >
            <div className="header-block">
                <span> description</span>
            </div>
            <div className="header-block">
                <span>quantity</span>
            </div>
            <div className="header-block">
                <span> price</span>
            </div>
            <div className="header-block">
                <span> remove </span>
            </div>
        </div >

        {currentCart.map((product) => {
            return (
                <CheckoutItems key={product.id} product={product} />
            )
        })}
        <div className="total">{`Total:  ${totalCompra} €`}</div>
    </div>
)
}

export default CheckOut;
