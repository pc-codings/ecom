import React, { useEffect, useState } from 'react'
import { Route, Routes, UNSAFE_decodeViaTurboStream } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Root } from 'postcss'
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'
import Login from './components/Login'
import Userdata from './pages/userData'
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 export const backendurl=import.meta.env.VITE_BACKEND_URL;
 export const currency='$'

const App = () => {

   const [token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

    
      useEffect(()=>{
          
            localStorage.setItem('token',token);
             
      },[token])


  return (
    <div className='bg-gray-50 min-h-screen'>

       <ToastContainer/>
     
       {
           token===""
           ?<Login setToken={setToken}/>
           : <>
        <Navbar setToken={setToken}/>
        <hr />
        <div className='flex w-full'>
             <Sidebar/>

             <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>

                <Routes>
                   <Route path='/add' element={<Add token={token}/>}/>
                   <Route path='/list' element={<List token={token}  />}/>
                   <Route path='/orders' element={<Order token={token}/>}/>
                   <Route path='/userData' element={<Userdata token={token}/>}/>

                </Routes>
             </div>
        </div>
        </>
       }
       
      
    </div>
  )
}

export default App