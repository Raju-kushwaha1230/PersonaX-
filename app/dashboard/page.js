"use client"

import React,{useEffect} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import Dashboards from '@/components/Dashboards';

const Dashboard = () => {
  const { data: session  } = useSession()
  

 
 
  return (

    <div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold my-3 text-slate-700'>Welcome <span className=' text-blue-600'></span></h2>
        <h3 className='text-xl text-blue-600 font-mono py-4'>Fill the given Details </h3>
      </div>
      <Dashboards/>
      <div>
    <h2>Note</h2>
    <p> plz add the link of your image which should be live </p> 
    <p> You can select image address from internet </p>
    </div>
    </div>
  )
}

export default Dashboard
 
