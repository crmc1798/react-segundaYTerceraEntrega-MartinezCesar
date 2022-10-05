//Queda como pendiente agregar estilos diferentes a los de la hoja principal
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import ItemCount from "./ItemCount"
import {Link} from 'react-router-dom';

const ulStyle = { width: '25rem' }

const Item2 = ({ title, img, price, stock, description, id }) => {
let nuevo = {title, img, price, stock, description, id};
//console.log(nuevo)
const {addProduct, productCartList} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);
    //console.log(quantity);

    const onAdd = (count)=>{
        addProduct(nuevo,count);
        setQuantity(count);
    }

    for (let i = 0; i < productCartList.length; i++) {
        if(productCartList[i].title===title){
            stock=productCartList[i].stock-productCartList[i].quantity;
           //console.log(stock)
           //console.log(productCartList[i])
        }

    }

    
    

    //console.log(nuevo)
    return (
        <div className="card container" style={ulStyle}>
            <img src={img} className="card-img-top " alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">${price} pesos</p>
                <p className="card-text">Disponibles={stock} unidades</p>
                
                <div className="d-flex justify-content-center align-items-center">
                    {
                        (stock>0)  &&
                        
                        <ItemCount stock={stock} key={id} onAdd={onAdd}/>
                    }
                {
                    quantity>0 &&
                    <Link to="/cart">
                        <button className="btn btn-outline-dark mx-4">Ir al carrito</button>
                    </Link>
                } </div>
            </div>
        </div>
    )
}
export default Item2