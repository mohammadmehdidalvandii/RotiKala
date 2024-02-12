import Home from './page/Home/Home'
import Contact from './page/Contact/Contact'
import About from './page/About/About'
import Product from './page/Product/Product'
import ProductDetails from './page/ProductDetails/ProductDetails'
import Article from './page/Article/Article'
import ArticleDetails from './page/ArticleDetails/ArticleDetails'
import Basket from './page/Basket/Basket'
import Account from './page/Account/Account'

const routes = [
    { path: '/' ,  element: <Home/>},
    { path: '/Contact' ,  element: <Contact/>},
    { path: '/About' ,  element: <About/>},
    { path: '/Product' ,  element: <Product/>},
    { path: '/Product-D/:id' ,  element: <ProductDetails/>},
    { path: '/Article' ,  element: <Article/>},
    { path: '/Article-D' ,  element: <ArticleDetails/>},
    { path: '/Basket' ,  element: <Basket/>},
    { path: '/Account' ,  element: <Account/>},
]

export default routes