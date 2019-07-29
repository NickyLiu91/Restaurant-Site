import React from 'react';

const Section = (props) => {
  if (props.item.className == null) {
    return (
      <div id="section" onClick={event => {props.selectSection(props.item.name)}}>
        {props.item.name}
      </div>
    )
  } else {
    return (
      <div id="sub-section" onClick={event => {props.selectItem(props.item)}}>
        {props.item.name}
      </div>
    )
  }
}

export default Section;
