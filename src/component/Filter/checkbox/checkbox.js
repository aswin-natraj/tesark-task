import React from "react";

function Checkbox(props) {
  const { check1, check2, check3, check4, check5 } = props;
  return (
    <div>
      <form className="cui-type">
        <p className="cui-type-item">
          {" "}
          <input type="checkbox" /> {check1}
        </p>
        <p className="cui-type-item">
          {" "}
          <input type="checkbox" /> {check2}
        </p>
        <p className="cui-type-item">
          {" "}
          <input type="checkbox" /> {check3}
        </p>
        <p className="cui-type-item">
          {" "}
          <input type="checkbox" />
          {check4}
        </p>
        <p className="cui-type-item">
          {" "}
          <input type="checkbox" /> {check5}
        </p>
      </form>
    </div>
  );
}

export default Checkbox;
