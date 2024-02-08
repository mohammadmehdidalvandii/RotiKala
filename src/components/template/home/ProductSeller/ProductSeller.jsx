import ProductCard from '../../../module/ProductCard/ProductCard'
import Title from '../../../module/Title/Title'
import './ProductSeller.css'
import { useContext } from 'react'
import productContext from '../../../../context/ProductContext'

function ProductSeller() {
  const productsData =useContext(productContext)
  return (
   <section className="productSeller">
    <div className="container">
    <div className="row">
        <div className="col-12">
            <Title text='پرفروش ترین محصولات' link='/Product'/>
        </div>
    </div>
    <div className="row">
      {productsData.products.slice(1,7).map(product=>(
      <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 " key={product.id}>
        <ProductCard
        {...product}
        price={product.price.toLocaleString()}
        />
      </div>
      ))}
    </div>
    </div>
   </section>
  )
}

export default ProductSeller