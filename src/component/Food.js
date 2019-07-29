import React from 'react';

const Food = (props) => {
  return(
    <div id="food">
      <img src={props.selectedItem.image} />
      <div>{props.selectedItem.name}</div>
      <div>{props.selectedItem.description}</div>
      <div>${props.selectedItem.price}.00</div>
    </div>
  )
}

export default Food;
