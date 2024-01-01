


const Hero = () => {
  return (
    <section  className="max-container lg:pt-2   flex lg:flex-row flex-col-reverse gap-4 w-full ">

      <div className="text-white relative  flex flex-col gap-4 items-center  text-center  flex-1">
        
        <h1 className="font-poppins text-6xl lg:text-[74px] leading-normal  font-bold  ">
          Welcome <br /> to My 
         <div className=" relative flex items-start px-4 pb-8">
          <span className="text-indigo-500 absolute animate-bounce2  "> Portfolio</span>
         </div>
        </h1>

        <p className="font-montserrat max-w-[350px] text-center text-slate-400 mt-16">
          welcome, if you want know about me, please visit this site, else, if you have pressa... </p>
        <button className="bg-indigo-500 p-4 ">Show CV</button>
      </div>
      <div className="text-white  flex-1 object-contain">
        <img src={'https://github.com/decoxd.png'} alt="cartoon image" className=" m-auto"  />
      </div>
    </section>
  )
}

export default Hero