import './App.css';
//Componentes
import Navbar from './Navbar/Navbar';
import ProductListContainer from './ProductListContainer/ProductListContainer';
const App = () =>  {
  return  (
    <>
      <Navbar/>
      <ProductListContainer/>
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
