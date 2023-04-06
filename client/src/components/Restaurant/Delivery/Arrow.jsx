import React from "react";
import {BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill} from "react-icons/bs"
export function NextArrow(props) {
  return (
    <>
    <BsFillArrowRightCircleFill
      className={props.className}
      style={{ ...props.style,color:"gray" }}
      onClick={props.onClick}
    />
  </>
);
}
export function PrevArrow(props) {
return (
  <>
    <BsFillArrowLeftCircleFill
      className={props.className}
      style={{ ...props.style, color:"gray" }}
      onClick={props.onClick}
    />
  </>
  );
}
