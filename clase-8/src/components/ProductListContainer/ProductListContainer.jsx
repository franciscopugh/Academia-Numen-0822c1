//Componente que consulta la BDD y muestra productos en el return
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

//Componente
import ProductList from '../ProductList/ProductList';

//Firebase
import { getProductos } from '../../assets/firebase';
const ProductListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {categoria} = useParams()
    useEffect(() => {

        if(categoria) { //undefined es falso
            getProductos()
            .then(items => {
                const products = items.filter(producto => 
                    producto.idCategoria === parseInt(categoria))
                    .filter(prod => prod.stock >0)
                const itemsFiltrados = ProductList({products})
                setProductos(itemsFiltrados)
            })
        } else {
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0)
                const itemsFiltrados = ProductList({products})
                setProductos(itemsFiltrados)
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
