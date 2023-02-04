import Contador from "../Contador/Contador";
import { useCarritoContext } from "../../context/CarritoContext";
const ProductDetail = ({item}) => {
    const {addProduct} = useCarritoContext()

    const onAdd = (contador) => { //Agregar producto al carrito
        addProduct(item, contador)
    }

    return (
        <div className="row g-0"> 
            <div className="col-md-4 imgBody">
                <img src={item.img} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Modelo: {item.modelo}</p>
                    <p className="card-text">Marca: {item.marca}</p>
                    <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className="card-text">Stock: {item.stock}</p>
                    <Contador stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
