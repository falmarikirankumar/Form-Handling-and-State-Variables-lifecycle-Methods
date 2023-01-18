import React from "react";

const DataBox = (props) => {
  console.log(props);
  return (
    <div className="div2">
      <span keys={props.keys}>
        Name : {props.Name} <br />
        Department : {props.Department} <br />
        Rating :{props.Rating}
        <br />
      </span>
    </div>
  );
};

export default DataBox;
