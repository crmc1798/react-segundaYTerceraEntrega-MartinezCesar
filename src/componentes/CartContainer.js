import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { CartItem } from './CartItem';

export const CartContainer = () => {
  const {productCartList, clearProductCartList} = useContext(CartContext);
  console.log(productCartList);

  return (
    <div className='container'>
      <div>
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(producto=>(
                <CartItem key={producto.id} producto={producto}/>
                
              ))
              
            }
            <hr/>
            <button className="btn btn-outline-dark mx-4" onClick={clearProductCartList}>Vaciar el carrito</button>
            <button className="btn btn-outline-dark mx-4" >Comprar</button>
          </>
          :
          <p>No has agregado productos</p>
        }
      </div>
    </div>
  )
}