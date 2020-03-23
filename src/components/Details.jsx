import React from "react";
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";

class Details extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <ProductConsumer>
                {(value)=>{
                   const{id, company, img, info,price, title,inCart} = value.detailProduct;
                   return (
                    <div className="container">
                    <div className="notification">
                    <div className="box">
                        <article className="media product-details-flex">
                            <div className="media-left">
                            <figure className="image is-800x480">
                                <img src={img} alt="Image"/>
                            </figure>
                            </div>
                            <div className="media-content">
                            <div className="content">
                                <p>Model : <strong>{title}</strong></p>
                                <p>Company : <strong>{company}</strong></p>
                                <p>Price($) : <strong>{price}/-</strong></p>
                                <p>Marketing by : 
                                <strong>{company}</strong> <small>@FreeBuys</small> <small>31m</small>
                                <br/>
                                
                                </p>
                                <p>Info : {info}</p><br/>
                                <Link to="/" className="level-item" aria-label="reply">
                                <button className="button is-black">Back to Products</button>
                                </Link><br/>
                                <Link to="/cart" className="level-item" aria-label="retweet">
                                <button className="button is-black" disabled={
                                        inCart ? true : false
                                    } onClick={()=>{console.log("added to cart")}}  onClick={()=>{
                                        value.addToCart(id)
                                    }}
                                    >Add to Cart+</button>
                                </Link>
                                {inCart ? (<div><strong>In Cart</strong></div>) : ""}
                            </div>
                           
                            </div>
                        </article>
                        </div>
                    </div>
                  </div>
                   )
                }}
            </ProductConsumer>
        )
    }
}

export  default Details;