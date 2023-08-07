import React from 'react';

class CartItem extends React.Component {
  // through the Constructor, we define the state of the component
  constructor () {
    super();
    this.state = {
      price: 999,
      title: 'Mobile Phone',
      qty: 1,
      img: ''
    }
    // this.testing();
  }
  
  //  testing(){
  //    const promise = new Promise((resolve, reject) => {
  //       setTimeout(()=>{
  //         resolve('done');
  //       }, 5000)
  //    })

  //    promise.then(()=>{
       
  //      // this setState acts like a Synchronous call
  //      this.setState({qty: this.state.qty+10});

  //      this.setState({qty: this.state.qty+10});

  //      this.setState({qty: this.state.qty+10});

  //      console.log('state', this.state)
  //    })
  //   }
     


  increaseQuantity = () =>{
    // this.state.qty += 1;
    // //console.log('this', this);
    // // setState form 1
    // this.setState({
    //   // here, we are incrementing the current quantity by plus one
    //   qty: this.state.qty + 1
    // }, ()=>{});



    // setState form 2 - if prevState required use this 
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1
      }
      // when setState call finished, the below callback is getting called
    }, ()=>{
      console.log('state', this.state);
    });

   
  }

   
  decreaseQuantity = () =>{
     const {qty} = this.state;

     if(qty === 0){
       return;
     }
    // this.state.qty += 1;
    // console.log('this', this);
    // setState form 1
    // this.setState({
    //   qty: this.state.qty + 1
    // });

    // setState form 2 - if prevState required use this 
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1
      }
    });
  }


  render () {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
        {/* // this is the way we do styling inside the JSX */}
          <img style={styles.image} />  
        </div>
        <div className="right-block">
           {/* // this is the way we do styling inside the JSX */}
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img 
              alt="increase" 
              className="action-icons" 
              src="https://as2.ftcdn.net/v2/jpg/01/26/10/59/1000_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg" 
              onClick={this.increaseQuantity}
            />
            <img 
              alt="decrease"
              className="action-icons" 
              src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
              onClick={this.decreaseQuantity}
            />
            <img 
              alt="delete" 
              className="action-icons" 
              src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
             />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;