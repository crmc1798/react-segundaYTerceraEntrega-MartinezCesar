import ItemCount from "./ItemCount"

const ulStyle = { width: '25rem' }

const Item = ({ title, img, price, stock }) => {
    return (
        <div className="card container" style={ulStyle}>
            <img src={img} className="card-img-top " alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Precio={price} pesos</p>
                <p className="card-text">Stock={stock} unidades</p>
                <div className="d-flex justify-content-center align-items-center"><ItemCount /></div>
            </div>
        </div>
    )
}
export default Item