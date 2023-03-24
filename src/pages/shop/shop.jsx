import CategoryPreview from "../../components/category-preview/category-preview";
//import ProductsCard from "../../components/products-card/products-card";
import productsData from "../../products.json"

import "./shop.css"
const Shop = () => {
    const categories = Object.keys(productsData)

    return (
        <div className="products-container">
            {
                categories.map((category) => {
                    return (
                        <CategoryPreview title={category} key={category.id}
                        productsList={productsData[category]}/>
                    )
                })}
        </div>
    )
}
export default Shop;