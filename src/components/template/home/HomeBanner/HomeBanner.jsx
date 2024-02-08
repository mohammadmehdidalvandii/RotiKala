import { NavLink } from 'react-router-dom'
import './HomeBanner.css'

function HomeBanner() {
  return (
        <section className="homeBanner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <NavLink to='/Product' className='homeBanner_link'>
                            <img src="/assets/images/banner/home-banner-1.jpg" alt="" className="homeBanner_link_img" />
                        </NavLink>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <NavLink to='/Product' className='homeBanner_link'>
                            <img src="/assets/images/banner/home-banner-2.jpg" alt="" className="homeBanner_link_img" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner