import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component{
  constructor (){
    super();
    this.state = {
      products : [
        {
          title : 'Mobile Phone',
          price : 999,
          qty : 0,
          img : 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
          key : 1
        },
        {
          title : 'Watch',
          price : 99,
          qty : 0,
          img : 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80',
          key : 2
        },
        {
          title : 'Headphone',
          price : 9,
          qty : 0,
          img : 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80',
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
  deleteItem = (product) => {
    const products = this.state.products;
    const index = products.indexOf(product);

    delete products[index];
    this.setState({
        products
    })
    // another way is that we are taking id in the arguments and with that id we will remove the product
    // but try this out its not working
    // const id = products[index].key;
    // console.log(products[index]," ",id);
    // const items = products.filter((item) => item.id !== id);
    // this.setState({
    //     products : items
    // })
  }
  totalitems = () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }
  totalprice = () => {
    const {products} = this.state;
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.qty;
    });
    return total;
  }

  render(){
    return (
      <div className="App">
        < Navbar
          quantity = {this.totalitems} 
        />
        <h1>Cart</h1>
        < Cart
          products = {this.state.products}
          increaseQuantity = {this.increaseQuantity} 
          decreaseQuantity = {this.decreaseQuantity} 
          deleteItem = {this.deleteItem}          
        />
        <div><h3>Total : {this.totalprice()}</h3></div>
      </div>
    );
  }
}

export default App;
