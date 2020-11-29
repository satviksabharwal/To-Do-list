import React from "react";
import "../index.css";

const Action = (props) => (
  <div>
    <button
      onClick={props.handlePick}
      disabled={!props.hasOptions}
      className="big-button"
    >
      What Should I do?
    </button>
  </div>
);
export default Action;
