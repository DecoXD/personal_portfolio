import Header from "./components/header/Header"
import { Hero, Overview } from "./sections"


function App() {
  

  return (
    <div>
      <Header/>

      <section className="lg:px-8 sm:pl-[250px] px-4 max-w-[1440px] bg-black hero-size ">
        <Hero/>
      </section>

      <section className="lg:px-8 sm:pl-[250px] max-sm:pb-[250px] px-4 max-w-[1440px] bg-black hero-size ">
        <Overview/>
      </section>


    </div>
      
    
     
   
  )
}

export default App
