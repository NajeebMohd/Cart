import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component{
  constructor (){
    super();
    this.state = {
      products : [],
      loading : true
    }          
  }
  componentDidMount(){
    firebase
      .firestore()
      .collection('products')
      //.get()
      .onSnapshot((snapshot) => {// we are using .onSnapshot instead of .then because if there is changes in the firestore react should automaically listen to onSnapshot again.
        //console.log(snapshot," this is it ");
        // snapshot.docs.map((doc) => {
        //   console.log(doc.data());
        // })

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })
        this.setState({
          products,
          loading : false
        })
      })
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
    const {products, loading} = this.state;
    return (
      <div className="App">
        < Navbar
          quantity = {this.totalitems} 
        />
        <h1>Cart</h1>
        < Cart
          products = {products}
          increaseQuantity = {this.increaseQuantity} 
          decreaseQuantity = {this.decreaseQuantity} 
          deleteItem = {this.deleteItem}          
        />
        <div><h3>Total : {this.totalprice()}</h3></div>
        {(loading && <h1>loading the content</h1>)}
      </div>
    );
  }
}

export default App;
