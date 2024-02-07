import './HomeSliderBanner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

function HomeSliderBanner() {
  return (
    <section className="homeSliderBanner">
        <div className="containers">
        <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
            <Swiper
             navigation={true} 
             loop={true}
             modules={[Navigation]} 
             className="mySwiper">
                    <SwiperSlide>
                        <NavLink to='/Product' className='home_slider_link'>
                            <img src="/assets/images/slider/home-slider-1.jpg" alt="slider" className="home_slider_img" />
                        </NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink to='/Product' className='home_slider_link'>
                            <img src="/assets/images/slider/home-slider-2.jpg" alt="slider" className="home_slider_img" />
                        </NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink to='/Product' className='home_slider_link'>
                            <img src="/assets/images/slider/home-slider-3.jpg" alt="slider" className="home_slider_img" />
                        </NavLink>
                    </SwiperSlide>
         </Swiper>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="home_banner">
                    <NavLink to='/Product' className='home_banner_link'>
                        <img src="/assets/images/banner/home-banner-top.jpg" alt="" className="home_banner_img" />
                    </NavLink>
                    <NavLink to='/Product' className='home_banner_link'>
                        <img src="/assets/images/banner/home-banner-bottom.gif" alt="" className="home_banner_img" />
                    </NavLink>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default HomeSliderBanner