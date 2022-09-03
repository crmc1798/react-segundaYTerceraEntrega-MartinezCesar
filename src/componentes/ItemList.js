import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <div>
            {productos.length ? (
                productos.map((producto) => <Item key={producto.id} {...producto}/>)
            ):(
            <h2>Cargando...</h2>
            )}
        </div>
    )
  }
  export default ItemList