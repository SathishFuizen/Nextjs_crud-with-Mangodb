
import React from 'react'
import Link from "next/link"
import RemoveProduct from './RemoveProduct';



const getProducts=async()=>{
  try{
    const res=await fetch("http://localhost:3000/api/products",{
      cache:"no-store"
    });
    if(!res.ok){
      throw new Error("product not getting..")
    }
    return res.json();
  }catch(err){
    console.log(err)
  }

}

export const ProductList = async () => {
  const {products} = await getProducts()


 
  return (
    <div>
         <h2 className='text-2xl font-semibold py-10'>Nextjs crud(create,read,update and delte)</h2>
        <div className='text-right'>
            <Link className='bg-blue-600 text-white rounded-lg px-3 py-2' href={"/addProduct"}> Add product</Link>

          
        </div>
        <div class="relative overflow-x-auto py-5">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Age
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {products.map((item)=>(
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item._id}>
                  <td class="px-6 py-4">
                      {item.name}
                  </td>
                  <td class="px-6 py-4">
                      {item.age}
                  </td>
                  <td class="px-6 py-4">
                      {item.category}
                  </td>
                  <td>
                    <div className='flex '>
                       <button className='bg-green-500 text-white py-2 px-3 rounded-md mr-5'>Edit</button>
                       <RemoveProduct id={item._id}/>
                       
                        {/* <RemoveProduct id={item._id}/> */}
                    </div>
                  </td>
              </tr>

            ))}
          
          
        
        </tbody>
    </table>
</div>
    </div>
  )
}
