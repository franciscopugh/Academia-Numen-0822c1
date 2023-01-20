import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Context
import { CarritoProvider } from '../context/CarritoContext';

//Componentes
import Navbar from './Navbar/Navbar';
import ProductListContainer from './ProductListContainer/ProductListContainer';
import Contacto from './Contacto/Contacto';
import ProductDetailContainer from './ProductDetailContainer/ProductDetailContainer';
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
            <Route path='/checkout' element={<p>Checkout</p>}/>
            <Route path='/carrito' element={<p>Carrito</p>}/>
            <Route path='/contacto' element={<Contacto/>}/>
          </Routes>
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
