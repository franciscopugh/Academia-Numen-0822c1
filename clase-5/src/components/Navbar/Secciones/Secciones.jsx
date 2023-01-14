import { Link } from "react-router-dom";
import Categorias from "../Categorias/Categorias";
const Secciones = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/contacto"}>Contacto</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <Categorias/>
        </li>
      </ul>
    );
}

export default Secciones;
