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
    this.db = firebase.firestore();     
  }
  componentDidMount(){
    this.db
      .collection('products')
      //.get()
      // .where('price','>',50)
      // .where('title','==','Mobile')
      .orderBy('price','desc')
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

    // products[index].qty += 1;

    // this.setState({
    //     products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty : products[index].qty + 1
      })
      .then(() => {
        console.log('updated successfully');
      })
      .catch((err) => {
        console.log('the error is -> ',err);
      })

  }
  decreaseQuantity = (product) => {
    const products = this.state.products;
    const index = products.indexOf(product);

    if(products[index].qty == 0) return;
    // products[index].qty -= 1;
    // this.setState({
    //     products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty : products[index].qty - 1
      })
      .then(() => {
        console.log('updated successfully');
      })
      .catch((err) => {
        console.log('the error is -> ',err);
      })
  }
  deleteItem = (product) => {
    const products = this.state.products;
    const index = products.indexOf(product);

    // delete products[index];
    // this.setState({
    //     products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .delete()
      .then(() => {
        console.log('deleted successfully');
      })
      .catch((err) => {
        console.log('the error is -> ',err);
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
  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img : '',
        price : 53,
        qty : 3,
        title : 'washing machine'        
      })
      .then((docRef) => {
        console.log(docRef);
      })
      .catch((error) => {
        console.log(error," the error");
      })
  }

  render(){
    const {products, loading} = this.state;
    return (
      <div className="App">
        < Navbar
          quantity = {this.totalitems} 
        />
        <button onClick={this.addProduct} style = {{padding : 20, fontSize : 20}}>Add a product</button>
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
