import './ContactUs.css'
import PageHeader from '../../../module/PageHeader/PageHeader'

function ContactUs() {
  return (
    <section className="contactUs">
        <div className="container">

            <div className="row">
                <div className="col-12">
                    <PageHeader text='تماس با ما'/>
                </div>
            </div>
            <div className="contact_wrapper">
            <div className="row mt-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="contact_content">
                        <span className="contact_text">سوالات خود را بپرسید</span>
                        <form action="#" className="contact_form">
                            <input type="text" className="contact_form_input" placeholder='نام شما '/>
                            <input type="text" className="contact_form_input" placeholder='نام شما '/>
                            <input type="text" className="contact_form_input" placeholder='نام شما '/>
                            <textarea  className="contact_form_subject"placeholder='پیام شما'></textarea>
                            <button className="contact_form_btn">ارسال</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="contact_content">
                        <ul className="contact_items">
                            <li className="contact_item">
                                <span className="contact_item_title">آدرس ایمیل :</span>
                                <span className="contact_item_text">info@gamil.com</span>
                            </li>
                            <li className="contact_item">
                                <span className="contact_item_title">تلفن پشتیانی :</span>
                                <span className="contact_item_text">021 - 9999999</span>
                            </li>
                            <li className="contact_item">
                                <span className="contact_item_title">آدرس دفتر مرکزی :</span>
                                <span className="contact_item_text">استان تهران خیابان فاطی روبه رویه هتل لاله</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
         
        </div>
    </section>
  )
}

export default ContactUs