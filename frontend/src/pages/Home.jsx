import About from '../components/home/About.jsx'
import Headers from '../components/home/Header.jsx'
import Domains from '../components/home/Domains.jsx'
import { Contact } from '../components/Contact.jsx'
import Footer  from '../components/Footer.jsx'
const Home = () => {
  return (
    <div>
      <Headers/>
      <About/>
      <Domains/> 
      <Contact/>
      <Footer/> 
    </div>
  )
}

export default Home