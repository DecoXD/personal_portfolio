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
                      <li key={item.label}>
                        <a  href={item.href} className="group font-poppins text-lg transition hover:brightness-75   cursor-pointer items-center rounded-lg gap-2.5 flex">
                        <img 
                          src={item.icon} 
                          alt={itemLabel} 
                           />
                          {item.label}
                        </a>
                      </li>
                )
                }
              )}
            </ul>
          </nav>

        </section>


  )
}

export default TopBar