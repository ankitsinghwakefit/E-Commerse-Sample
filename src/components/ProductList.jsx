import React from "react";
import Title from "./Title";
import {ProductConsumer} from "../context";
import Product from "./Product";

class ProductList extends React.Component{

    render(){
        return(
            <div>
                <Title />
                <div className="productList-container">
                   <div className="productList-flex">
 
                        <ProductConsumer>
                        {(hello)=>{
                                return hello.products.map(product=>{
                                    return <Product key={product.id} product={product}  />
                                })
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        )
    }
}

export  default ProductList;