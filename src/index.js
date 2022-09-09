import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from './componentes/ItemDetailContainer.js';
import ItemDetailContainer2 from './componentes/ItemDetailContainer2.js';
import NavBar from './componentes/Navbar.js';
import Footers from './componentes/Footers.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <BrowserRouter>
  <NavBar/> 
    <Routes>
      <Route path='/home' element={<App />}/>
      <Route path='/category/Trustmaster' element={<ItemDetailContainer2 params={["Trustmaster" , "brand"]}/>}/>
      <Route path='/category/Logitech' element={<ItemDetailContainer2 params={["Logitech", "brand"]}/>}/>
      <Route path='/category/Xbox' element={<ItemDetailContainer2 params={["Xbox", "platform"]}/>}/>
      <Route path='/category/Ps' element={<ItemDetailContainer2 params={["PS", "platform"]}/>}/>
      <Route path='/detail/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    <Footers/>
    </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
