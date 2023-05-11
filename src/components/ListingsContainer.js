import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listingsArray, deleteListing }) {
  const [alphaSort, setAlphaSort] = useState(false);

  const sortedListings = [...listingsArray].sort((a, b) => {
    if (alphaSort === true) {
      return a.location.localeCompare(b.location);
    }
  });

  //set state for alpha set
  //make new const for array with sort conditional
  //make button to change state for alpha sorting, possibly anon func

  const mappedListings = [...sortedListings].map((el) => {
    return (
      <ListingCard key={el.id} listing={el} deleteListing={deleteListing} />
    );
  });

  return (
    <main>
      <button
        onClick={() => {
          setAlphaSort((prev) => !prev);
        }}
      >
        {alphaSort ? 'Display Normal' : 'Display Alphabetically By Location'}
      </button>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {mappedListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
