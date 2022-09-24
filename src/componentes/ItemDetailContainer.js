import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from "react";
//import productosJson from "../productos.json"
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore} from "firebase/firestore";

let ids;

const ItemDetailContainer = () => {
    const [productos, setproductos] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        const getItems = () => {
            const db = getFirestore();
            const itemRef = collection(db, 'items');
            getDocs(itemRef).then( (snapshot)  => {
                ids=snapshot.docs.map( d => ({id: d.id, ...d.data()}))
                setproductos(ids[id]);
            });
        }
        getItems();
    },[id]);

    

    // const getProductos = (data, time) =>
    //     new Promise((resolve, reject) => {
    //         setTimeout(async() => {
    //             if (data) {
    //                 resolve(data);
    //             }
    //             else {
    //                 reject("error");
    //             }
    //         }, time);
    //     });
    //     useEffect(()=>{
    //         getProductos(productosJson[id], 2000).then((res)=>{
    //             setproductos(res);
    //         })
    //         .catch((err)=>console.log(err, ": Error no hay productos"))
    //     },[id]);
  return (
    <ItemDetail productos={productos}/>
  )
}
export default ItemDetailContainer