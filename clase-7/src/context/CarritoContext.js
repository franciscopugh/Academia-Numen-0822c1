import {useContext, createContext, useState} from 'react'
    //Usar el contexto //Crear contexto

const CarritoContext = createContext() //Creando el contexto

export const useCarritoContext = () => useContext(CarritoContext) //Utilizar el contexto

export const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([])

    const isInCart = (id) => {
        return carrito.find(producto => producto.id === id)//El objeto si existe, undefined si no
    }

    const addProduct = (producto, cantidad) => {
        if(isInCart(producto.id)){ //Existe el producto
            const indice = carrito.findIndex(prod => prod.id === producto.id )
            const aux = [...carrito] //Array auxiliar
            aux[indice].cant = cantidad //Asigno nueva cantidad
            setCarrito(aux)
        } else { //No existe el producto
            const nuevoProducto = {
                ...producto,
                cant: cantidad
            }
            setCarrito([...carrito, nuevoProducto])
        }
    }

    const emptyCart = () => {
        setCarrito([]) //Elimino todos los productos del carrito
    }

    const removeItem = (id) => {
        setCarrito(carrito.filter(producto => producto.id != id))
    }

    const getItemQuantity = () => {
       
        return carrito.reduce((acum,prod) => acum += prod.cant, 0)
    }

    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio),0)
    }
    console.log(carrito)
    return (
        <CarritoContext.Provider value={{carrito, isInCart, addProduct, emptyCart,removeItem,getItemQuantity, totalPrice}}>
            {props.children}
        </CarritoContext.Provider>
    )
}