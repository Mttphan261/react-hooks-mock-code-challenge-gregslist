import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Search from './Search'

function App() {

  //data array state
  const [listingsArray,SetListingsArray] = useState([])

  //GET
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((r) => r.json())
    .then((data) => SetListingsArray(data))
  }, [])

  
  //CB for DELETE
  function deleteListing(listing) {
    SetListingsArray(
      [...listingsArray].filter((el) => {
        if(el.id === listing.id) {
          return false
        } else {
          return true
        }
      })
    )
  }

  //SEARCH//

  const [search, setSearch] = useState('')

  const searchedListings = [...listingsArray].filter(el => {
    return el.description.toLowerCase().includes(search.toLowerCase())
  })

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <div className="app">
      <Header handleSearch={handleSearch} search={search}/>
      <ListingsContainer listingsArray={searchedListings} deleteListing={deleteListing}/>
    </div>
  );
}

export default App;
