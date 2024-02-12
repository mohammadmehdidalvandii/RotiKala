import ProductDetail from "../../components/template/productDetails/ProductDetail/ProductDetail"
import ProductInfo from "../../components/template/productDetails/ProductInfo/ProductInfo"
import ProductRelated from "../../components/template/productDetails/ProductRelated/ProductRelated"
import { useParams } from "react-router-dom"
import productContext from "../../context/ProductContext"
import { useContext } from "react"

function ProductDetails() {
  const {id} = useParams()
  const productData = useContext(productContext)

  const foundProduct = productData.products.find(product=>product.id == parseInt(id))
  console.log(foundProduct);
  return (
    <>
     <ProductDetail
      {...foundProduct}
      price={foundProduct.price.toLocaleString()}
     />
     <ProductRelated/>
     <ProductInfo/>
    </>
  )
}

export default ProductDetails