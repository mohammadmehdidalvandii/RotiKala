import { NavLink } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({image , name ,price, id}) {
  return (
                 <NavLink to={`/Product-D/${id}`} className="productCard">
                    <img src={image} alt="product" className="productCard_img" />
                    <div className="productCard_content">
                    <h6 className="productCard_title">{name}</h6>
                    <span className="productCard_price">{price} تومان</span>
                    </div>
                </NavLink>
  )
}

export default ProductCard