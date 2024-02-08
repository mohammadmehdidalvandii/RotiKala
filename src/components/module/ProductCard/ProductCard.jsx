import { NavLink } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({image , name ,price}) {
  return (
                 <NavLink to='/Product-D' className="productCard">
                    <img src={image} alt="product" className="productCard_img" />
                    <h6 className="productCard_title">{name}</h6>
                    <span className="productCard_price">{price} تومان</span>
                </NavLink>
  )
}

export default ProductCard