import React from "react";

function SearchItemButton(props) {

  return (
    <button
      className="search-item-button add-button btn btn-recipe-primary m-2"
      // style={{ backgroundColor: "#3fc5a7", borderColor: "#3fc5a7", btnCloseWidth: 500}}
    >
      {props.item}
    </button>
  );
}

export default SearchItemButton;
