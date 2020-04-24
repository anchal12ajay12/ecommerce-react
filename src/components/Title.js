import React from "react";

const Title = ({ name, title }) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center">
        <h1 className="text-capitalize font-weight-bold" style={{fontSize:30,marginTop:-25,}}>
          {name} <strong className="text-black">{title}</strong>
        </h1>
      </div>
    </div>
  );
};

export default Title;
