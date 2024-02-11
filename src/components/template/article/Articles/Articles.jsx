import './Articles.css';
import PageHeader from '../../../module/PageHeader/PageHeader'
import ArticleCard from '../../../module/ArticleCard/ArticleCard'


function Articles() {
  return (
    <section className="articles">
        <div className="container">
            <div className="row">
                <div className="col-12">
                <PageHeader text='مقالات'/>
                </div>
            </div>
            <div className="article_wrapper">
            <div className="row mt-5">
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
        </div>
    </section>
  )
}

export default Articles