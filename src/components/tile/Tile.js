import React from "react";

export const Tile = (props) => {
  const values = Object.values(props.data)
  return (
    <div className="tile-container">
      {
        values.map((value, index) => {
          return(
            index === 0 ? (<p className="tile-title">{value}</p>) : (<p className="tile">{value}</p>)
          )
        })
      }
    </div>
  );
};
