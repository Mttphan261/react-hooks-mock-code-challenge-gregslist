import React, { useState } from "react";
import Search from "./Search";

function Header({ handleSearch, search, addListing }) {
  const initialForm = {
    description: "",
    image: "",
    location: "",
  };

  const [form, setForm] = useState(initialForm);

  function handlePOST(e) {
    e.preventDefault();
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: form.description,
        image: form.image,
        location: form.location,
      }),
    })
      .then((r) => r.json())
      .then((data) => addListing(data));
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearch={handleSearch} search={search} />
      <h3 className="logo">Add New Listing</h3>
      <form onSubmit={handlePOST}>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="description"
          placeholder="description"
        ></input>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="image"
          placeholder="image"
        ></input>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="location"
          placeholder="location"
        ></input>
        <button>Submit Listing</button>
      </form>
    </header>
  );
}

export default Header;
