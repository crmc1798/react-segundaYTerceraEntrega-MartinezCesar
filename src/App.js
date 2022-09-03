import NavBar from './componentes/Navbar.js';
import Footers from './componentes/Footers.js';
import ItemListContainer from './componentes/ItemListContainer.js';
import ItemContainer from './componentes/ItemContainer.js';

function App() {
  return <>
    <NavBar/>
    <ItemListContainer greeting={'Lista de articulos'}/>
    <ItemContainer/>
    <Footers/>
    </>
}

export default App;
