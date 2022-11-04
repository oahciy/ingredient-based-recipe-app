import React from "react";

function SearchItemButton(props) {
  return (
    <div>
      <button 
        className="search-item-button add-button mx-2 btn btn-primary"
        style={{backgroundColor: '#25aec9', borderColor: '#25aec9'}}
      >
        {props.item}
      </button>
    </div>
  );
}

export default SearchItemButton;
