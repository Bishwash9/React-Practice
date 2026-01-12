import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom'

function Header() {
 let [data, setData] = useState([]);
   let{state, dispatch} = useContext(CartContext)
   useEffect(() => {
     fetch('https://dummyjson.com/products/categories').then(res => res.json()).then(data => setData(data))
   }, [])
  return (
    <>
    <section>
        <div className="container mx-auto">
            <div className='container mx-auto flex justify-between'>
                <img className='w-full h-64' src="https://marketplace.canva.com/EAFw8hKewR4/1/0/1600w/canva-brown-aesthetic-email-header-iBVqHSKhve8.jpg" alt="" />
            </div>
        <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-4">
            <span className="text-xl font-semibold">MySite</span>
            <div className="hidden sm:flex space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>

              {data.slice(0,5).map((a)=>(
                <Link to= {`/category/${a.slug}`} key={a.slug} className="text-gray-600 hover:text-gray-900">{a.name}</Link>
              ))}
              
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            </div>
          </div>
          <div className="flex items-center w-1/3 sm:w-auto">
            {/** cart nav (non-button) to the right of the search */}
            <div className="ml-3">
              <Link aria-label="cart" className="relative" to={"/cart"}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6.4A1 1 0 007.8 21h8.4a1 1 0 00.98-.8L18 13M7 13h10" />
                </svg>
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold text-white bg-red-600 rounded-full">{state.cart.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
        </div>
    </section>
    </>
  )
}

export default Header