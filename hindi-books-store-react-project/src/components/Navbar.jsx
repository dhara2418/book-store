import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Navbar(){

const [scroll,setScroll] = useState(false)

useEffect(()=>{
const handleScroll = () => {
setScroll(window.scrollY > 50)
}

window.addEventListener("scroll",handleScroll)
return () => window.removeEventListener("scroll",handleScroll)
},[])

return(

<nav className={`navbar ${scroll ? "scrolled" : ""}`}>

<div className="logo">
<img src="/images/logo/logo.png" alt="logo"/>
<span>हिंदी साहित्य</span>
</div>

<div className="nav-links">

<Link to="/">Home</Link>
<Link to="/cart">Cart</Link>
<Link to="/admin">Admin</Link>

</div>

</nav>

)

}

export default Navbar