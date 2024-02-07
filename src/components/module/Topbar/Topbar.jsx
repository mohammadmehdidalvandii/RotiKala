import './Topbar.css';
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";



function Topbar() {
  return (
    <section className="topbar">
        <div className="topbar_wrapper">
                <NavLink to='/' className='topbar_link_logo'>
                    <img src="/assets/svg/logo.svg" alt="logo svg" className="topbar_logo" />
                </NavLink>
                <div className="topbar_search">
                    <span className="topbar_search_icon">
                        <FaSearch/>
                    </span>
                    <input type="text" className="topbar_search_input" placeholder='جستجو کنید...'/>
                </div>

                <div className="topbar_links">
                    <NavLink to='/Account' className='topber_link_account'>
                        <span className="topbar_link_icon">
                            <BsPersonFill/>
                        </span>
                    </NavLink>
                    <NavLink to='/Basket' className='topbar_link_basket'>
                    <span className="topbar_link_icon">
                            <MdOutlineShoppingCart/>
                        </span>
                        <span className="topbar_link_num">10</span>
                    </NavLink>
                </div>
        </div>
    </section>
  )
}

export default Topbar