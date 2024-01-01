import { myImage } from "../assets/images"


const Hero = () => {
  return (
    <section className="max-container  flex lg:flex-row flex-col gap-2 w-full ">

      <div className="text-white relative border-2 flex flex-col gap-4 items-center  text-center border-cyan-500 flex-1">
        
        <h1 className="font-poppins text-5xl md:text-[74px] leading-normal  font-bold  ">
          Welcome <br /> to My 
         <div className=" relative flex items-start px-4 pb-8">
          <span className="text-indigo-500 absolute animate-bounce2  "> Portfolio</span>
         </div>
        </h1>

        <p className="font-montserrat max-w-[350px] text-center text-slate-400 mt-16">
          welcome, if you want know about me, please visit this site, else, if you have pressa... </p>
        <button className="bg-indigo-500 p-4 ">Show CV</button>
      </div>
      <div className="text-white border-2 border-indigo-500 flex-1 object-contain">
        <img src={myImage} alt="cartoon image" className=""  />
      </div>
    </section>
  )
}

export default Hero