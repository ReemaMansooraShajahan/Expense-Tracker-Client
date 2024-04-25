import React from "react";

export default function Title(props) {
const {title, casing} = props;
  return (
   
    <p>
        {casing === 'lower' && title.toLowerCase()}
        {casing === 'upper' && title.toUpperCase()}
    </p>
  )
}