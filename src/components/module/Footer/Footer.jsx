import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
    const handlerGoToUp =(event)=>{
            event.preventDefault()
            window.scroll(0,0)
    }
  return (
    <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="footer_text">تلفن پشتیبانی 0000000 - 021
|
۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</div>
                    </div>
                    <div className="col-lg-6">
                        <button className="footer_btn_top" onClick={handlerGoToUp}>
                            برو بالا
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="newsletter">
                            <span className="newsletter_text">از جدیدترین تخفیف ها با خبر شوید</span>
                            <div className="newsletterEmail">
                                <input type="text" className="newsletter_input" placeholder='ایمیل شما'/>
                                <button className="newsletter_btn">ثبت</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footer_content">
                            <h5 className="footer_title">روتی کالا</h5>
                            <ul className="footer_items">
                                <li className="footer_item">
                                    <NavLink to='' className='footer_item_link'>شرایط مرجوعی</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='' className='footer_item_link'>راهنمای خرید</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='' className='footer_item_link'>قوانین و مقررات</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='' className='footer_item_link'>چرا روتی کالا</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footer_content">
                            <h5 className="footer_title">دسترسی سریع</h5>
                            <ul className="footer_items">
                                <li className="footer_item">
                                    <NavLink to='' className='footer_item_link'>پیگیری سفارشات</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='' className='footer_item_link'>تماس با ما</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='' className='footer_item_link'>سوالات متداول</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='' className='footer_item_link'>درباره ما</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
  )
}

export default Footer