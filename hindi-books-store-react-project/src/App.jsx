
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import BookDetails from "./pages/BookDetails"
import Wishlist from "./pages/Wishlist"
import Cart from "./pages/Cart"
import Admin from "./pages/Admin"

function App(){

  return(

  <BrowserRouter>

  <Navbar/>

  <Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/book/:id" element={<BookDetails/>}/>
  <Route path="/wishlist" element={<Wishlist/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/admin" element={<Admin/>}/>

  </Routes>

  </BrowserRouter>

  )

}

export default App
