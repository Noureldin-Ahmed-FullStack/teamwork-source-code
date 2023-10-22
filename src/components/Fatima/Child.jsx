
import React, { Component } from 'react'

export default class Child extends Component {

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }


  render() {

    let { id, productName, productPrice, isSale } = this.props.productInfo
    return <>

      <div className='col-md-3'>
        <div className='bg-secondary p-3 position-relative'>
          <h6>Name: {productName}</h6>
          <h6 className={productPrice > 5000 ? 'text-danger' : "text-info"}>price:{productPrice}</h6>

          <p>id:{id}</p>
          {isSale ? <div className='position-absolute top-0 end-0 bg-danger text-white p-2'>Sale</div> : ""}

          <button onClick={() => this.props.deleteFun(this.props.index)} className='btn btn-danger d-block w-100'>Delete</button>
          <button onClick={() => this.props.updateFun(this.props.index)} className='btn btn-success d-block w-100'>Inc</button>
         
        </div>
      </div>
    </>
  }
}






  




