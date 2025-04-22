import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Home from './pages/Home'
import { Outlet } from 'react-router-dom'
// import { Tooltip } from './components/ui/tooltip'
function App() {

  return (
    <>
    {/* <Home /> */}
    <Navbar />
    <Outlet />
    <Footer />
    {/* <h1 className='text-2xl'>MOK</h1> */}
    </>
  )
}

export default App
