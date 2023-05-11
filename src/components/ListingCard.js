import React, {useState} from "react";

function ListingCard({ listing, deleteListing }) {

  const [fav, setFav] = useState(false)

  function toggleFav() {
    setFav((prev) => !prev)
  }

  function handleDELETE() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE',
    })
    .then((r) => r.json())
    .then(() => deleteListing(listing.id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {fav ? (
          <button onClick={toggleFav} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleFav} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDELETE} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
