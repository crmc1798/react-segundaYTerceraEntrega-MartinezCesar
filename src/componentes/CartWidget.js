import carrito from'../carrito2.png';
import {Link} from 'react-router-dom';
import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext';

const CartWidget = () => {
    const {getTotalProducts, productCartList} = useContext(CartContext);

    return (
        
        <div>
           {
            
        
            productCartList.length>0 &&
            <>
            <Link to="/cart">
                    <img src={carrito} height={50} width={50} alt="carrito"/>
                </Link>
                <span style={{ borderRadius:"50%", width:"30px", heigth:"30px", fontSize:"30px", color:"black"}}>
                    {getTotalProducts()}
                </span>
            </>
        }
    </div>
    )
  }
  export default CartWidget