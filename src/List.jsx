//   export  const List = ()=>{
//     return (
//         <h1>hello</h1>
//     );
// }
// export function Sample(){
//   return(
//     <h2>sample</h2>
//   )
// }

import { useEffect } from "react";


useEffect(() => {
  async function fetchData() {
    try {
      const res = await fetch('http://localhost:3000/list');
      if (!res.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("Error:", err.message);
    }
  }

  fetchData();
}, []);




// useEffect(()=>{
//     async function name(params) {
//         try{
//             const res= await fetch()

//         }
//         const data = await res.json();
//     }
// })