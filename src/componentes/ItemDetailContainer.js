import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from "react";
import productosJson from "../productos.json"
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [productos, setproductos] = useState([]);
    const {id} = useParams()

    const getProductos = (data, time) =>
        new Promise((resolve, reject) => {
            setTimeout(async() => {
                if (data) {
                    resolve(data);
                }
                else {
                    reject("error");
                }
            }, time);
        });
        useEffect(()=>{
            getProductos(productosJson[id], 2000).then((res)=>{
                setproductos(res);
                console.log(res);
            })
            .catch((err)=>console.log(err, ": Error no hay productos"))
        },[id]);
  return (
    <ItemDetail productos={productos}/>
  )
}
export default ItemDetailContainer