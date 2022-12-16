import React from "react";

import "../css/Popup.css";

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  );
}

export default Popup;
