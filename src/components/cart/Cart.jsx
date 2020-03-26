import React from "react";
import CartTitle from "../CartTitle";
import {ProductConsumer} from "../../context";
import EmptyCart from "./EmptyCart";

class Cart extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <CartTitle />
                <div class="container cart-container">
                        <div class="notification">
                        <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
                        <div className="column">
                            PRODUCTS
                        </div>
                        <div className="column">
                            NAME OF PRODUCT
                        </div>
                        <div className="column">
                            PRICE
                        </div>
                        <div className="column">
                            QUANTITY
                        </div>
                        <div className="column">
                            REMOVE
                        </div>
                        <div className="column">
                            TOTAL
                        </div>
                            </div>


                            <ProductConsumer>
                                {value=>{
                                    console.log(value)
                                    const {cart, detailProduct}= value;
                                    if(cart.length>0){
                                        cart.map(eachProduct=>{
                                            console.log(eachProduct.title)
                                            return(
                                                <div>
                                                    <h1>Working on cart.</h1>
                                                    <EmptyCart eachProduct={eachProduct}/>
                                                </div>
                                            )
                                        })
                                        
                                    }else{
                                        return(
                                            <div></div>
                                        )
                                    }
                                }}
                            </ProductConsumer>


                            <div className="cart-total-div">
                            <div>
                                <div><button className="button ">Clear Cart</button></div>
                                <div>Sub Total : 584 </div>
                                <div>Tax : 54 </div>
                                <div>Total : 4587</div>
                            </div>
                        </div>
                        </div>
                        
                </div>
            </div>
        )
    }
}

export  default Cart;

