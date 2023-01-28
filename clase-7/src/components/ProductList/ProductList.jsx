//Llama al molde y genera un array de productos
import Product from "../Product/Product";

const ProductList = ({products}) => {
    return (
        <>
            {
                products.map(product => <Product prod={product} key={product.id}/>)
            }
        </>
    );
}

export default ProductList;
