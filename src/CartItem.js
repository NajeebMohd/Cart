import React from "react";

const CartItem = (props) => {
    // constructor (){
    //     super();
    //     this.state = {
    //         title : 'Mobile Phone',
    //         price : 999,
    //         qty : 0,
    //         img : ''

    //     }        
    //     //this.testing();
    // }


    // increasefunc = () => {// as doubt
    //     // this.state.qty++;
    //     //console.log(this.state);
    //     // this.setState({
    //     //     qty : this.state.qty + 1
    //     // })
    //     this.setState((prevState) => {
    //         return {
    //             qty : prevState.qty + 1
    //         }
    //     },() => {
    //         //console.log('this up ',this.state)
    //     })
        
    //     //console.log(this.state);
    // }

    // decreasefunc = () => {
    //     if(this.state.qty == 0) return;
    //     this.setState((prevState) => {
    //         return {
    //             qty : prevState.qty - 1
    //         }
    //     });        
    // }

    // testing (){
    //     const promise = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         },5000);
    //     })

    //     promise.then(() => {
    //         this.setState({qty:this.state.qty + 1});
    //         this.setState({qty:this.state.qty + 1});
    //         this.setState({qty:this.state.qty + 1});
             
    //         console.log('this state', this.state);
    //     })
    // }
    
            
    // if i place a this.testing here why the page is rendering again and again
    //let {price, title, qty} = this.state;
    let {price, title, qty,img} = props.product;
    const {product,increaseQuantity,decreaseQuantity,deleteItem} = props;
    
    console.log('this.props ',props);
    return (
        <div className="cart-item">           
            
            <div className="left-block">
                <img style={styles.image} src = {img}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Price: {price}</div>
                <div style={{color:'#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">                        
                    <img 
                        alt="increase" 
                        onClick={() => increaseQuantity(product)} 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png"
                    />
                    <img 
                        alt="decrease" 
                        onClick={() => decreaseQuantity(product)} 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                    />
                    <img 
                        alt="delete" 
                        onClick={() => deleteItem(product)}
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/458/458594.png"
                    />
                </div>               
                
            </div>
            
        </div>
    );
    
}

const styles = {
    image : {
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'#ccc'
    }
}

export default CartItem;