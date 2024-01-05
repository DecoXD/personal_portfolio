

import Header from "./components/header/Header"
import FadeInSection from "./components/shared/FadeInSection"
import { About, Footer, Hero, Overview } from "./sections"


function App() {


  return (
    <main className="relative bg-black min-h-screen overflow-hidden">
     
      <Header />

     
      <FadeInSection className={ ` lg:px-8 sm:pl-[250px]  px-4 max-w-[1440px] bg-black hero-size flex items-center`} animate = {'animate-fade-in'} >
        <Hero/>
      </FadeInSection>
      
     
      <FadeInSection  className="lg:px-8 sm:pl-[250px]  px-4 max-w-[1440px] bg-black"  animate = {'animate-fade-in-right'}>
        <Overview/>
      </FadeInSection>
      

      <FadeInSection  className="lg:px-8 sm:pl-[250px]  px-4 max-w-[1440px] bg-black " animate = {'animate-fade-in'}>
        <About/>
      </FadeInSection>
      
      <Footer />
      


    </main>
      
    
     
   
  )
}

export default App
