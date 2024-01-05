import { externalLink } from "@/assets/icons"


const Footer = () => {
  return (
    <footer id='contact' className=" font-montserrat px-8 py-4 flex items-center justify-between max-sm:text-center text-[10px] font-bold ">
      <p className="text-slate-400"> André Pinheiro &copy;2024</p>
      <div className="text-white flex flex-col gap-2">
        <a href="mailto:andre.devfront@outlook.com" className=" flex items-center gap-2 font-bold text-[16px]"><p>
          <span className="text-indigo-500 ">email:</span> andre.devfront@outlook.com
          </p>
          <img src={externalLink} alt="external link" width={16} height={16} />
           </a >
        <p className=" font-bold text-[16px]"><span className="text-indigo-500">phone:</span> +55 (71) 9 9607-6480</p>
      </div>
     </footer>
  )
}

export default Footer