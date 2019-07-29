import React from 'react';

const Section = (props) => {
  return (
    <div id="section" onClick={event => {props.selectSection(props.item)}}>
      {props.item}
      {console.log(props.item)}
    </div>
  )
}

export default Section;
