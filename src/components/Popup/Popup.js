import React from "react";
import "./Popup.css";
import { MdClose } from "react-icons/md";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <MdClose className="back" onClick={() => props.setTrigger(false)}>
          Back
        </MdClose>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
