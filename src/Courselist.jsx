import { useEffect, useState } from 'react';
import Course from './Course';
// import image from './assets/andren.jpg'
// import image1 from './assets/richard.jpg'
// import image2 from './assets/sofia.jpg'

function Courselist (){
//    const [list,setlist]=useState ([
//     {
//         id:1,
//         name:"andren", 
//         price:202,
//          image: image,
//           rating:5
//          },
//          {
//          id:2,   
//         name:"andren1", 
//         price:222,
//          image: image,
//           rating:3 
//          },
//          {
//             id:3,
//         name:"andren2", 
//         price:302,
//          image: image,
//           rating:1
//          },
//          {
//             id:4,
//         name:"richard", 
//         price:200,
//          image: image1,
//           rating:2
//          },
         
//       ]);


    //   const [dummy,setdummy] = useState(true);



//  useEffect codeing -----

//    useEffect(()=>{
//     console.log("use Effect called");
//     console.log(dummy);
    
//    },[list]);



// fetch coding--------

const [list,setlist]=useState(null);

const [error,seterror]=useState(null)

useEffect (()=>{
    // fetch('https://jsonplaceholder.typicode.com/posts')
    fetch('http://localhost:3000/lists')
    .then(res=>{
        if(!res.ok){
            throw new Error("Not data");
        }
        console.log(res);
        return res.json()
    })
    // .then(data=>{console.log(data)})

    .then(data=>setlist(data))

    .catch((error)=>
         seterror(error.message)
     
        )
        
},[]);


useEffect

       function linedelete (id) {
         const newlist = list.filter((sum)=>sum.id !=id)
         setlist(newlist);
       }


       if(!list){
        return(
        <>
        <p>{error}</p>
        </>)
       }

    //    list.sort((x,y)=>y.rating-x.rating)
    //  const listline =  list.filter((sum)=>sum.price>300).map((course)=>
        // const list1= list((sum)=>sum.price>200)
         const listline  = list.map((course)=>
            // ex.. add two line
        (<Course key={course.id} name={course.name}
    image={course.image} 
    price={course.price} Delete={linedelete} id={course.id}/>))

    return (
        <>
        {listline}
        <button onClick={()=>{setdummy(false)}}>dummy button</button>
        </>

    );
  
}


export default Courselist

// npx json-server --watch data/dummyData.json --port 3000 --static ./data

// npx json-server --watch data/dummydata.json --port 3000 --static ./data







