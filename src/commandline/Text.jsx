import {useEffect, useState} from "react";
import "./Text.css";

function Text(props) {
  const [textId, setTextId] = useState(-props.offset);
  const [content, setContent] = useState();

  useEffect(() => {
    if(textId <= props.text.length) {
      setTimeout(() => {
        setTextId(textId + props.speed);
      }, 1)
    }
  });

  if(props.color != undefined) {
    //comment below for hex colors
    //<font color={`#${props.color.replace("color", "")}`}>{props.text.substring(0, textId)}</font>

    //use css variables for inline color
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);
    return (
      <div className="typingText">
        <font color={rs.getPropertyValue(`--${props.color.replace("color", "")}`)}>{props.text.substring(0, textId)}</font>
      </div>
    );
  } else {
    return (
      <div className="typingText">{props.text.substring(0, textId)}</div>
      );
  }
}

export default Text;
