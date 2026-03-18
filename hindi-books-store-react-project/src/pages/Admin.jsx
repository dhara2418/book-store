import { useState } from "react"

function Admin(){

const [book,setBook] = useState({
  title:"",
  author:"",
  price:"",
  image:""
})

const handleChange = (e) => {
  setBook({...book,[e.target.name]:e.target.value})
}

const handleImage = (e) => {
  const file = e.target.files[0]
  if(file){
    setBook({...book,image:URL.createObjectURL(file)})
  }
}

/* ✅ UPDATED HANDLE SUBMIT */
const handleSubmit = (e) => {
  e.preventDefault()

  const oldBooks = JSON.parse(localStorage.getItem("books")) || []

  const newBook = {
    id: Date.now(),
    ...book
  }

  const updatedBooks = [...oldBooks, newBook]

  localStorage.setItem("books", JSON.stringify(updatedBooks))

  alert("Book Added ✅")

  // reset form
  setBook({
    title:"",
    author:"",
    price:"",
    image:""
  })
}

return(

<div className="admin-container">

<h2>Add New Book 📚</h2>

<form onSubmit={handleSubmit} className="book-form">

<input 
type="text" 
name="title"
placeholder="Book Title"
value={book.title}
onChange={handleChange}
/>

<input 
type="text" 
name="author"
placeholder="Author Name"
value={book.author}
onChange={handleChange}
/>

<input 
type="number" 
name="price"
placeholder="Price ₹"
value={book.price}
onChange={handleChange}
/>

<input 
type="file" 
accept="image/*"
onChange={handleImage}
/>

{/* Preview */}
{book.image && <img src={book.image} alt="preview" className="preview"/>}

<button type="submit">Add Book</button>

</form>

</div>

)

}

export default Admin