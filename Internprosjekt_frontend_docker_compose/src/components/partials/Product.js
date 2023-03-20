import { classNameArrayToString } from "../../functions/guiHelpers";
import style from "./Product.module.scss";

function Product({ product }) {
    return (
        <div className={classNameArrayToString([style.product, style[product.category]])}>
            <img src={product.thumbnail} alt={product.title} />
            <div className={style.productInfo}>
                <h2>
                    {product.brand} - {product.title} {product.rating > 4.5 ? "👍" : "👎"}
                </h2>
                <p>{product.description}</p>
            </div>
        </div>
    );
}

export default Product;
