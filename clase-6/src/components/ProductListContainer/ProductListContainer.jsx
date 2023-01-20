//Componente que consulta la BDD y muestra productos en el return
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

//Componente
import ProductList from '../ProductList/ProductList';

const ProductListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {categoria} = useParams()
    useEffect(() => {

        if(categoria) { //undefined es falso
            fetch('../json/productos.json')
            .then(promise => promise.json())
            .then(items => {
                const products = items.filter(producto => 
                    producto.idCategoria === parseInt(categoria))
                const itemsFiltrados = ProductList({products})
                setProductos(itemsFiltrados)
            })
        } else {
            fetch('./json/productos.json')
            .then(promise => promise.json())
            .then(products => {
                const items = ProductList({products})
                setProductos(items)
            })
        }
        
    }, [categoria])

    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    );
}

export default ProductListContainer;
