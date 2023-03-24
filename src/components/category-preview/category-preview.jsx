import { Link } from "react-router-dom";
import ProductsCard from "../products-card/products-card";
import "./category-preview.css"

const CategoryPreview = ({ title, productsList }) => {

    return (
        <div className="category-preview-container">
            <h2>
                <Link to={`/shop/${title}`} >
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className="preview">
                {productsList.map((product, index) => {
                    if (index < 4) {
                        return (
                            <ProductsCard product={product} key={product.id} />
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default CategoryPreview;

