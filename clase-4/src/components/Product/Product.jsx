//Componente encargado de ser de productos

const Product = ({prod}) => {
    return (
        <div className="card cardProducto">
            <img src={prod.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">Modelo: {prod.modelo}</p>
                <p className="card-text">Marca: {prod.marca}</p>
                <p className="card-text">Precio: ${prod.precio}</p>
                <p className="card-text">Stock: {prod.stock}</p>
                <button className="btn btn-dark">Ver Producto</button>
            </div>
        </div>

    );
}

export default Product;
