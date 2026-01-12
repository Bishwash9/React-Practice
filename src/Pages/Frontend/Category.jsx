import React, { useContext, useEffect, useState } from 'react'
import FrontendLayout from '../../layout/FrontendLayout'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../CartContext';

function Category() {
  let {cid} = useParams()
  let [data, setData] = useState([]);
   let{state, dispatch} = useContext(CartContext)
   useEffect(() => {
     fetch(`https://dummyjson.com/products/category/${cid}`).then(res => res.json()).then(data => setData(data.products))
   }, [cid])
  return (
     <FrontendLayout>
    <section>
       <div className="container mx-auto px-4 py-6">
          <h2 className="text-2xl font-semibold">Categories {cid}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {data.map((a) => (
              <div key={a.id} className="bg-white border rounded-lg shadow-sm p-4">
                <img className='w-full h-40 object-cover rounded mb-3' src={a.thumbnail} alt={a.title} />
                <p className='font-medium p-2 mb-2'>{a.title}</p>
                <p className='text-sm text-gray-500'>{a.description}</p>
                <div className='mt-3 flex items-center justify-between'>
                  <span className='font-bold'>${a.price}</span>
                  <button onClick={()=> dispatch({type: 'addtocart', payload: a})} className='px-3 py-1 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400'>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
          </div>
    </section>
   </FrontendLayout>
  )
}

export default Category