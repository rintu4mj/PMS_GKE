import React, { useEffect, useState } from 'react'
import ProjectServices from '../../services/ProjectServices';

function Notification({ open }) {

    const [loading, setLoading] = useState(true);
    const [projectHistory, setProjectHistory] = useState(null);
    const stages = ["Analysis", "Assessment", "Development", "Testing", "Build", "Production"];



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {



                const response = await ProjectServices.getProjectHistory();

                setProjectHistory(response.data);




            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [open]);


    return (
        <><div className="">

            <header className="text-black font-sans text-lg text-left">Project Notifications</header>

        </div>


            {!loading && (
                <div class="row-span-6 overflow-y-scroll h-[550px] relative w-full mx-auto bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5">



                    {
                        projectHistory.map((project) => (

                            <div class="flex items-center gap-4 p-4 justify-around">
                                <p className="text-slate-900 text-md font-extrabold dark:text-slate-200">{project.projectName}</p>
                                <div class="">

                                    <table className=" text-slate-900 text-sm font-medium dark:text-slate-200">
                                        <tr><td>{stages[stages.indexOf(project.stage) - 1] }</td>
                                            <td><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg></td>
                                            <td>{project.stage}</td>
                                        </tr>
                                        <tr><td>{project.startDate.substring(0,10)}</td><td></td><td>{project.endDate.substring(0,10)}</td></tr>
                                    </table>

                                </div>
                            </div>

                        ))
                    }










                </div>

            )}</>
    )
}

export default Notification