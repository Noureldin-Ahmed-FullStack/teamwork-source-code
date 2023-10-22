import React, { Component } from 'react'
import './Child.css'

export default class PassantChild extends Component {
render() {
    let{ id, productName ,productPrice ,isSale }=this.props.productData
    return <>
        <div className='col-md-3'>
            <div className='items'>
            <h6>id :  {id}</h6>
            <h6>Name:{productName}</h6>
            <h6 className={productPrice >=10000? ("text-danger"):("text-primary")}>Price:{productPrice}</h6>
            {isSale === true ? (<div className="c1">sale</div>) : ('')}
            <button onClick={() => this.props.deleteFun(this.props.index)} className='btn btn-warning d-block w-100'>Delete</button>
            <button onClick={() => this.props.updateFun(this.props.index)} className='btn btn-primary d-block w-100'>Update</button>

            </div>
        </div>
    
    
    </>
    
}
}

