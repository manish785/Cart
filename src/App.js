import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";


class App extends React.Component {
  
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://media.istockphoto.com/id/496730484/photo/apple-watch-sport-42mm-silver-aluminum-case-with-white-band.jpg?s=612x612&w=0&k=20&c=RY2MGp4S-OVqAZm1ZCUDhM6KSmfAJ02RU51l4mJa2EA=',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8fDA%3D&w=1000&q=80',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  handleIncreaseQuantity = (product)=>{
    console.log('Heyy please increase the quantity of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products
    })
  }

  handleDecreaseQuantity = (product)=>{
    console.log('Heyy please increase the quantity of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0) {
      return ;
    }

    products[index].qty -= 1;

    this.setState({
      products: products
    })
  }
  
  handleDeleteProduct = (id) => {
      const {products} = this.state;

      const items = products.filter((item => item.id !== id)); // [{}]

      this.setState({
        products: items
      })
  }

  getCartComponent = () =>{
     const {products} = this.state;

     let count = 0;
     
     products.forEach((product)=>{
       count += product.qty;
     })

     return count;
  }

  getCartTotal = () =>{
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product)=>{
      if(product.qty > 0){
         cartTotal += product.qty * product.price;
      }
      return '';
    })

    return cartTotal;
  }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartComponent()}/>
        <Cart  
            products={products}
            onIncreasQuantity = {this.handleIncreaseQuantity}
            onDecreasQuantity = {this.handleDecreaseQuantity}
            onDeleteProduct  = {this.handleDeleteProduct}
        />
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()}</div>
      </div>
  );
  }
}

export default App;
