import React, { Component } from 'react'
import Child from '../Child/PassantChild'
import './Parent.css'
import Home from '../HOME/Home'

export default class PassantParent extends Component {

state={
product:[
{id:1 , productName:"A" , productPrice:1000 , isSale:true},
{id:2 , productName:"B" , productPrice:2000 , isSale:false},
{id:3 , productName:"C" , productPrice:3000 , isSale:true},
{id:4 , productName:"D" , productPrice:40000 , isSale:false},
{id:5 , productName:"E" , productPrice:5000 , isSale:true},
{id:6 , productName:"F" , productPrice:60000 , isSale:false},
{id:7 , productName:"G" , productPrice:7000 , isSale:false},
{id:8 , productName:"H" , productPrice:80000 , isSale:true},

]
}
//FUNCTION\\
// deleteProduct(productid){
// console.log("delete" + productid)
// }

deleteData = (i) => {

    // deep Copy
    let product = [...this.state.product]
    // action
    product.splice(i, 1)
    //  setSate

    this.setState({ product })

}


updateProduct=(i) =>{
    //deep
    let product = [...this.state.product]
    //action
    product[i].productPrice++
    //setSate
    this.setState({ product })
    console.log(i);

}
//RENDER\\
render() {
    return <>
    <div className='container bg-light py-3 item'>
        <div className='row'>
            {this.state.product.map((element , i)=>{
            return  <Child x={this.deleteProduct} 
            key={i}
                updateFun={this.updateProduct}
                deleteFun={this.deleteData}
                index={i}
                productData={element}/>
            })}
        </div>
    <Home />
    </div>
        
    </>
}
}
