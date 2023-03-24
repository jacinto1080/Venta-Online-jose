import { useParams } from "react-router-dom"
import ProductsCard from "../../components/products-card/products-card"
import productList from "../../products.json"

const ProductList = () => {
    const { category } = useParams()
    return (
        <>
            <h2 className="category-title">
                {category.toUpperCase()}
            </h2>
            <div className="category-containers">
                {productList[category].map((product) => {
                    return (
                        <ProductsCard product={product} key={product.id} />
                    )
                })}
            </div>
        </>
    )
}
export default ProductList