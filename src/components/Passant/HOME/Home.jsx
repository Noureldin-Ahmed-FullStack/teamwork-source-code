import {React, useState,useEffect} from 'react';
import'./Home.css';
export default function Home() {
        const[x , setX]=useState(0);
        const[y , setY]=useState(0);
        const localMousePosition =(e)=>{
            setX(e.clientX);
            setY(e.clientY);
        };
        useEffect( ()=>{
            //console.log("useEffect called");
            window.addEventListener("mousemove" ,localMousePosition );              //mousemove ta7rek el mouse\\ 
        },[] );               //[] empty array dependency 3lashan el tkrarrr\\
        /*********************************** */
        const[count , setCount]=useState(0);
        const[isRed , setRed]=useState(false);
        const handeleIncrement = ()=> {
          setCount(count + 1);
          setRed(true);
        };
        
    return (
        <>
    
        <div className='axis '>
                <h1>X-{x}</h1>
                <h1>Y-{y}</h1>
        </div>
{        /*********************************** */}    
    <div className='app'>
    <button className='btn1' onClick={handeleIncrement}>Button</button>
    <h1 className='NUMBER'>{count}</h1>
    <h2 className={ isRed ? "Red" : ""}> -------- ID {count} </h2>
    </div>  
    {/****************************************/}  
    <div className='row'>
    <div className='col-md-3'>
    <div className="card" >
      <img src={require("../Images/images (2).jpg")} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Lyly</h5>
        <p className="card-text">
        </p>
        <a href=" " className="btn btn-primary">
          Share
        </a>
      </div>
    </div>
    </div>
    <div className='col-md-3'>
    <div className="card" >
      <img src={require("../Images/fata.jpg")} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Flafy</h5>
        <p className="card-text">
        </p>
        <a href=" " className="btn btn-primary">
          Share
        </a>
      </div>
    </div>
    </div>
    <div className='col-md-3'>
    <div className="card" >
      <img src={require("../Images/images (1).jpg")} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Kity</h5>
        <p className="card-text">
        </p>
        <a href="*" className="btn btn-primary">
          Share
        </a>
      </div>
    </div>
    </div>
    <div className='col-md-3'>
    <div className="card" >
      <img src={require("../Images/cat-internationa.jpg")} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Kito</h5>
        <p className="card-text">
        </p>
        <a href=" " className="btn btn-primary">
          Share
        </a>
      </div>
    </div>
    </div>




  </div>
  );
        </>
    )
}

