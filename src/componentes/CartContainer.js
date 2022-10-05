import React from 'react';
import { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import validator from 'validator'



export const CartContainer = () => {
  const { productCartList, clearProductCartList } = useContext(CartContext);
  //console.log("hola");

  const newtotal = productCartList.map(item => item.totalPrice).reduce((prev, curr) => prev + curr, 0);

  const arregloId = productCartList.map(item => item.id);
  const arregloStock = productCartList.map(item => item.stock - item.quantity);
  //console.log(productCartList);
  // console.log(arregloStock);
  const fecha=new Date();
  const [idOrder, setIdOrder] = useState("");
  const db = getFirestore();

  const sendOrder = (e) => {
    e.preventDefault();
    
    console.log(validator.isEmail(e.target[2].value))
    if((e.target[0].value.length>0)&&(e.target[1].value.length>=10)&&(validator.isEmail(e.target[2].value))){
    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value
      },
      items: productCartList,
      date: fecha,
      total: newtotal
    }
    const queryRef = collection(db, "orders");
    addDoc(queryRef, order).then(respuesta => setIdOrder(respuesta.id));
    console.log(idOrder);

    for (let i = 0; i < arregloId.length; i++) {
      //console.log(arregloId[i]+"hola");
      //console.log(arregloStock[i]+"bye");
      const orderDoc = doc(db, "items", arregloId[i]);
      updateDoc(orderDoc, { stock: arregloStock[i] });
    }
    
    alert("Orden enviada");
    clearProductCartList();
    e.target.reset();
  }
  else{
    alert("Favor de llenar de forma correcta el Formulario. Gracias");
  }

  }


  return (
    <div className='container'>
      <div>
        {
          productCartList.length > 0 ?
            <>
              {
                productCartList.map(producto => (
                  <CartItem key={producto.id} producto={producto} />

                ))

              }
              <hr />
              <div className='d-flex justify-content-center'>
                <button className="btn btn-outline-dark mx-2" onClick={clearProductCartList}>Vaciar el carrito</button>
                <button className="btn btn-outline-dark mx-2" >Total=${newtotal}</button>
              </div>


              <form id="my_form" onSubmit={sendOrder}>
                <div className="mb-3">
                  <label htmlFor="Nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="Nombre" />
                </div>

                <div className="mb-3">
                  <label htmlFor="Telefono" className="form-label">Telefono</label>
                  <input type="number" className="form-control" id="Telefono" />
                </div>

                <div className="mb-3">
                  <label htmlFor="Correo" className="form-label">Correo</label>
                  <input type="email" className="form-control" id="Correo" />
                </div>
                <button type="submit" className="btn btn-outline-dark">Enviar orden</button>
              </form>
            </>
            :
            <div className='d-flex justify-content-center'>

              <Link to="/"><button className="btn btn-outline-dark" >No has agregado productos ir a Inicio</button></Link>
            </div>


        }
      </div>

      
    </div>
  )
}