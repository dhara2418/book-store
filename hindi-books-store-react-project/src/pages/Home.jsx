import { useState,useEffect } from "react"
import BookCard from "../components/BookCard"
import HeroSlider from "../components/HeroSlider"
import FilterBar from "../components/FilterBar"
import booksData from "../data/books"

function Home() {

    const [books, setBooks] = useState([])
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(1000)


    useEffect(() => {
        const localBooks = JSON.parse(localStorage.getItem("books")) || []

        // combine default + added books
        setBooks([...booksData, ...localBooks])
    }, [])

    // All filters together

    let filtered = books
        .filter(book =>
            book.title.toLowerCase().includes(search.toLowerCase())
        )
        .filter(book =>
            !category || book.category === category
        )
        .filter(book =>
            book.price <= price
        )

    return (

        <div>

            <HeroSlider />

            <FilterBar
                setSearch={setSearch}
                setCategory={setCategory}
                setPrice={setPrice}
            />

            <div className="books-grid">
                {
                    filtered.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))
                }
            </div>

        </div>

    )

}

export default Home