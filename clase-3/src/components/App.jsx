import './App.css';
//Componentes
import Navbar from './Navbar/Navbar';
import Contador from './Contador/Contador';
const App = () =>  {
  return  (
    <>
      <Navbar/>
      <Contador stock={15}/>
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
