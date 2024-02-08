import ProductCard from '../../../module/ProductCard/ProductCard';
import Title from '../../../module/Title/Title';
import './ProductNew.css';
import { useContext } from 'react';
import productContext from '../../../../context/ProductContext';

function ProductNew() {
    const productsData = useContext(productContext)
  return (
    <section className="productNew">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title text='جدیدترین محصولات' link='/Product'/>
                </div>
            </div>
            <div className="row">
                {productsData.products.slice(2,8).map(product=>(
                <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12" key={product.id}>
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

export default ProductNew