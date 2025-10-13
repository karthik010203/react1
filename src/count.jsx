import { createContext, useState } from "react"



function Counter(){
const [count,setcount]=useState(0)

function inc(){
    if(count<10){
    setcount(count+1)
}}

function dec(){
    
    setcount(count-1)

}

function valu(){
    setcount(0);
}

return(
    <>
      <h1>{count}</h1>
       <button onClick={inc}>+</button>
       <button onClick={dec}>-</button>
       <button onClick={valu}>button</button>
  </>

)
}



/* function name (){
    const msg = "hello"
    return(
        <div>
            <child data={msg}/>
        </div>
    )
}

function child(props){
    return(
        <p>{props.data}</p>
    )
} */




    const myname=createContext();

    

export default Counter;