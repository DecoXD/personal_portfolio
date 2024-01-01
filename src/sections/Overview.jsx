
import SkillCard from "@/components/shared/SkillCard"
import { Carousel,CarouselContent} from "@/components/ui/carousel"
import { projects } from "@/constants"


const Overview = () => {
  return (
    <section className="max-container text-white py-32  pl-2 md:pl-8 ">
      <h2 className="text-4xl md:text-5xl font-poppins font-bold"><span className="text-indigo-500">Skills </span> and Projects</h2>
      <p className="mt-2 text-sm color font-montserrat text-slate-400">hover to preview</p>

      <div className="pt-12   ">

      <Carousel >
        <CarouselContent className="px-4 sm:px-6 py-2 sm:gap-16 gap-8" >
          {projects.map((project) =>{
            return (
              <SkillCard key={project.name} {...project}/>
              )
          })}
        </CarouselContent>      
      </Carousel>
      </div>
    </section>
  )
}

export default Overview