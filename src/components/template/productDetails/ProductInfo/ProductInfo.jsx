import { useState } from 'react'
import './ProductInfo.css'

function ProductInfo() {
    const [showProductMenu , setShowProductMenu] = useState('intro')
    const handlerButtonInfo = (BtnID)=>{
        setShowProductMenu(BtnID)
    }
  return (
    <section className="productInfo">
        <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="productInfo_buttons">
                    <button 
                    className={`productInfo_btn ${showProductMenu === "intro" ? "productInfo_btnActive" :""}`}
                    onClick={()=>handlerButtonInfo('intro')}
                    >معرفی</button>
                    <button 
                    className={`productInfo_btn ${showProductMenu === "info" ? "productInfo_btnActive" :""}`}
                    onClick={()=>handlerButtonInfo('info')}
                    >مشخصات</button>
                    <button 
                    className={`productInfo_btn ${showProductMenu === "comment" ? "productInfo_btnActive" :""}`}
                    onClick={()=>handlerButtonInfo('comment')}
                    >دیدگاه</button>
                </div>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-12">
                {
                    showProductMenu === 'intro' &&(
                        <div className="productInfo_wrapper">
                            <div className="productInfo_intro">
                                <h4 className="productInfo_title">معرفی</h4>
                                <p className="productInfo_desc">چه در حال تمرین و چه در زندگی روزمره، این کفش‌های اورجبنال نیوبالانس طوری طراحی شده‌اند که در هر نوع حرکت با شما همراه باشند. جزئیات متمرکز بر عملکرد مانند زیره میانی DynaSoft و زیره لاستیکی بادوام به این کفش وزن سبک و واکنش پذیری بالایی می بخشد که performance ورزشی شما را افزایش می دهد. ترکیب رنگی این کفش جذابیت و شادابی دو چندانی را به استایل اسپورت شما می بخشد.</p>
                                <p className="productInfo_desc">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                                </p>
                                <img src="/assets/images/product/p8.png" alt="" className="productInfo_img" />
                            </div>
                        </div>
                    )
                }
                {
                    showProductMenu === 'info' &&(
                        <div className="productInfo_wrapper">
                                <div className="productInfo_info">
                                    <h4 className="productInfo_title">مشخصات</h4>
                                    <ul className="productInfo_items">
                                        <li className="productInfo_item">لورم ایپسوم متن ساختگی با تولید سادگی</li>
                                        <li className="productInfo_item">لورم ایپسوم متن ساختگی با تولید سادگی</li>
                                        <li className="productInfo_item">لورم ایپسوم متن ساختگی با تولید سادگی</li>
                                        <li className="productInfo_item">لورم ایپسوم متن ساختگی با تولید سادگی</li>
                                        <li className="productInfo_item">لورم ایپسوم متن ساختگی با تولید سادگی</li>
                                    </ul>
                                </div>
                         </div>
                    )
                }
                {
                    showProductMenu === 'comment' &&(
                        <div className="productInfo_wrapper">
                            <div className="productInfo_comment">
                                 <h4 className="productInfo_title">دیدگاه</h4>
                                <div className="row mt-5">
                                    <div className="col-lg-3 col-md-3 col-sm-12">
                                        <div className="productInfo_addComment">
                                            <h6 className="productInfo_addComment_title">ثبت دیدگاه</h6>
                                            <form action="#" className="productInfo_addComment_form">
                                                <input type="text" className="productInfo_addComment_input" placeholder='عنوان دیدگاه'/>
                                                <textarea className='productInfo_addComment_text' placeholder='متن دیدگاه'></textarea>
                                                <button className="productInfo_addComment_submit">ارسال دیدگاه</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12">
                                        <div className="productInfo_Comment_item">
                                            <h6 className="productInfo_comment_title">با این قیمت کاملا مناسب و خوبه</h6>
                                            <p className="productInfo_comment_text">برا کسایی که نمیخوان هزینه بالایی کنن گزینه خیلی خوبیه</p>
                                            <button className="productInfo_comment_ansWer">پاسخ</button>
                                        </div>
                                            <div className="productInfo_Comment_item">
                                                <h6 className="productInfo_comment_title">با این قیمت کاملا مناسب و خوبه</h6>
                                                <p className="productInfo_comment_text">برا کسایی که نمیخوان هزینه بالایی کنن گزینه خیلی خوبیه</p>
                                                <button className="productInfo_comment_ansWer">پاسخ</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        </div>
    </section>
  )
}

export default ProductInfo