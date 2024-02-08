import './HomeArticles.css'
import Title from '../../../module/Title/Title'
import ArticleCard from '../../../module/ArticleCard/ArticleCard'


function HomeArticles() {
  return (
   <section className="homeArticles">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <Title text='مطالب خواندنی' link='/Article'/>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <ArticleCard/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <ArticleCard/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <ArticleCard/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <ArticleCard/>
            </div>
        </div>
    </div>
   </section>
  )
}

export default HomeArticles