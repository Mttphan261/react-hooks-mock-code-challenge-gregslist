import React, {useState} from "react";

function ListingCard({listing, deleteListing}) {

  const [fav, setFav] = useState(false)

  function handleFav() {
    setFav((prev) => !prev)
  }

  function handleDelete(e) {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE',})
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
        {fav === true ? (
          <button onClick={handleFav} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFav} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
