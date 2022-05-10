import React from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const navigate = useNavigate();
    return (


        // <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        //             <div className="py-8 px-8 rounded-xl">
        //                 <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
        //                 <form action="" className="mt-6">
        //                     <div className="my-5 text-sm">
        //                         <label for="username" className="block text-black">Username</label>
        //                         <input type="text" autofocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
        //                     </div>
        //                     <div className="my-5 text-sm">
        //                         <label for="password" className="block text-black">Password</label>
        //                         <input type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
        //                         <div className="flex justify-end mt-2 text-xs text-gray-600">
        //                            <a href="../../pages/auth/forget_password.html hover:text-black">Forget Password?</a>
        //                         </div>
        //                     </div>

        //                     <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>
        //                 </form>

        //                  <div className="flex md:justify-between justify-center items-center mt-10">
        //                     <div  className="bg-gray-300 md:block hidden w-4/12 h-1"></div>
        //                     <p className="md:mx-2 text-sm font-light text-gray-400"> Login With Social </p> 
        //                     <div className="bg-gray-300 md:block hidden w-4/12 h-1"></div>
        //                 </div>

        //                 <div className="grid md:grid-cols-2 gap-2 mt-7">
        //                     <div>
        //                         <button className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">Facebook</button>
        //                     </div>
        //                     <div>
        //                         <button className="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">Twitter</button>
        //                     </div>
        //                 </div>

        //                 <p className="mt-12 text-xs text-center font-light text-gray-400"> Don't have an account? <a href="../auth/register.html" className="text-black font-medium"> Create One </a>  </p> 

        //             </div>
        //         </div>

        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white h-20 w-20 mx-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p class="mt-2 text-center text-sm text-gray-600">
                        Or

                        <a onClick={() => { navigate(`/signup`) }} href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                            &nbsp; Create an Account
                        </a>
                    </p>
                </div>
                <form class="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input readOnly="true" id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input readOnly="true" id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div class="text-sm">
                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>



                    <div>
                        <button disabled="true" type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" x-description="Heroicon name: solid/lock-closed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                            Sign in(Disabled)
                        </button>
                    </div>

                    <div className="flex md:justify-between justify-center items-center mt-10">
                        <div className="bg-gray-300 md:block hidden w-4/12 h-[1px]"></div>
                        <p className="md:mx-2 text-sm font-light text-gray-400"> Login As Guest </p>
                        <div className="bg-gray-300 md:block hidden w-4/12 h-[1px]"></div>
                    </div>

                    <div>
                        <button onClick={() => { navigate(`/dashboard`) }} type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" x-description="Heroicon name: solid/lock-closed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                            Guest
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage