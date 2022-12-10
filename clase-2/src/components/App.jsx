import './App.css';
import Navbar from './Navbar/Navbar';
import Saludo from './Saludo/Saludo';
function App() {
  
  return  (
    <div>
      <Saludo tipoSaludo="Buenos dias"/>
      <Navbar/>
      
    </div> 
  );
}

/*
  class -> className
  <input type="text"> -> <input type="text" />
  style=`${}` -> style={{}}
  `${var_js}` -> {var_js}
*/

export default App;
