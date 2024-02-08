import './ArticleCard.css'
import { NavLink } from "react-router-dom"

function ArticleCard() {
  return (
    <NavLink className="articleCard">
    <img src="/assets/images/blog1.jpg" alt="" className="articleCard_img" />
    <h6 className="articleCard_title">مزایا ومعایب گوشی های S21</h6>
    <span className="articleCard_date">29/شهریور/1403</span>
</NavLink>
  )
}

export default ArticleCard