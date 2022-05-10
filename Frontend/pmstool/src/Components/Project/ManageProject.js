import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import ProjectServices from "../../services/ProjectServices";
import Stepper from "./Stepper";
import LeftMenu from "../LeftMenu/LeftMenu";
import NavbarRight from "../Header/NavbarRight";
import NavbarLeft from "../Header/NavbarLeft";
import OpenProjectModal from "../Modal/ProjectModal";
import Notification from "../Notification/Notification";




function ManageProject() {



  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [projects, setProjects] = useState(null);
  const [employees, setEmployees] = useState(null);
  const [completed, setCompleted] = useState(null);
  const [progress, setProgress] = useState(null);

  const [open, setOpen] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {



        const completedProjects = await ProjectServices.getTotalCompletedProjects()
        const progressProjects = await ProjectServices.getTotalInProgressProjects()

        setCompleted(completedProjects.data)
        setProgress(progressProjects.data)

        const response = await ProjectServices.getProjects();
        setProjects(response.data);


      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [open]);




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


        <div class="relative rounded-xl row-span-1 p-4">


          <div class="flex justify-between space-x-4 font-mono text-white text-sm font-bold leading-6 ">
            <div class="flex justify-around w-full h-14 rounded-lg items-center justify-center ">


              <div className='text-left'>
                <span className='font-sans text-black text-2xl'>{completed}</span>

                <div>
                  <span className='font-sans text-gray-400 text-lg font-medium' >Completed</span>
                </div>
              </div>


              <div>
                <div className='text-left'>
                  <span className='font-sans text-black text-2xl text-left'>{progress}</span>
                </div>

                <div>
                  <span className='font-sans text-gray-400 text-lg font-medium'>In Progress</span>
                </div>
              </div>






              <div className='text-left'>
                <span className='font-sans text-black text-2xl'>4</span>

                <div>
                  <span className='font-sans text-gray-400 text-lg font-medium'>Cancelled</span>
                </div>
              </div>

            </div>
            <div class="w-full h-14 rounded-lg flex flex-row-reverse items-center ">

              <div class="group w-12 h-12  rounded-full hover:bg-black border-black flex justify-center items-center" onClick={() => { navigate(`/dashboard`) }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white h-8 w-8 mx-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
              </div>

              <div class="group w-12 h-12 rounded-full hover:bg-black border-black flex justify-center items-center" onClick={() => { navigate(`/dashboard`) }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-white h-8 w-8 mx-auto text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>

            </div>
          </div>
        </div>


        <div class="relative rounded-xl overflow-auto p-4 row-span-5 ">

          <div class="font-mono text-white text-sm font-bold leading-6">




            {!loading && (


              <div class="grid grid-cols-3 gap-4 h-56">
                {projects.map((project) => (

                  <div class="bg-stripes-blue grid place-items-stretch rounded-lg">
                    <Card project={project} key={project.projectId} handleModal={setOpen} />
                  </div>

                ))}

              </div>


            )}

            <OpenProjectModal handleModal={setOpen} current={open} />

          </div>

        </div>

      </div>




      <div className="p-4 rounded-lg shadow-lg bg-white grid col-span-3 row-span-5">

       
          <Notification open={open} />
       
      </div>



    </div>


  )
}

export default ManageProject