import React from 'react'

function NavbarRight() {
  return (
    <div class="p-4 rounded-lg grid  row-span-1 col-start-10 col-span-3">


    <div className='flex gap-4'>

      <div className='grid grid-cols-3 gap-2 flex-2 gap-4 '>

        <div className='p-1 gap-2 group w-8 h-8 mx-auto rounded-full hover:bg-black border-black flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black group-hover:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
          <span class="absolute inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">10</span>
        </div>

        <div className='p-1 gap-2 group w-8 h-8 mx-auto rounded-full hover:bg-black border-black flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black group-hover:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg><span class="absolute inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">45</span>
        </div>

        <div className='p-1 gap-2 group w-8 h-8 mx-auto rounded-full hover:bg-black border-black flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black group-hover:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg></div>

        <div className='p-1 gap-2 group w-8 h-8 mx-auto rounded-full hover:bg-black border-black flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black group-hover:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg></div>

        <div className='p-1 gap-2 group w-8 h-8 mx-auto rounded-full hover:bg-black border-black flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black group-hover:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg></div>

      </div>

      <div className='flex flex-1 gap-4 items-center justify-center'>

        <div><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg></div>

        <div><span className='text-black text-md font-extrabold '>Rintu Mazumder</span>
        </div>

      </div>

    </div>


  </div>
  )
}

export default NavbarRight