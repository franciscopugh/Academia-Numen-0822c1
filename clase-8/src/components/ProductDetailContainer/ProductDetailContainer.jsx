import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Componente 
import ProductDetail from "../ProductDetail/ProductDetail";

//Firebase
import { getProducto } from "../../assets/firebase";

const ProductDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        getProducto(id)
        .then(product => {
            setProducto(product)
        })
    }, []);
    return (
        <div className="card mb-3 container itemDetail">
            <ProductDetail item = {producto} />
        </div>
    );
}

export default ProductDetailContainer;
