import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor (){
        super();
        this.state = {
            products : [
                {
                    title : 'Mobile Phone',
                    price : 999,
                    qty : 0,
                    img : '',
                    key : 1
                },
                {
                    title : 'Watch',
                    price : 99,
                    qty : 0,
                    img : '',
                    key : 2
                },
                {
                    title : 'Headphone',
                    price : 9,
                    qty : 0,
                    img : '',
                    key : 3
                }
            ]

        }          
    }
    render(){
        const products = this.state.products;
        return (
            <div className="cart">
                {products.map((product) => {
                   return (
                    < CartItem 
                        product = {product}
                        key = {product.key}
                        func = {console.log('bla')}// why this is running while page is rendered
                        jsx = {<h1>Sold Out!</h1>}
                        
                    />
                   );
                })}               
                                
            </div> 
            
        );
    }
}



export default Cart;