import { useEffect, useState } from "react";
import { data } from "react-router-dom";

function Name(){
    const [data1,setdate1] = useState([])


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setdate1(data))
      
    },[])
      

    return(
        <>
           <div >{ data1.map((user)=>
          
            <p>{user.name}</p>
             )}</div>
           
         
        </>
    );
}

export default Name;