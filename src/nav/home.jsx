import { current } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Home = () => {

     const  [frominput,setfrominput] = useState({
        name:"",
        age:"",
        email:"",
        city:"",
        data:"",
     });

     const head=(event)=>{
        const {name,value} =event.target;
     

     setfrominput((current)=>{
        return{
             ...current,
             [name]:value
        }
    } )
    }

console.log(frominput)
  return (
    <div className='ml-[90px]'>
        <Link to ="/About" className='text-3xl text-blue-800'>About.........</Link>
       <h1>Home Us</h1>
       <form className='p-4'>
      <label>Name</label>
      <br/>
      <input type="text" className='text-3xl border-2 rounded-lg pl-3 text-blue-800' 
      name='name'
      value={frominput.name} 
      onChange={head}
      />
      <br/>
        <label>age</label>
      <br/>
      <input type="number" name='age' className=' text-3xl border-2 rounded-lg pl-3 text-blue-800'
      value={frominput.age}
        onChange={head}
      />
      <br/>
        <label>Email</label>
      <br/>
      <input type="text" name='email'  className=' text-3xl border-2 rounded-lg pl-3 text-blue-800'
       value={frominput.email}   onChange={head}/>
      <br/>
        <label>City</label>
      <br/>
      <input type="text" name='city' className='border-2 rounded-lg pl-3 text-3xl text-blue-800' 
      value={frominput.city} onChange={head}/>
      <br/> <label>Date</label>
      <br/>
      <input type="date" name='data' className='border-2 rounded-lg pl-3 text-3xl text-blue-800'
        
       value={frominput.data}   onChange={head}/>
      <br/>


       </form>
    </div>
  );
}

export default Home;
