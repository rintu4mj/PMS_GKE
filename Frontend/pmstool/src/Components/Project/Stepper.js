import React, { useEffect, useState } from "react";
import { BsFlag } from "react-icons/bs";
import { HiCubeTransparent } from 'react-icons/hi';
import CompletedStepper from "./CompletedStepper";
import CompletedStepperEnd from "./CompletedStepperEnd";
import EndStepper from "./EndStepper";
import EndStepperEmpty from "./EndStepperEmpty";
import OngoingStepper from "./OngoingStepper";
import PenultimateStepper from "./PenultimateStepper";
import PenultimateStepperCurrent from "./PenultimateStepperCurrent";

function Stepper({ current }) {

    const stages = ["Analysis", "Assessment", "Development", "Testing", "Build", "Production"];

    
    return (
        <div class="bg-gray-200 dark:bg-gray-700 h-1 flex items-center justify-between">


            {stages.map((e, i) => {


                if (current > i) {

                    

                    if (i == 5) {

                      
                        return <CompletedStepperEnd  stage={stages[i]} />
                    }

                    else {
                        
                        return <CompletedStepper  stage={stages[i]} />

                    }



                }
                else {



                    if (current == 5)
                        return <EndStepper  stage={stages[i]} />
                    else if (current == 6)
                        return <CompletedStepperEnd stage={stages[i]}/>
                    else {
                        if (i == 5)
                            return <EndStepperEmpty  stage={stages[i]} />
                        else {

                            if (current == i)
                                return <PenultimateStepperCurrent  stage={stages[i]}/>
                            else
                                return <PenultimateStepper  stage={stages[i]} />


                        }

                    }

                }


            })
            }







        </div>
    )
}

export default Stepper