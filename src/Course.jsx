import { useState } from "react";

const course1 = "html"


function Course(props ){
    // if(props.show == true)
    {

        const [purchased,setpurchased] = useState(false);
        function name  (dis) {
    console.log(props.name,"purchased with",dis,"%dis");
  setpurchased(true);
}

   
    return ( 
         props.name && <div className="card">
             <img src={props.image} alt=""/>
             <h3>{props.name}</h3>
             <p>{props.price}</p>
             <span>{props.rating}</span>
             <button onClick={()=>name(20)}>Buy now</button>
             <p>{purchased ? "already" : "get it now"}</p>
             <button onClick={()=>props.Delete(props.id)}>Delete</button>
        </div>
    );
}
// else{
//     return(
//          <div className="card">course not available</div>      
//     );
}







export default Course