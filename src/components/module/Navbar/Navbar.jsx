import './Navbar.css'
import { NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes  } from "react-icons/fa";
import { useEffect, useState } from 'react';


function Navbar() {
    const [showMenu ,setShowMenu] = useState(false)
    const [activeMenu , setActiveMenu] =useState('/')
    const location = useLocation()
    useEffect(()=>{
        const pathName = location.pathname
        setActiveMenu(pathName)
        setShowMenu(false)
        window.scroll(0,0)
    },[location]) 
    const showMenuHandler = ()=>{
        setShowMenu(!showMenu)
    }

  return (
    <section className="navBar">
        <div className="navbar_wrapper">
            <ul className="navbar_items d-lg-flex d-none">
                <li className="navbar_item">
                    <NavLink to='/' className={`navbar_item_link ${activeMenu === '/' ?"navbar_item_linkActive":""}`}>خانه</NavLink>
                </li>
                <li className="navbar_item">
                    <NavLink to='/Product' className={`navbar_item_link ${activeMenu === '/Product' ?"navbar_item_linkActive":""}`}>فروشگاه</NavLink>
                </li>
                <li className="navbar_item">
                    <NavLink to='/sp_product' className={`navbar_item_link ${activeMenu === '/Sp-product' ?"navbar_item_linkActive":""}`}>فورش ویژه</NavLink>
                </li>
                <li className="navbar_item">
                    <NavLink to='/About' className={`navbar_item_link ${activeMenu === '/About' ?"navbar_item_linkActive":""}`}>درباره ما</NavLink>
                </li>
                <li className="navbar_item">
                    <NavLink to='/Contact' className={`navbar_item_link ${activeMenu === '/Contact' ?"navbar_item_linkActive":""}`}>تماس با ما</NavLink>
                </li>
            </ul>
             {showMenu?(
                  <span className="navbar_icon d-lg-none " onClick={showMenuHandler}>
                    <FaTimes />
                 </span>
               ):(
                 <span className="navbar_icon d-lg-none " onClick={showMenuHandler}>
                  <FaBars/>
                 </span>
                 )}
          
            {showMenu && (
            <div className="navbarRes d-lg-none ">
                <ul className="navbarRes_items">
                    <li className="navbarRes_item">
                        <NavLink to='/' className={`navbarRes_item_link ${activeMenu === '/' ?"navbarRes_item_linkActive":""}`}>خانه</NavLink>
                    </li>
                    <li className="navbarRes_item">
                        <NavLink to='/Product' className={`navbarRes_item_link ${activeMenu === '/Product' ?"navbarRes_item_linkActive":""}`}>فروشگاه</NavLink>
                    </li>
                    <li className="navbarRes_item">
                        <NavLink to='/Sp-product' className={`navbarRes_item_link ${activeMenu === '/Sp-product' ?"navbarRes_item_linkActive":""}`}>فروش ویژه</NavLink>
                    </li>
                    <li className="navbarRes_item">
                        <NavLink to='/About' className={`navbarRes_item_link ${activeMenu === '/About' ?"navbarRes_item_linkActive":""}`}>درباره ما</NavLink>
                    </li>
                    <li className="navbarRes_item">
                        <NavLink to='/Contact' className={`navbarRes_item_link ${activeMenu === '/Contact' ?"navbarRes_item_linkActive":""}`}>تماس با ما</NavLink>
                    </li>
                    <li className="navbarRes_item">
                        <NavLink to='/Login' className={`navbarRes_item_link ${activeMenu === '/Login' ?"navbarRes_item_linkActive":""}`}>ورود</NavLink>
                    </li>
                    <li className="navbarRes_item">
                        <NavLink to='/Register' className={`navbarRes_item_link ${activeMenu === '/Register' ?"navbarRes_item_linkActive":""}`}>ثبت نام</NavLink>
                    </li>
                </ul>
            </div>
            )}
        </div>
    </section>
  )
}

export default Navbar