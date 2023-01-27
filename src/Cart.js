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
    increaseQuantity = (product) => {
        const products = this.state.products;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products
        })

    }
    decreaseQuantity = (product) => {
        const products = this.state.products;
        const index = products.indexOf(product);

        if(products[index].qty == 0) return;
        products[index].qty -= 1;
        this.setState({
            products
        })
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
                        increaseQuantity = {this.increaseQuantity} 
                        decreaseQuantity = {this.decreaseQuantity}                       
                    />
                   );
                })}               
                                
            </div> 
            
        );
    }
}



export default Cart;