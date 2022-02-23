import React from "react";
import classNames from 'classnames';

const ToggleBtn = ({ addStyles, clickHandler, children }) => {
  return (
    <button
      className={classNames("w-1/2 p-3 rounded-lg", addStyles)}
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}

export default ToggleBtn;