//Queda como pendiente agregar estilos diferentes a los de la hoja principal

import ItemCount from "./ItemCount"

const ulStyle = { width: '25rem' }

const Item2 = ({ title, img, price, stock, description }) => {
    return (
        <div className="card container" style={ulStyle}>
            <img src={img} className="card-img-top " alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">${price} pesos</p>
                <p className="card-text">Disponibles={stock} unidades</p>
                <div className="d-flex justify-content-center align-items-center"><ItemCount /></div>
            </div>
        </div>
    )
}
export default Item2