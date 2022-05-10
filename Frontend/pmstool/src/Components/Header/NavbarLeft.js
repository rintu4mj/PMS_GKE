import React from 'react'

function NavbarLeft() {
  return (
    <div class="p-4 rounded-lg bg-transparent  grid row-span-1 col-start-2 col-span-8 ">


        <div className='mt-2 flex gap-4 font-mono leading-6'>

          <div className='p-4 flex-2 rounded-lg flex items-center justify-center'><span className='text-black text-2xl font-extrabold '>Project Management System</span></div>

          <div className='p-4 flex-1 rounded-lg flex items-center justify-center'><label class="relative text-gray-400 focus-within:text-gray-600 block w-full">

            <input type="text" name="search" id="search" placeholder="Search" class="form-input rounded-lg py-3 px-4 bg-white placeholder-gray-600 text-gray-600 appearance-none w-full focus:outline-none" />

            <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>

          </label>

          </div>


        </div>


    </div>
  )
}

export default NavbarLeft