//import productosJson from "../productos.json"
import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore} from "firebase/firestore";

let ids;

const ItemDetailContainer2 = (param) => {
    //console.log(param.params[0]);
    let param2 = param.params[1];
    // console.log(param2)
    // console.log(param.params[0])
    
    const [productos, setproductos] = useState([]);

    useEffect(() => {
        const getItems = () => {
            const db = getFirestore();
            const itemRef = collection(db, 'items');
            getDocs(itemRef).then( (snapshot)  => {
                ids=snapshot.docs.map( d => ({id: d.id, ...d.data()}))
                setproductos(ids.filter(function(item) {
                    return item[param2] === param.params[0];
                }));
                
            });
        }
        getItems();
    },[param2,param.params]);

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
    //         getProductos((productosJson.filter(function(item) {
    //             return item[param2] === param.params[0];
    //         })), 2000).then((res)=>{
    //             setproductos(res);
    //         })
    //         .catch((err)=>console.log(err, ": Error no hay productos"))
    //     },[param2,param.params]);

    return (
            <ItemList productos={productos}/>

    );
}

export default ItemDetailContainer2;
