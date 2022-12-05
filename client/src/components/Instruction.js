import React from "react";
import "../css/Popup.css";

function Instruction(props) {
  return props.trigger ? (
    <div className="popup text-dark">
      <div className="popup-inner">
        <button
          className="btn btn-danger btn-sm close-btn"
          onClick={() => props.setTrigger(false)}
        >
          x
        </button>
        <h1 className="mb-4">Instruction</h1>
        <p className="text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida
          nisl ipsum, at ornare sem auctor id. Proin tristique nisl urna, ac
          maximus justo efficitur ac. Maecenas in nisi id enim rutrum
          pellentesque iaculis quis augue. Suspendisse maximus maximus vehicula.
          Donec tincidunt lacinia suscipit. In ultricies sem et magna volutpat,
          eu porta lectus dictum. Etiam mattis et lacus eu molestie. Fusce sit
          amet tellus lacinia enim dapibus ullamcorper. Nam pellentesque velit
          et lacus hendrerit commodo. Nam eu malesuada neque. Nam ullamcorper
          magna sit amet hendrerit tincidunt. Vestibulum sollicitudin interdum
          aliquam.
        </p>
        <p className="text-start">
          Donec faucibus imperdiet augue at cursus. Sed semper enim vel orci
          placerat, vitae pharetra nibh ullamcorper. Duis volutpat vitae lorem
          ac posuere. Nam placerat turpis eu ex pulvinar volutpat. Aliquam
          rutrum luctus velit in malesuada. Etiam nunc nulla, condimentum quis
          dignissim eget, aliquet a libero. Phasellus sed nunc eu ligula aliquet
          volutpat a ut urna. Morbi auctor pharetra est at volutpat.
        </p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Instruction;
