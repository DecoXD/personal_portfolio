import Header from "./components/header/Header"
import { About, Footer, Hero, Overview } from "./sections"


function App() {
  

  return (
    <main className="relative">

      <Header/>

      <section  className=" lg:px-8 sm:pl-[250px] px-4 max-w-[1440px] bg-black hero-size flex items-center ">
        <Hero/>
      </section>

      <section  className="lg:px-8 sm:pl-[250px]  px-4 max-w-[1440px] bg-black  ">
        <Overview/>
      </section>

      <section  className="lg:px-8 sm:pl-[250px]  px-4 max-w-[1440px] bg-black  ">
        <About/>
      </section>
      <section  className="lg:px-8 sm:pl-[250px] max-sm:pb-[250px] px-4 max-w-[1440px] bg-black  ">
        <Footer/>
      </section>


    </main>
      
    
     
   
  )
}

export default App
