import {aboutImage } from "@/assets/images"
import { contacts } from "@/constants"


const About = () => {
  return (
    <section id="about" className="text-white lg:flex-row flex-col-reverse lg:gap-8 gap-16 pl-2 flex pt-16 pb-16 justify-center lg:items-center">
        
        <div className=" flex flex-1">
          <div className=" -translate-x-2 lg:-translate-x-0 rounded-lg bg-[#0f172a]">
            <img src={aboutImage} alt="about image" className=" translate-x-4 -translate-y-4 rounded-lg" width={360} height={360} />
          </div>
        </div>

        <div className="flex flex-col  gap-12 flex-1">

          <div className="w-full max-w-[370px]">
          <h3 className="text-5xl md:text-6xl font-poppins font-bold">
            <span className="text-indigo-500">about </span> me</h3>
          </div>

            <p className="font-montserrat text-sm  text-slate-300 max-w-[370px]">I like to work closely with design teams to faithfully translate their projects down to the last pixel. Daily, you will find me using modern technologies, always seeking to deepen my knowledge. </p>
            
            <div >
              <h5 className="font-bold font-poppins pb-4">Technical</h5>
              <p className="font-montserrat text-sm  text-slate-300 max-w-[370px]">Now you can find me hacking mainly with React, NextJS, NodeJS and in general anything JavaScript / TypeScript, HTML and CSS related.</p>
            </div>
           

            <div className="flex gap-8  ">
              {
                contacts.map((contact) => (
                  <a  rel="noreferrer" target="_blank"  key={contact.href} href={contact.href} className=" ">
                    <img src={contact.icon} alt={contact.label} width={36} height={36}/>
                  </a>
                ))
              }
            </div>
        </div>
    </section>
  )
}

export default About