import React from "react";

function SearchItemButton(props) {
  return (
    <div>
      <button
        className="search-item-button add-button mx-2 btn btn-primary"
        style={{ backgroundColor: "#3fc5a7", borderColor: "#3fc5a7" }}
      >
        {props.item}
      </button>
    </div>
  );
}

export default SearchItemButton;
