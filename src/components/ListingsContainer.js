import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingsArray, deleteListing }) {

  const mappedListings = [...listingsArray].map((el) => {
    return <ListingCard key={el.id} listing={el} deleteListing={deleteListing} />
  })

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {mappedListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
