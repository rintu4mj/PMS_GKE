import React from 'react'

function PenultimateStepperCurrent({stage}) {
    return (
        <div class="w-1/3 flex justify-between group">
            <span class="tooltip-text bg-indigo-700 -mt-9 -ml-6 rounded hidden group-hover:block absolute text-center py-1 px-1 z-50">{stage}</span>

            <div class="border-indigo-700 border-[1px] bg-white dark:bg-gray-700 h-6 w-6 rounded-full shadow flex justify-center items-center">
            <span class="relative translate(48%, 46%) rounded-full inline-block h-3 w-3 bg-indigo-700"></span>
            </div>
        </div>
    )
}

export default PenultimateStepperCurrent