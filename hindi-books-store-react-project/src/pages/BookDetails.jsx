
import { useParams } from "react-router-dom"
import books from "../data/books"

function BookDetails() {

    const { id } = useParams()

    const book = books.find(b => b.id === parseInt(id))

    return (
        <div className="book-detail">

            <img src={book.image} alt={book.title} />

            <div className="book-info">
                <h2>{book.title}</h2>
                <h4>{book.author}</h4>
                <p>{book.description}</p>
                <span>₹{book.price}</span>
                <button>Add To Cart</button>
            </div>

        </div>

    )

}

export default BookDetails
