import About from "./component/About";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Portfolio from "./component/port";
import Skills from "./component/Skills"
function Home(){
  return(
    <>
    <Portfolio />
    <Hero/>
    <About/>
    <Skills/>
    <Contact/>

    </>
  )
}
export default Home