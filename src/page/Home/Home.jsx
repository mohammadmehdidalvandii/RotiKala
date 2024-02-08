import HomeSliderBanner from "../../components/template/home/HomeSliderBanner/HomeSliderBanner"
import ProductNew from "../../components/template/home/ProductNew/ProductNew"
import ProductSpecial from "../../components/template/home/ProductSpecial/ProductSpecial"

function Home() {
  return (
    <>
          <HomeSliderBanner/>
          <ProductSpecial/>
          <ProductNew/>
          <br /><br /><br /><br /><br />
    </>
  )
}

export default Home