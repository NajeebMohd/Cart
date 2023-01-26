import React from "react";

class CartItem extends React.Component{
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
    increasefunc = () => {// as doubt
        // this.state.qty++;
        //console.log(this.state);
        // this.setState({
        //     qty : this.state.qty + 1
        // })
        this.setState((prevState) => {
            return {
                qty : prevState.qty + 1
            }
        },() => {
            //console.log('this up ',this.state)
        })
        
        //console.log(this.state);
    }
    decreasefunc = () => {
        if(this.state.qty == 0) return;
        this.setState((prevState) => {
            return {
                qty : prevState.qty - 1
            }
        });
        
    }
    testing (){
        const promise = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve('done');
            },5000);
        })

        promise.then(() => {
            this.setState({qty:this.state.qty + 1});
            this.setState({qty:this.state.qty + 1});
            this.setState({qty:this.state.qty + 1});
             
            console.log('this state', this.state);
        })
    }
    
    render(){        
        // if i place a this.testing here why the page is rendering again and again
        //let {price, title, qty} = this.state;
        let {price, title, qty} = this.props.product;
        console.log('this.props ',this.props);
        return (
            <div className="cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Price: {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img alt="increase" onClick={this.increasefunc} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png"/>
                        <img alt="decrease" onClick={this.decreasefunc} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/458/458594.png"/>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
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