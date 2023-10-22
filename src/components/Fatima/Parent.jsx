import React, { Component } from 'react'
import Child from './Child';
export default class Parent extends Component {

  x;
  constructor() {
    super()

    console.log("constructor");
  }

  componentDidMount() {

    this.x = setInterval(() => {
      console.log("hello");
    }, 1000);
    console.log("componentDidMount");
  }


  componentDidUpdate() {
    console.log("componentDidUpdate");
  }


  componentWillUnmount() {
    clearInterval(this.x)
    console.log("componentWillUnmount");
  }

  state = {
    products: [
      { id: 1, productName: "iphone", productPrice: 7000, isSale: true },
      { id: 10, productName: "Nokia", productPrice: 2000, isSale: false },
      { id: 554, productName: "Samsung", productPrice: 3000, isSale: true },
      { id: 3, productName: "Oppo", productPrice: 4000, isSale: false },
      { id: 2, productName: "Lg", productPrice: 8000, isSale: false },
      { id: 4, productName: "Hp", productPrice: 6000, isSale: true },
      { id: 9, productName: "iphone10", productPrice: 1000, isSale: false },
      { id: 11, productName: "Nokia", productPrice: 3000, isSale: true },
      { id: 30, productName: "dell", productPrice: 5000, isSale: false },
    ],
  }


  deleteData = (i) => {

    // deep Copy
    let products = [...this.state.products]
    // action
    products.splice(i, 1)
    //  setSate
    this.setState({ products })

  }
 

  updateProduct=(i) =>{
    //deep
    let products = [...this.state.products]
    //action
    products[i].productPrice++
    //setSate
    this.setState({ products })
    console.log(i);

  }
  render() {

    console.log("render");
    return (
      <div>
        <h2>the items</h2>

        <div className='container py-5 bg-white'>
          <div className='row g-3'>
            {this.state.products.map((element, i) => {
              return <Child
                key={i}
                updateFun={this.updateProduct}
                deleteFun={this.deleteData}
                index={i}
                productInfo={element} />
            })}
          </div>
        </div>
      </div>
    )
  }
}


