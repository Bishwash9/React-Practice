import React from 'react'

function Footer() {
  return (
   <>
   <div className='container mx-auto bg-amber-200 text-white m-4 p-4 w-full flex flex-col items-center justify-center text-center'>
    <p className='text-sm'>&copy; 2023 Company Name. All rights reserved.</p>
    <ul className='flex flex-col gap-2 sm:gap-4 mt-2 items-center'>
      <li><a href="#" className='hover:underline'>Privacy Policy</a></li>
      <li><a href="#" className='hover:underline'>Contact</a></li>
    </ul>
  </div>

   </>
  )
}

export default Footer