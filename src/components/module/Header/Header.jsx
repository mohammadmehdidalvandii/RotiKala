import Navbar from '../Navbar/Navbar'
import Topbar from '../Topbar/Topbar'
import './Header.css'

function Header() {
  return (
    <section className="header">
        <Topbar/>
        <Navbar/>
    </section>
  )
}

export default Header