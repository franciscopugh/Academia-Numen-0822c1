import { Link } from "react-router-dom";
const Categorias = () => {
    return (
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/categoria/1"}>Notebooks</Link></li>
            <li><Link className="dropdown-item" to={"/categoria/2"}>Celulares</Link></li>
            <li><Link className="dropdown-item" to={"/categoria/3"}>Televisores</Link></li>
            <li><Link className="dropdown-item" to={"/categoria/4"}>Electronica</Link></li>
          </ul> 
    );
}

export default Categorias;
