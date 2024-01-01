import { logo } from "../../assets/images"
import { navLinks } from "../../constants"


const TopBar = () => {
  return (
    <section className="max-container hidden lg:flex left-bar  relative
        py-8   justify-between pr-24 w-full  bg-black text-white">

          <div className="px-6 mt-2">
            <img src={logo} alt="" width={100} className=" "/>      
          </div>

          <nav className="flex flex-1  items-center max-w-[780px] ">
            <ul className="flex justify-between   w-full   ">
              {navLinks.map((item) => 
                {  
                  const itemLabel = item.icon ? item.label : ''
                  return (       
                      <a key={item.label} href={item.href} className="group font-poppins text-lg transition   cursor-pointer items-center rounded-lg gap-2.5 flex">
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

export default TopBar