import logo from'../logo.png';
import {NavLink, Link} from 'react-router-dom';


function Footers() {
    return (
        <div className="container mt-auto">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted">&copy; 2022 Simstore</p>
      
          <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img src={logo} height={30} width={30} alt="logo"/>
          </Link>
      
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-muted">Inicio</NavLink></li>
            <li className="nav-item"><NavLink to="/category/Trustmaster" className="nav-link px-2 text-muted">Trustmaster</NavLink></li>
            <li className="nav-item"><NavLink to="/category/Logitech" className="nav-link px-2 text-muted">Logitech</NavLink></li>
            <li className="nav-item"><NavLink to="/category/Xbox" className="nav-link px-2 text-muted">Xbox </NavLink></li>
            <li className="nav-item"><NavLink to="/category/PS" className="nav-link px-2 text-muted">PS</NavLink></li>
          </ul>
        </footer>
    </div>
    );
  }
  
  export default Footers;