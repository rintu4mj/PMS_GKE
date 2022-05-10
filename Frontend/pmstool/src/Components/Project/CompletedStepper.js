import React from 'react'

function CompletedStepper({stage}) {
    return (

        
            <div class="w-1/3 bg-indigo-700 h-1 flex items-center group">


                <span class="tooltip-text bg-indigo-700 -mt-16 -ml-6 rounded hidden group-hover:block absolute text-center py-1 px-1 z-50">{stage}</span>

                <div class="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 stroke-2 fill-black invert" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>

                </div>


            </div>
           
        

    )
}

export default CompletedStepper