
import React from "react";
import CartContext from "./CartContext";

export default function Cart(props){
    return(
        <CartContext.Consumer> 
            {
                theme=>(
                    <h2>{theme}</h2>
                )
            }
        </CartContext.Consumer>
    )
}