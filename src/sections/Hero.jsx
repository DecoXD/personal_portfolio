import { myImage } from "@/assets/images"
import { Button } from "@/components/ui/button"



const Hero = () => {
  return (
    <section id="home"  className="max-container lg:pt-2 animate-fade-in pb-4 pl-2 flex lg:flex-row flex-col-reverse gap-4 w-full ">

      <div className="text-white relative  flex flex-col gap-4 lg:items-center  lg:text-center  flex-1">
        
        <h1 className="font-poppins text-6xl lg:text-[74px] leading-normal  font-bold  ">
          <span className="fade-effect-500">Welcome<br /> i am</span> 
         <div className=" relative flex items-start  lg:mb-12">
          <span className="text-indigo-500 fade-effect-500 lg:absolute pr-4 lg:whitespace-nowrap lg:bg-black ">André Pinheiro</span>
         </div>
        </h1>

        <p className="font-montserrat max-w-[350px] fade-effect-1000 lg:text-center  fade-effect-500 text-slate-400 lg:mt-16">
          welcome, if you want know about me, please visit this site, else, if you have pressa... </p>
        <Button className='p-6 fade-effect-1500 max-w-44 bg-indigo-800 font-montserrat font-bold'>Show CV</Button>
        
      </div>
      <div className="text-white  flex-1 object-contain overflow-hidden">
        <img src={myImage} alt="cartoon image" className=" lg:m-auto animate-slide-in"  />
      </div>
    </section>
  )
}

export default Hero