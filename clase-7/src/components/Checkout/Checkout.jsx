import { useRef } from "react"
import { useCarritoContext } from "../../context/CarritoContext"
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom"

const Checkout = () => {
  const {carrito, totalPrice, emptyCart} = useCarritoContext()
  const datosFormulario = useRef() //Cracion de referencia con el formulario
  let navigate = useNavigate() //Referencia a la ruta donde estoy
  const consultarFormulario = (e) => {
    e.preventDefault()
    //Consultar datos del formulario y pasarlo a objeto
    const datForm = new FormData(datosFormulario.current)
    const cliente = Object.fromEntries(datForm)
    toast.success(`Hola ${cliente.nombreCompleto}, su compra por un total de  $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} ha sido realizada correctamente`)
    emptyCart()
    e.target.reset() //Limpio el formulario
    navigate("/") //Redireccione a la pagina inicial
}

  return (
    <div className="container" style={{marginTop: "20px"}}>
        <form onSubmit={consultarFormulario} ref={datosFormulario}>
            <div className="mb-3">
                <label htmlFor="nombreCompleto" className="form-label">Nombre y apellido</label>
                <input type="text" className="form-control" name="nombreCompleto"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name="email"/>
            </div>
            <div className="mb-3">
                <label htmlFor="dni" className="form-label">DNI</label>
                <input type="number" className="form-control" name="dni"/>
            </div>
            <div className="mb-3">
                <label htmlFor="celular" className="form-label">Numero de celular</label>
                <input type="number" className="form-control" name="celular"/>
            </div>
            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Direccion</label>
                <input type="text" className="form-control" name="direccion"/>
            </div>
            <button type="submit" className="btn btn-primary">Finalizar Compra</button>
        </form>
    </div>
  )
}
export default Checkout