"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

export default function RemoveProduct({id}) {
    const router=useRouter()
    const removeProduct=async()=>{
    
        const isConfirmed=confirm("are you sure")
        if(isConfirmed){
          try{
            const res=await fetch(`http://localhost:3000/api/products?id=${id}`,{
              method:"DELETE"
            });
            if(res.ok){
              router.refresh()
            }
          }catch(err){
            console.log(err)
          }
        }
    
      }
  return (
    <button className='bg-red-500 text-white py-2 px-3 rounded-md' onClick={removeProduct}>Delete</button>
  )
}
