import React from "react";

class CartTitle extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h1 className="title product-list-title">Your Cart</h1>
            </div>
        )
    }
}

export  default CartTitle;