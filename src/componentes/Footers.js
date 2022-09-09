import logo from'../logo.png';

function Footers() {
    return (
        <div className="container mt-auto">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted">&copy; 2022 Simstore</p>
      
          <a href="/home" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img src={logo} height={30} width={30} alt="logo"/>
          </a>
      
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="/home" className="nav-link px-2 text-muted">Inicio</a></li>
            <li className="nav-item"><a href="/category/Trustmaster" className="nav-link px-2 text-muted">Trustmaster</a></li>
            <li className="nav-item"><a href="/category/Logitech" className="nav-link px-2 text-muted">Logitech</a></li>
            <li className="nav-item"><a href="/category/Xbox" className="nav-link px-2 text-muted">Xbox </a></li>
            <li className="nav-item"><a href="/category/PS" className="nav-link px-2 text-muted">PS</a></li>
          </ul>
        </footer>
    </div>
    );
  }
  
  export default Footers;