import React from "react";

function ItemDescription({ title, discription }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{discription}</h2>
    </div>
  );
}

export default ItemDescription;
