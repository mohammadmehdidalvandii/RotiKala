import { useRoutes } from "react-router-dom"
import routes from "./routes"
import db from './data/db.json'
import { useState } from "react"
import productContext from './context/ProductContext'
import Header from "./components/module/Header/Header"
import Footer from "./components/module/Footer/Footer"

function App() {
  const router =useRoutes(routes)
  const [products ,setProducts] = useState([...db.products])
  const [userBasket , setUserBasket] = useState([])
  return (
    <>  
      <productContext.Provider
      value={{
        products,
        setProducts,
        userBasket,
        setUserBasket
      }}
      >
         <Header/> 
         {router}
         <Footer/>
      </productContext.Provider>
    </>
  )
}

export default App