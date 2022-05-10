import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { validEmail, validPassword, validName } from '../Regex/Regex';

function SignUp() {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [match, setMatch] = useState("");
    const [submitFormData,setsubmitFormData] = useState(true);
   
    

    const correct = useRef("");
    const checkFirstName = useRef("hidden");
    const errMsg = useRef("");
    const errBorder = useRef("border border-red-500")

    const userRef = useRef("");


    useEffect(() => {

        console.log("Check Empty")
        console.log(firstName != "")

        userRef.current.focus();

        

    }, [])


    useEffect(() => {



    }, [firstName])

    useEffect(() => {


        const result = validPassword.test(currentPassword);



        setMatch(currentPassword === confirmPassword && currentPassword.length > 0)

        console.log("Password::" + match)



    }, [currentPassword, confirmPassword]);


    const submitForm = () => {

        if(validName.test(firstName) && validName.test(lastName) && validEmail.test(email) && match)
        {
            setsubmitFormData(true);
            alert("Ready to submit"+submitFormData.current)
        }
        else
        {

            setsubmitFormData(false);
            alert("There are some Errors"+submitFormData.current)
        }

       


    }



    return (


        <div class="min-h-full flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
            <div class="max-w-xl w-full space-y-8">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white h-20 w-20 mx-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <h2 class="mt-4 text-center text-3xl font-extrabold text-gray-900">
                        Create Account
                    </h2>

                </div>
                <form class="w-full mt-8 space-y-6 bg-white rounded-md  px-12 py-8 shadow-md" action="#" method="POST">

                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block text-sm font-medium text-gray-700" for="grid-first-name">
                                First name
                            </label>
                            <input
                                ref={userRef}
                                onChange={(e) => { setFirstName(e.target.value) }}
                                value={firstName} class={`appearance-none block w-full text-gray-700 border ${(!validName.test(firstName)) ? "border-red-500" : ""}  shadow-sm rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="text" placeholder="" />
                            <p class={`text-red-500 text-xs italic ${(!validName.test(firstName)) ? "" : "hidden"}`}>Enter a valid Name.</p>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block text-sm font-medium text-gray-700" for="grid-last-name">
                                Last Name
                            </label>
                            <input
                                onChange={(e) => { setLastName(e.target.value) }}
                                value={lastName} class={`appearance-none block w-full text-gray-700 border ${(!validName.test(lastName)) ? "border-red-500" : ""}  shadow-sm rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white`} id="grid-last-name" type="text" placeholder="" />
                            <p class={`text-red-500 text-xs italic ${(!validName.test(lastName)) ? "" : "hidden"}`}>Enter a valid Name.</p>
                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block text-sm font-medium text-gray-700" for="grid-password">
                                Email
                            </label>
                            <input onChange={(e) => { setEmail(e.target.value) }}
                                value={email} class={`appearance-none block w-full text-gray-700 border ${(!validEmail.test(email)) ? "border-red-500" : ""}  shadow-sm rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="email" placeholder="" />
                            <p class={`text-red-500 text-xs italic ${(!validEmail.test(email)) ? "" : "hidden"}`}>Enter a valid Email.</p>
                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block text-sm font-medium text-gray-700" for="grid-password">
                                Password
                            </label>
                            <input onChange={(e) => { setCurrentPassword(e.target.value) }}
                                value={currentPassword} class={`appearance-none block w-full text-gray-700 border ${(!validPassword.test(currentPassword)) ? "border-red-500" : ""}  shadow-sm rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="password" placeholder="" />
                            <p class={`text-red-500 text-xs italic ${(!validPassword.test(currentPassword)) ? "" : "hidden"}`}>Enter a valid Password.</p>
                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block text-sm font-medium text-gray-700" for="grid-password">
                                Confirm Password
                            </label>
                            <input onChange={(e) => { setConfirmPassword(e.target.value) }}
                                value={confirmPassword} class={`appearance-none block w-full text-gray-700 border ${(!validPassword.test(confirmPassword)) ? "border-red-500" : ""}  shadow-sm rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="password" placeholder="" />
                            <p class={`text-green-500 text-xs italic ${(match) ? "" : "hidden"}`}>Password Matched.</p>
                            <p class={`text-red-500 text-xs italic ${(confirmPassword.length > 0 && currentPassword.length > 0 && !match) ? "" : "hidden"}`}>Password Not Matched.</p>
                        </div>

                    </div>



                    <div>
                        <button onClick ={submitForm} type="button" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Submit
                        </button>
                        <p class={`py-2 text-red-500  text-xs italic ${((submitFormData) ? "hidden" : "")}`}>There are some Errors.</p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp