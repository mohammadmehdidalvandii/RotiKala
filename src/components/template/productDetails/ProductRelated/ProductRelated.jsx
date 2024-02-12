import './ProductRelated.css'
import Title from '../../../module/Title/Title'
import { useContext } from 'react'
import productContext from '../../../../context/ProductContext'
import ProductCard from '../../../module/ProductCard/ProductCard'


function ProductRelated() {
    const productData = useContext(productContext)
  return (
  <section className="productRelated">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <Title text='کالاهای مرتبط' link='/Product'/>
            </div>
        </div>
        <div className="row mt-4">
            {productData.products.filter(product=> product.category.includes("shoes") ).slice(0,4).map(product=>(
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={product.id}>
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

export default ProductRelated