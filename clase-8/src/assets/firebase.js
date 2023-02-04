// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBqcwWG8PnzJQhSOMWd1NN9z-APJoXmPmw",
  authDomain: "numen-0822c1.firebaseapp.com",
  projectId: "numen-0822c1",
  storageBucket: "numen-0822c1.appspot.com",
  messagingSenderId: "341741830631",
  appId: "1:341741830631:web:f175a49dd55d774f34bd42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore() //Consultar Firestore

/*
CRUD
    CREATE 
    READ
    UPDATE 
    DELETE
*/

export const cargarBDD = async () => { //Async que mi funcion es asincronica
    const promise = await fetch('./json/productos.json') //await que la linea de la derecha es asincronica
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, 'productos'), { //Genero documento en la BDD
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo, 
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

export const getProductos = async () => { //Traer todos los documentos de la coleccion Productos
    const items = await getDocs(collection(db, 'productos'))
    const productos = items.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return productos
}

export const getProducto = async (id) => { //Traer solo el documento cuyo prod.id == id
    const item = await getDoc(doc(db, 'productos',id))
    const producto =  {...item.data(), id: item.id}
    
    return producto
}

export const updateProducto = async(id, info) => {
    await updateDoc(doc(db, 'productos', id), info)
    return "Producto actualizo"
}

export const deleteProducto = async(id) => {
    await deleteDoc(doc(db, 'productos', id))
    return "Producto eliminado"
}