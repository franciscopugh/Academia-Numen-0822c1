import './App.css';
import 'react-toastify/dist/ReactToastify.css'

//Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//React Toastify
import { ToastContainer } from 'react-toastify';

//Context
import { CarritoProvider } from '../context/CarritoContext';

//Componentes
import Navbar from './Navbar/Navbar';
import ProductListContainer from './ProductListContainer/ProductListContainer';
import Contacto from './Contacto/Contacto';
import ProductDetailContainer from './ProductDetailContainer/ProductDetailContainer';
import Carrito from './Carrito/Carrito';
import Checkout from './Checkout/Checkout';

const App = () =>  {
  return  (
    <>
      <CarritoProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ProductListContainer/>}/>
            <Route path='/categoria/:categoria' element={<ProductListContainer/>}/>
            <Route path='/producto/:id' element={<ProductDetailContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
          </Routes>
          <ToastContainer/>
        </BrowserRouter>
      </CarritoProvider>
      
    </>
      
  );
}

/*
  class -> className
  <input type="text"> -> <input type="text" />
  style=`${}` -> style={{}}
  `${var_js}` -> {var_js}
*/

export default App;
