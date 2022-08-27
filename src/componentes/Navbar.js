import logo from'../logo.png';
import CartWidget from "./CartWidget"

function NavBar() {
    return (
      <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src={logo} height={60} width={60} alt="logo"/>
        </a>
  
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-secondary">Inicio</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Productos</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Quienes somos</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Contacto</a></li>
        </ul>
  
        <div className="col-md-3 text-end d-flex justify-content-around">
          <button type="button" className="btn btn-outline-dark me-2 ml-4">Login</button>
          <CartWidget/>
        </div>
      </header>
    </div>
    );
  }
  export default NavBar ;

  