import React from "react";

function SearchItemButton(props) {
  return (
    <div>
      <button className="search-item-button btn btn-outline-primary">
        {props.item}
      </button>
    </div>
  );
}

export default SearchItemButton;
