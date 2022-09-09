import React from 'react'
import Item from "./Item2"

const ItemDetail = ({productos}) => {
  return (

    <div>
    {productos.length === undefined ? (
        <Item key={productos.id} {...productos}></Item>):(
    <h2 className="container">Cargando...</h2>
    )}
    </div>
    
  )
}

export default ItemDetail