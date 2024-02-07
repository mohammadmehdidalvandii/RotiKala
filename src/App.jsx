import { useRoutes } from "react-router-dom"
import routes from "./routes"
// import db from './data/db.json'
import { useState } from "react"
import productContext from './context/ProductContext'


function App() {
  const router =useRoutes(routes)
  const [products ,setProducts] = useState([])
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
   
      {router}
      </productContext.Provider>
    </>
  )
}

export default App