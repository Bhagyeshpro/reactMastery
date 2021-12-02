import React from "react";
import ItemDescription from "./ItemDescription";

export default function AmazonItem({ title, discription, price }) {
  return (
    <div>
      <ItemDescription title={title} discription={discription} />
      <h3>${price}</h3>
    </div>
  );
}
