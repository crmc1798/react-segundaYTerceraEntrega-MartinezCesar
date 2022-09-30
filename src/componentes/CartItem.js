import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext';
const ulStyle = { width: '25rem' }
export const CartItem = ({producto}) => {
    const {removeProduct} = useContext(CartContext);

    return (
        <div className='card container m2' style={ulStyle}>
                <img className="card-img-top  " src={producto.img} alt={producto.title}/>
            <div className='card-body'>
                <p  className="card-text">{producto.title}</p>
                <p className="card-text">precio unitario: ${producto.price}</p>
                <p className="card-text">cantidad: {producto.quantity}</p>
                <p className="card-text">Precio total: ${producto.totalPrice}</p>
                <div className='d-flex justify-content-center'>
                <button className="btn btn-outline-dark" onClick={()=>removeProduct(producto.id)}>Eliminar producto</button>
                </div>
            </div>
        </div>
    )
}