import React from "react";

const Person = (props) => {
  return (
    <div>
      <h3>Name:{props.name}</h3>
      <h4>Age: {props.age}</h4>
      <h5>Address:{props.address}</h5>
    </div>
  );
};

export default Person;
