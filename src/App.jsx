
  import './App.css'
  import Contact from './Components/Contact'
  import Education from './Components/Education'
  import Footer from './Components/Footer'
  import GitHubSection from './Components/gitProfile'
  import Introduction from './Components/Introduction'
  import Projects from './Components/Projects'
  import Skills from './Components/Skills'
  import Tools from './Components/Tools'
  import Navbar from "./Components/Navbar"
  import { ElementProvider } from './Context/ContextAPI'


  function App() {

    return (
      <ElementProvider>
      <Navbar/>
      <hr className='border-gray-900' />
      <Introduction/>
      <Skills/>
      <Tools/>
      <Projects/>
      <Education/>
      <GitHubSection/>
      <Contact/>
      <hr className='border-gray-800' />
      <Footer/>
      </ElementProvider>
    )
  }

  export default App
