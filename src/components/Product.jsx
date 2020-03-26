import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Product extends React.Component {
  render() {
    const { id, title, img, info, price, inCart } = this.props.product;
    return (
      <div>
        <ProductConsumer>
          {(value)=>(
            <div className="product-container">
          
            <div
              className="image-container"
              onClick={() => {
                value.handelDetails(id)
              }}
            >
              <figure className="image is-800x480">
                <Link to="/details">
                  <img src={img} />
                </Link>
              </figure>
            </div>
            
            <div className="product-details-style">
              <div className="product-details-container">
                  
                  <div>{title}</div>
                  <div>$ {price}/-</div>
                  <div>
                  <button className="button is-black" disabled={
                      inCart ? true : false
                  } onClick={()=>{value.addToCart(id)}}  
                  >Add to Cart+</button>
                  </div>
                  {inCart ? (<div>In Cart</div>) : ""}
              </div>
            </div>
            
          </div>
          )}
        
        </ProductConsumer>
      </div>
    );
  }
}

export default Product;
