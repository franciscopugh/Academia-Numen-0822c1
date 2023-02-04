import { Link } from "react-router-dom"
import { useCarritoContext } from "../../context/CarritoContext"

const Carrito = () => {

    const {carrito, emptyCart, totalPrice, removeItem} = useCarritoContext()

    return (
        <>
            {carrito.length === 0 
            ? 
                <>
                    <h1>Carrito vacio</h1>
                    <button className="btn btn-dark"><Link to={"/"} className="nav-link">Ir al inicio</Link></button>
                </>
            : 
                <div className="container row carritoContainer">
                        {carrito.map(prod => 
                            <div className="card mb-3" key={prod.id} style={{maxWidth:'240px'}}>
                                <div className="row g-0">
                                    <img src={prod.img} className="img-fluid rounded-start" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{prod.nombre} {prod.modelo}</h5>
                                    <p className="card-text">Cantidad: {prod.cant}</p>
                                    <p className="card-text">Precio unitario: ${new Intl.NumberFormat('de-DE').format(prod.precio) }</p>
                                    <p className="card-text">Subtotal: ${new Intl.NumberFormat('de-DE').format(prod.precio * prod.cant) }</p>
                                    <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
                                </div>
                            </div>
                        )}

                        <div className="divButtons">
                            <p>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                            <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
                            <button className="btn btn-dark"><Link className="nav-link" to={"/"}>Continuar comprando</Link></button>
                            <button className="btn btn-dark"><Link className="nav-link" to={"/checkout"}>Finalizar Compra</Link></button>
                        </div>
                </div>
            }
        </>
    
    )
}

export default Carrito