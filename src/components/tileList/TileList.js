import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = (props) => {
  const data = props.data
  return (
      <ul>
        {data.map((object, index) => {
          return (<li key={index}><Tile data={object} /></li>)
        })}
      </ul>
  );
};
