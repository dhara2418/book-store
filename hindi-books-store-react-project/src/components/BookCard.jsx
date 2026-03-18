
import {Link} from "react-router-dom"

function BookCard({book}){

return(

<div className="book-card">

<img src={book.image} alt={book.title}/>

<h3>{book.title}</h3>

<p>{book.author}</p>

<p>₹{book.price}</p>

<Link to={`/book/${book.id}`}>
<button>View</button>
</Link>

</div>

)

}

export default BookCard
