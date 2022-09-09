const ulStyle = { width: '25rem' }


const Item = ({ id, title, img, price }) => {
    let url = id - 1;
    return (
        <div className="card container m2" style={ulStyle}>
            <a href={'/detail/item/' + url}>
                <img src={img} className="card-img-top  " alt="..." />
            </a>

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-subtitle">${price}</p>
                <div className="d-flex justify-content-center align-items-center">
                    <a href={'/detail/item/' + url}>
                        <button type="button" class="btn btn-outline-dark">ver detalles</button>
                    </a>

                </div>
            </div>
        </div>
    )
}
export default Item