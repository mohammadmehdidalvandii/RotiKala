import './PageHeader.css'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";



function PageHeader({text}) {
  return (
   <section className="pageHeader">
        <div className="pageHeader_wrapper">
            <NavLink to='/' className='pageHeader_link'>خانه</NavLink>
            <span className="pageHeader_icon">
                <FaArrowLeft/>
            </span>
            <span className="pageHeader_text">{text}</span>
        </div>
   </section>
  )
}

export default PageHeader