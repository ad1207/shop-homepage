import React from "react";
import { useState, createContext } from "react";
import CartContext from "./cartCon";
import { CardComponent } from "./section";
import NavbarComponent from './navbar';
import HeaderComponent from './header';
import SectionComponent from './section';
import FooterComponent from './footer';

function ShopComponent(){
    const [cart,setCart]=useState(0);
    const handleIncrement = () =>{
        setCart(cart+1);
    }
    const handleDecrement = () =>{
        setCart(cart-1);
    }
    return(
        <span>
        <CartContext.Provider value={{cart:cart, handleIncrement:handleIncrement, handleDecrement:handleDecrement}}>
        <NavbarComponent />
        <HeaderComponent />
        <SectionComponent />
        <FooterComponent />
        </CartContext.Provider></span>
    )
}
export default ShopComponent;