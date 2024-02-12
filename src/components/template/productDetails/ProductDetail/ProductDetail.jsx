import './ProductDetail.css'
import { NavLink } from 'react-router-dom'
import { BiSolidLike } from "react-icons/bi";


function ProductDetail({category , image , name ,price}) {
  return (
    <section className="productDetail">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="productDetail_page">
                        <NavLink to='/' className='productDetail_page_link'>خانه</NavLink>
                        /
                        <span className="product_page_text">{category}</span>
                        /
                        <span className="product_page_text">جزئیات کالا</span>
                    </div>
                </div>
            </div>
            <div className="productDetail_wrapper">
            <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <img src={image} alt="" className="productDetail_img" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="product_info">
                    <h5 className="product_info_title">{name}</h5>
                    <span className="product_info_subTitle">New Balance Men's Walking Shoes Model Mdrftlm2</span>
                    <div className="product_info_suggestion">
                        <span className="product_info_suggestion_icon">
                            <BiSolidLike/>
                        </span>
                        <span className="product_info_suggestion_text">
                        80% از خریداران، خرید این کالا را پیشنهاد کرده‌اند
                        </span>
                    </div>
                    <ul className="product_info_items">
                        <li className="product_info_item">
                            <h6 className="product_info_item_title">ویژگی های محصول</h6>
                        </li>
                        <li className="product_info_item">
                            <span className="product_info_item_text">لورم ایپسوم متن ساختگی</span>
                        </li>
                        <li className="product_info_item">
                            <span className="product_info_item_text">لورم ایپسوم متن ساختگی</span>
                        </li>
                        <li className="product_info_item">
                            <span className="product_info_item_text">لورم ایپسوم متن ساختگی</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="productDetail_addToBasket">
                <div className="productDetail_addToBasket_items">
                    <div className="productDetail_addToBasket_item">
                        <select>
                            <option value="">مشکی</option>
                            <option value="">طوسی</option>
                            <option value="">سفید</option>
                        </select>
                    </div>
                    <div className="productDetail_addToBasket_item">
                        <select>
                            <option value="">37</option>
                            <option value="">40</option>
                            <option value="">43</option>
                            <option value="">42</option>
                            <option value="">41</option>
                        </select>
                    </div>
                </div>
                    <span className="productDetail_addToBasket_gar_text">تضمین سلامت فیزیکی و اصالت کالا</span>
                    <span className="productDetail_addToBasket_price">{price} تومان</span>
                    <button className="productDetail_addToBasket_btn">افزودن به سبد خرید</button>
            </div>
            </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDetail