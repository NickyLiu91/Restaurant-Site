import React from 'react';

const Food = (props) => {
  return(
    <div id="food">
      <img src={props.selectedItem.image} />
      {console.log(props.selectedItem)}
      <div>Name: {props.selectedItem.name}</div>
      <div>Description: {props.selectedItem.description}</div>
      <div>Price: ${props.selectedItem.price}.00</div>
    </div>
  )
}

export default Food;
