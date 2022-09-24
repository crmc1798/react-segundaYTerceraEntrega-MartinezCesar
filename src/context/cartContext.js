import { createContext, useEffect, useState } from "react";
import {doc, getFirestore, updateDoc, getDoc,} from "firebase/firestore";

export const  CartContext = createContext ();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (id)=>{
        const elementExists = productCartList.some((elemento)=>elemento.id === id);
        return elementExists;
    }

    const addProduct = (product, qty)=>{
        const newList = [...productCartList];
        if(isInCart(product.id)){
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + qty;
            newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].price;
            setProductCartList(newList)
        } else{
            const newProduct={...product, quantity:qty, totalPrice: qty*product.price}
            const newList = [...productCartList];
            newList.push(newProduct);
            setProductCartList(newList);
        }
    }

    const removeProduct = (idProduct)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);
    }

    const clearProductCartList=()=>{
        setProductCartList([])
    }
    

    const getTotalProducts = ()=>{
        const totalProducts = productCartList.reduce((acc,item)=>acc + item.quantity,0);
        console.log(productCartList.reduce((acc,item)=>acc + item.quantity,0))
        return totalProducts;
    }

    const updateOrder = (totalProducts) => {
        const db = getFirestore();

        const orderDoc = doc(db, "total", "1");
        updateDoc(orderDoc, {total: totalProducts});
    }

    useEffect(() => {
        const db = getFirestore();
        let data;
        const itemRef = doc(db, "total", "1");
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()){
                data=snapshot.data();
                console.log(data);
            }
        })
    })

    return(
        <CartContext.Provider value={{productCartList,addProduct, removeProduct, clearProductCartList, isInCart, getTotalProducts}}>
            {children}
        </CartContext.Provider>
    )
}