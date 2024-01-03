
import ProjectCard from "@/components/shared/ProjectCard"
import { Carousel,CarouselContent} from "@/components/ui/carousel"
import { programmingSkills, projects } from "@/constants"


const Overview = () => {
  return (
    <section id="overview" className="max-container text-white py-32  pl-2  ">
      <div className="mt-12">
        <h2 className="text-5xl md:text-5xl font-poppins font-bold">My <span className="text-indigo-500"> Projects</span> </h2>
        <p className="mt-4 text-sm color font-montserrat text-slate-400">hover to preview</p>
        <Carousel className="mt-12" >
          <CarouselContent className="px-4 sm:px-6 py-2 sm:gap-16 gap-8" >
            {projects.map((project) =>{
              return (
                <ProjectCard key={`${project.name}#${project.dificulty}`} {...project}/>
                )
            })}
          </CarouselContent>      
        </Carousel>
      </div>

      <div className="mt-12 text-4xl font-poppins font-bold">
        <h4>Main <span className="text-indigo-500">Skills</span></h4>
        <div className="mt-6 border-[1px]  py-6 px-4 rounded-xl gap-2  flex flex-wrap items-start">
          {
            programmingSkills.map((item) =>(
              <span className=" text-sm border-[1px] text-[10px] rounded-xl px-1 py-[2px]" key={`${item}#`}><span className="text-indigo-500"># </span>{item}</span>
            ))
          }
        </div>
     </div>
    
    </section>
  )
}

export default Overview