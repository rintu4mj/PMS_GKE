import React from 'react';
import { useNavigate } from 'react-router-dom';

function LeftMenu() {

  const navigate = useNavigate();

  return (
    <div class="p-4 rounded-lg bg-transparent grid row-span-6 col-span-1">

        <ul class="">

          <li class="mt-5 mx-auto"><div class="group w-16 h-16 mx-auto rounded-full hover:bg-black border-black flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white h-12 w-12 mx-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div></li>
        </ul>

        <ul class="flex flex-col space-y-6">

          <li class=""><div class="group w-12 h-12 mx-auto rounded-full hover:bg-black border-black flex justify-center items-center" onClick={() => { navigate(`/dashboard`) }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white h-8 w-8 mx-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </div></li>

          <li class=""><div class="group w-12 h-12 mx-auto rounded-full hover:bg-black border-black flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white h-8 w-8 mx-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
          </div></li>

          <li class=""><div class="group w-12 h-12 mx-auto rounded-full hover:bg-black border-black flex justify-center items-center" onClick={() => { navigate(`/addProject`) }}>

            <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white h-8 w-8 mx-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
            </svg>
          </div></li>



          <li class=""><div class="group w-12 h-12 mx-auto rounded-full hover:bg-black border-black flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white h-8 w-8 mx-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div></li>

        </ul>

        <ul class="flex flex-col">

          <li  onClick={() => { navigate(`/`) }}  class="mt-auto"><div class="group w-12 h-12 mx-auto rounded-full hover:bg-black border-black flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white h-8 w-8 mx-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </div></li>

        </ul>



      </div>
  )
}

export default LeftMenu