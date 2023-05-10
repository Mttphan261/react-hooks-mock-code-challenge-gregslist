import React from "react";
import Search from "./Search";

function Header({handleSearch, search}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearch={handleSearch} search={search} />
    </header>
  );
}

export default Header;
