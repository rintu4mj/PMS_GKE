/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Stepper from '../Project/Stepper';
import ProjectServices from '../../services/ProjectServices';

export default function ProjectModal({ handleModal, current }) {


    const stages = ["Analysis", "Assessment", "Development", "Testing", "Build", "Production"];
    const [open, setOpen] = useState(false);
    const [project, setProject] = useState({
        id: "",
        projectId: "",
        projectName: "",
        startDate: "",
        endDate: "",
        stage: "",
        comment: "",
        updatedBy: "",
        updatedOn: "",

     });

     const saveProjectHistory = () => {

       
      
        ProjectServices.saveProjectHistory(project)
           .then((response) => {
              console.log(project);
              
           })
           .catch((error) => {
              console.log(error);
           });
     };

     const handleChange = (e) => {
        const value = e.target.value;
        setProject({ ...project, [e.target.name]: value });
  
     };

    useEffect(() => {



        if (current === null)
            setOpen(false)
        else {

            console.log(current)
            setOpen(true)
            setProject({ ...project, projectId : current.projectId , projectName : current.projectName , stage : stages[current.stageId]});

           

        }


    }, [current]);

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">

                                    <div className="mt-3 text-center sm:mt-0  sm:text-left">

                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Update Project{open ? " - " + current.projectName : " - closing"}
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <form class="w-full mt-4 space-y-2 bg-white rounded-md  px-8 py-4 " action="#" method="POST">

                                                <div class="flex flex-wrap -mx-3 mb-6">
                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label class="block text-sm font-medium text-gray-700" for="grid-last-name">
                                                            Current Stage
                                                        </label>
                                                        <input readOnly='true' value={(stages.indexOf(project.stage) == 6) ? stages[stages.indexOf(stages.length-1)]:stages[stages.indexOf(project.stage)-1]} class={`bg-gray-200  appearance-none block w-full text-gray-700 border  shadow-sm rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none `} id="grid-last-name" type="text" placeholder="" />
                                                       
                                                    </div>
                                                    


                                                    <div class="w-full md:w-1/2 px-3">
                                                        <label class="block text-sm font-medium text-gray-700" for="grid-last-name">
                                                            Next Stage
                                                        </label>
                                                        <input readOnly='true' value={project.stage} class={`bg-gray-200 appearance-none block w-full text-gray-700 border  shadow-sm rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none `} id="grid-last-name" type="text" placeholder="" />

                                                    </div>

                                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                        <label class="block text-sm font-medium text-gray-700" for="grid-last-name">
                                                            Start Date
                                                        </label>
                                                        <input name="startDate" onChange={(e) => handleChange(e)} class={`bg-gray-200 appearance-none block w-full text-gray-700 border  shadow-sm rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none `} id="grid-last-name" type="date" placeholder="" />

                                                    </div>
                                                    <div class="w-full md:w-1/2 px-3">
                                                        <label class="block text-sm font-medium text-gray-700" for="grid-last-name">
                                                            End Date
                                                        </label>
                                                        <input name="endDate" onChange={(e) => handleChange(e)} class={`bg-gray-200 appearance-none block w-full text-gray-700 border  shadow-sm rounded-lg py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none `} id="grid-last-name" type="date" placeholder="" />

                                                    </div>
                                                </div>

                                                <div className='py-5'><Stepper current ={stages.indexOf(project.stage)} /></div>

                                                








                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">

                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => { setOpen(false); handleModal(null) }}
                                    ref={cancelButtonRef}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => { saveProjectHistory(); setOpen(false); handleModal(null) }}
                                    ref={cancelButtonRef}
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
