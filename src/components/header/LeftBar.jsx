
import { logo } from "../../assets/images"
import { navLinks } from "../../constants"


const LeftBar = () => {
  

  return (
    <section className=" lg:hidden hidden   sm:flex fixed
     py-12 flex-col gap-28 min-w-[200px] sm:min-h-screen bg-black text-white">

      <div className="px-6">
        <img src={logo} alt="" width={100} className=" "/>
        
      </div>

      <nav className="flex justify-between items-center px-2">
        <ul className="flex flex-col justify-between gap-12">
          {navLinks.map((item) => 
            {
              
              const itemLabel = item.icon ? item.label : ''
              return (
                
                  <a key={item.label} href={item.href} className="group font-poppins text-lg transition hover:bg-indigo-400 py-4 px-12 cursor-pointer items-center rounded-lg gap-2.5 flex">
                    <img 
                      src={item.icon} 
                      alt={itemLabel} 
                      className='group-hover:invert group-hover:brightness-0 group-hover:transition' />
                      {item.label}
                    </a>
             )
            }
          )}
        </ul>
      </nav>

    </section>
  )
}

export default LeftBar