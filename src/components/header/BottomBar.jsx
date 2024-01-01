import { navLinks } from "../../constants"

const BottomBar = () => {
  return (
    <section className=" sm:hidden flex justify-center z-10  fixed bottom-0  w-full
    p-6 px-8 flex-col bg-black text-white">

     

     <nav >
       <ul className="flex  justify-between ">
         {navLinks.map((item) => 
           {            
             const itemLabel = item.icon ? item.label : ''
             return (
               
                 <a key={item.label} href={item.href} className="group font-poppins text-[12px] transition hover:bg-indigo-400 py-2 px-4 cursor-pointer items-center rounded-lg  flex flex-col">
                   <img 
                     src={item.icon} 
                     alt={itemLabel} 
                     className='group-hover:invert group-hover:brightness-0 group-hover:transition'
                     width={32}
                     height={32} />
                      
                     
                   </a>
            )
           }
         )}
       </ul>
     </nav>

   </section>
  )
}

export default BottomBar