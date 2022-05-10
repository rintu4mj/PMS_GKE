import React, { useState } from 'react';
import { HiOutlineLogout } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import ProjectServices from '../../services/ProjectServices';
import LeftMenu from '../LeftMenu/LeftMenu';
import NavbarLeft from '../Header/NavbarLeft';
import NavbarRight from '../Header/NavbarRight';



function ProjectForm() {

   console.log("Add")

   const [msg, setMsg] = useState(false);
   const navigate = useNavigate();

   const [project, setProject] = useState({
      projectId: "",
      projectName: "",
      projectTitle: "",
      projectDescription: "",
      sector: "",
      account: "",
      stageId: "",
   });

   const handleChange = (e) => {
      const value = e.target.value;
      setProject({ ...project, [e.target.name]: value });

   };

   const saveProjects = (e) => {

      console.log(project)
      e.preventDefault();
      ProjectServices.saveProject(project)
         .then((response) => {
            console.log(response);
            navigate("/dashboard");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const reset = (e) => {
      e.preventDefault();
      setProject({
         projectId: "",
         projectName: "",
         projectTitle: "",
         projectDescription: "",
         sector: "",
         account: "",
         stageId: "",
      });
   };

   const saveProject = () => {

      console.log("Saved")
      console.log(msg)

      setMsg(true);
      console.log(msg)
   }

   return (

      <div class="min-h-screen p-4 grid grid-rows-6 grid-cols-12 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">

         {/* -----------------Left Menu----------------- */}
         <LeftMenu />

         {/* ................Navbar Left................ */}
         <NavbarLeft />

         {/* ................Navbar Right............... */}
         <NavbarRight />

         {/* -------------------Center-------------------*/}
         <div class="p-4 rounded-lg shadow-lg bg-white grid col-span-8 row-span-5">

            <div>



               <div className='grid grid-cols-8 p-4'>

                  <label className='text-black col-span-1 space-x-2 my-auto p-2 break-words text-left w-48'>Project Id : </label>
                  <input name="projectId"
                     value={project.projectId}
                     onChange={(e) => handleChange(e)} type="text" id="projectId" placeholder="Auto Generated" class="bg-gray-100 col-span-2 space-x-2 border-solid border border-slate-200 form-input rounded-lg py-3 px-4 bg-white placeholder-gray-600 text-gray-600 appearance-none w-full focus:outline-none" />

               </div>

               <div className='grid grid-cols-8 p-4'>

                  <label className='text-black col-span-1 space-x-2 my-auto p-2 break-words text-left w-48'>Sector : </label>
                  <select name="sector"
                     value={project.sector}
                     onChange={(e) => handleChange(e)} class="col-span-2 space-x-2 border-solid border border-slate-200 form-input rounded-lg py-3 px-4 bg-white placeholder-gray-600 text-gray-600 appearance-none w-full focus:outline-none" >

                     <option selected>Select Sector</option>
                     <option value="1">Healthcare</option>
                     <option value="2">Manufacturing</option>
                     <option value="3">Transportation</option>
                     <option value="3">Space</option>

                  </select>

               </div>

               <div className='grid grid-cols-8 p-4'>

                  <label className='text-black col-span-1 space-x-2 my-auto p-2 break-words text-left w-48'>Account : </label>
                  <select name="account"
                     value={project.account}
                     onChange={(e) => handleChange(e)} class="col-span-2 space-x-2 border-solid border border-slate-200 form-input rounded-lg py-3 px-4 bg-white placeholder-gray-600 text-gray-600 appearance-none w-full focus:outline-none" >

                     <option selected>Select Account</option>
                     <option value="1">PowerX</option>
                     <option value="2">SuperFly</option>
                     <option value="3">SpaceX</option>

                  </select>
               </div>

               <div className='grid grid-cols-8 p-4'>

                  <label className='text-black col-span-1 space-x-2 my-auto p-2 break-words text-left w-48'>Stage : </label>
                  <select name="stageId"
                     value={project.stageId}
                     onChange={(e) => handleChange(e)} class="col-span-2 space-x-2 border-solid border border-slate-200 form-input rounded-lg py-3 px-4 bg-white placeholder-gray-600 text-gray-600 appearance-none w-full focus:outline-none" >

                     <option selected>Select Stage</option>
                     <option value="1">Analysis</option>
                     <option value="2">Assessment</option>
                     <option value="3">Development</option>
                     <option value="4">Testing</option>
                     <option value="5">Build</option>
                     <option value="6">Production</option>

                  </select>
               </div>

               <div className='grid grid-cols-8 p-4'>

                  <label className='text-black col-span-1 space-x-2 my-auto p-2 break-words text-left w-48'>Project <br></br> Title : </label>
                  <input name="projectTitle"
                     value={project.projectTitle}
                     onChange={(e) => handleChange(e)} type="text" id="projectTitle" placeholder="Max 100 Characters" class="col-span-7 space-x-2 border-solid border border-slate-200 form-input rounded-lg py-3 px-4 bg-white placeholder-gray-600 text-gray-600 appearance-none w-full focus:outline-none" />

               </div>

               <div className='grid grid-cols-8 p-4'>

                  <label className='text-black col-span-1 space-x-2 my-auto p-2 break-words text-left w-48'>Project <br></br> Name : </label>
                  <input name="projectName"
                     value={project.projectName}
                     onChange={(e) => handleChange(e)} type="text" id="projectName" placeholder="Max 50 Characters" class="col-span-3 space-x-2 border-solid border border-slate-200 form-input rounded-lg py-3 px-4 bg-white placeholder-gray-600 text-gray-600 appearance-none w-full focus:outline-none" />



               </div>

               <div className='grid grid-cols-8 p-4'>
                  <label className='text-black col-span-1 space-x-2 my-auto p-2 break-normal text-left w-48'>Project <br></br> Description : </label>

                  <textarea

                     name="projectDescription"
                     value={project.projectDescription}
                     onChange={(e) => handleChange(e)} type="text" id="projectDescription"
                     class="col-span-7
                              form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white  focus:outline-none
                              "

                     rows="3"
                     placeholder="Project Description...."
                  ></textarea>

               </div>


               <div className='flex items-center justify-center space-x-2'>

                  <button onClick={saveProjects} class="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
                     Save
                  </button>

                  <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                     Cancel
                  </button>


               </div>
               <br></br>


               {msg &&

                  <div className='successmessage flex items-center justify-center space-x-2'>

                     <span className='text-green-500'>Successfully Saved...</span>

                  </div>
               }



            </div>



         </div>

         <div class="p-4 rounded-lg shadow-lg bg-white grid place-content-center col-span-3 row-span-5">





         </div>


      </div>


   )
}

export default ProjectForm