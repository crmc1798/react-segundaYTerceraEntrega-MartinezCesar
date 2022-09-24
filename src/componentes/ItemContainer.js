//import productosJson from "../productos.json"
import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore} from "firebase/firestore";

let ids;
const ItemContainer = () => {
    const [productos, setproductos] = useState([]);

    useEffect(() => {
        getItems();
    },[]);

    const getItems = () => {
        const db = getFirestore();
        const itemRef = collection(db, 'items');
        getDocs(itemRef).then( (snapshot)  => {
            ids=snapshot.docs.map( d => ({id: d.id, ...d.data()}))
            setproductos(ids);
        });
    }

    //console.log(ids);

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
    //         getProductos(productosJson, 2000).then((res)=>{
    //             setproductos(res);
    //         })
    //         .catch((err)=>console.log(err, ": Error no hay productos"))
    //     },[]);

    return (
            <ItemList productos={productos}/>

    );
}

export default ItemContainer;
