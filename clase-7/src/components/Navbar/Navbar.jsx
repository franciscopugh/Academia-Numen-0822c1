import Secciones from "./Secciones/Secciones";
import BotonCarrito from "./BotonCarrito/BotonCarrito";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Secciones/>
              <BotonCarrito/>
            </div>
          </div>
        </nav>

    );
}

export default Navbar;
