import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listingsArray, setListingsArray] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((r) => r.json())
    .then((data) => setListingsArray(data))
  }, [])

  //CB for DELETE

  function deleteListing(listing) {
    setListingsArray([...listingsArray].filter((el) => {
      return el.id === listing ? false : true
    }))
  }

  //SEARCH

  const [search, setSearch] = useState("")

  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  //array for searchedItems

  const displayedListings = [...listingsArray].filter((el) => {
    return el.description.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div className="app">
      <Header handleSearch={handleSearch} />
      <ListingsContainer listingsArray={displayedListings} deleteListing={deleteListing} />
    </div>
  );
}

export default App;
