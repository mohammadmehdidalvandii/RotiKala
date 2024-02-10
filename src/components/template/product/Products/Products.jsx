import './Products.css'
import ProductCard from '../../../module/ProductCard/ProductCard'
import { useContext } from 'react'
import productContext from '../../../../context/ProductContext'
import PageHeader from '../../../module/PageHeader/PageHeader'


function Products() {
    const productsData = useContext(productContext)
  return (
    <section className="products">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <PageHeader text='فروشگاه'/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="products_filter">
                        <h6 className="product_title">فیلتر ها</h6>
                        <div className="products_search">
                            <input type="text" className="products_search_input" placeholder='جستجو محصولات...'/>
                        </div>
                        <div className="products_range">
                            <span className="product_range_text">براساس قیمت</span>
                            <input type="range" className='products_range_input' />
                            <span className="product_range_price">0 تا 100,000,000 تومان</span>
                        </div>
                        <div className="products_order">
                            <span className="products_order_title">دسته بندی</span>
                            <ul className="products_order_items">
                                <li className="products_order_item">
                                    <span className="product_order_item_text">کیف</span>
                                    <input type="checkbox"  className='products_order_item_input'/>
                                </li>
                                <li className="products_order_item">
                                    <span className="product_order_item_text">کفش</span>
                                    <input type="checkbox"  className='products_order_item_input'/>
                                </li>
                                <li className="products_order_item">
                                    <span className="product_order_item_text">لباس</span>
                                    <input type="checkbox"  className='products_order_item_input'/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <div className="row">
                        {productsData.products.map(product=>(
                        <div className="col-lg-3 col-md-6 col-sm-12" key={product.id}>
                            <ProductCard
                                {...product}
                                price={product.price.toLocaleString()}
                            />
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products