import React, { createContext, useState } from "react";
import { Products } from "../products";
export const ShopContext = createContext(null);

const getDefaultCart=()=>{
    let cart={}
    for(let i=1;i<Products.length;i++){
        cart[i]=0;
    }
    return cart
}
export const ShopContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart())
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const contextValue={cartItems,addToCart,removeFromCart}
    // console.log(cartItems)
    return( <ShopContext.Provider value={contextValue}>{props.childern}</ShopContext.Provider>)
}