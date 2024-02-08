import { NavLink } from 'react-router-dom'
import './Title.css'
import { IoIosArrowBack } from "react-icons/io";


function Title({text , link}) {
  return (
    <section className="title">
        <div className="wrapper_title">
            <h4 className="title_text">{text}</h4>
            <NavLink to={link} className='title_link'>
                <span className="title_link_text">مشاهده همه</span>   
                <span className="title_link_icon">
                    <IoIosArrowBack/>    
                </span>   
            </NavLink>
        </div>
    </section>
  )
}

export default Title