import React from "react";
import image from "../assets/image.png";

function ClickImage() {
  //   function handleClick() {
  //     alert("Ви натиснули на зображення!");
  //   }
  return (
    <>
      <h2>Image</h2>
      <img
        src={image}
        alt="Image"
        onClick={() => alert("Ви натиснули на зображення!")}
        style={{ cursor: "pointer" }}
      />
    </>
  );
}

export default ClickImage;
