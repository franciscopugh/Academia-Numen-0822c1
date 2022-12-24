//Componente que consulta la BDD y muestra productos en el return
import {useState,useEffect} from 'react'
import ProductList from '../ProductList/ProductList';

const ProductListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('./json/productos.json')
        .then(promise => promise.json())
        .then(products => {
            console.log(products)
            const items = ProductList({products})
            console.log(items)
            setProductos(items)
        })
    }, [])

    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    );
}

export default ProductListContainer;
