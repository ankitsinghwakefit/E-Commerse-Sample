import React, { Component } from 'react'
import {storeProducts, detailProduct} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state={
        products : [],
        detailProduct : detailProduct,
        cart :storeProducts,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
    }
    componentDidMount(){
        this.setProducts();
    }

    setProducts = ()=>{
        let tempProducts = [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        this.setState(()=>{
            return { products : tempProducts }
        })
    }

    getItem=(id)=>{
        const product = this.state.products.find(item => item.id === id)
        return product;
    }

    handelDetails =(id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return{detailProduct:product}
        })
    }

    addToCart =(id)=>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return{products: tempProducts, cart:[...this.state.cart,product]}
        },
        ()=>{
            console.log(this.state);
        })
    }

    increment=(id)=>{
        console.log("this is increment");
    }

    decrement=(id)=>{
        console.log("this is decrement");
    }

    removeItem = (id)=>{
        console.log("this is to remove item");
    }

    clearCart=()=>{
        console.log("cart is cleared");
    }


    render() {
        return (
            <ProductContext.Provider value={{...this.state,
            handelDetails:this.handelDetails,
            addToCart:this.addToCart,
            increment:this.increment,
            decrement:this.decrement,
            removeItem:this.removeItem,
            clearCart:this.clearCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}