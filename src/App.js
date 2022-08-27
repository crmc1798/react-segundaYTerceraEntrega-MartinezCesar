import NavBar from './componentes/Navbar.js';
import Footers from './componentes/Footers.js';
import ItemListContainer from './componentes/ItemListContainer.js';

function App() {
  return <>
    <NavBar/>
    <ItemListContainer greeting={'Lista de articulos'}/>
    <Footers/>
    </>
}

export default App;
