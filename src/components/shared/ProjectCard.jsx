/*eslint-disable */

import { Button } from "../ui/button"

const ProjectCard = ({ 
  name,
  href,
  img,
  dificulty,
  icon,
  tags  }) => {
  return (
    <div key={name} className={`relative transition flex items-center justify-center border-[1px] border-[#1c2b4d] group   max-w-[400px] min-w-[370px] min-h-[400px] rounded-sm overflow-hidden 
    `}>
      <div className="absolute   z-10 top-2 right-4">
        <img src={icon} alt={dificulty} width={45} height={45} className={` m-auto`} />
      </div>

      <img src={img} alt={name} className="object-cover group-hover:brightness-75 transition w-full h-full "  />

      <div className="absolute z-10  ">
        <a href={href}  target="_blank"  >
          <Button className=' px-8 capitalize group-hover:brightness-150 group-hover:opacity-100 opacity-0 transition'>
            visit
          </Button>
          </a>
      </div>

      <div className="absolute items-start py-2.5 w-full  min-h-20 px-2  flex flex-wrap gap-1 bg-[#0f172a] z-10 bottom-0  right-0">
        {
          tags.map((tag) => <span className="py-[2px] group-hover:brightness-200 px-2 text-slate-400 text-[12px] font-montserrat border-[1px] rounded-xl" key={tag}>#{tag}</span>)
        }
      </div>
    </div>
  )
}

export default ProjectCard