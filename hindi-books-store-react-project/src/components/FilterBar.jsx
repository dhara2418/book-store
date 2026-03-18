import { useState } from "react"

function FilterBar({ setSearch, setCategory, setPrice }) {

const [priceValue, setPriceValue] = useState(500)

return (

<div className="filter">

<input
type="text"
placeholder="Search books..."
onChange={(e) => setSearch(e.target.value)}
/>

<select onChange={(e) => setCategory(e.target.value)}>
<option value="">All</option>
<option value="Bhakti">Bhakti</option>
<option value="Novel">Novel</option>
<option value="Poetry">Poetry</option>
</select>

<input
type="range"
min="100"
max="1000"
value={priceValue}
onChange={(e) => {
const value = Number(e.target.value)
setPriceValue(value)
setPrice(value)
}}
/>

<p>Max Price ₹{priceValue}</p>

</div>

)

}

export default FilterBar