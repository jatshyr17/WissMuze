import React from 'react'
import Navbar from './Navbar'

import { useParams } from 'react-router-dom';


function History() {
   
   
   
  return (
    <>
    <Navbar/>
    <div className='text-2xl mt-3 mx-4 px-5 py-4 bg-[#2b1b4a26] rounded-2xl h-[400px] w-[960px]'><b>
        History</b>
    </div>
 
    </>
  )
}

export default History