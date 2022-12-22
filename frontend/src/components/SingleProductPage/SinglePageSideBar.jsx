import React from 'react'

import {Link} from "react-router-dom"
import { ProductsLinks } from './ProductsLink'
  

const SinglePageSideBar = () => {

  return (
    
    <div className='sticky top-10 sm:w-1/4 hidden sm:block border-solid border-r-2 border-gray-400 h-screen '>
            <div>
              <h3 className='font-bold text-blue-700'>Links to different Products page.</h3>
              <ul className='mt-12'>
                {ProductsLinks.map((el)=>(
               <Link to={el.link}><li key={el.id} className='my-4 text-md hover:text-sky-500 hover:scale-105 duration-200 pl-10 border-solid border-b-2 border-gray-400 cursor-pointer'>{el.title}</li></Link>   
                ))}
              </ul>
            </div>


          </div>
  )
}

export default SinglePageSideBar