import ProductDetail from "../../components/template/productDetails/ProductDetail/ProductDetail"
import ProductInfo from "../../components/template/productDetails/ProductInfo/ProductInfo"
import ProductRelated from "../../components/template/productDetails/ProductRelated/ProductRelated"


function ProductDetails() {
  return (
    <>
     <ProductDetail/>
     <ProductRelated/>
     <ProductInfo/>
    </>
  )
}

export default ProductDetails