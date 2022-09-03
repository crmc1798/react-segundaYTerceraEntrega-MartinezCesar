import productosJson from "../productos.json"
import ItemList from "./ItemList"
import { useEffect, useState } from "react";

const ItemContainer = () => {
    const [productos, setproductos] = useState([]);

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
            getProductos(productosJson, 2000).then((res)=>{
                setproductos(res);
            })
            .catch((err)=>console.log(err, ": Error no hay productos"))
        },[]);

    return (
            <ItemList productos={productos}/>

    );
}

export default ItemContainer;
