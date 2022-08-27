import logo from'../logo.png';

function Footers() {
    return (
        <div className="container mt-auto">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted">&copy; 2022 Simstore</p>
      
          <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img src={logo} height={30} width={30} alt="logo"/>
          </a>
      
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Inicio</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Productos</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Quienes Somos</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Contacto</a></li>
          </ul>
        </footer>
    </div>
    );
  }
  
  export default Footers;