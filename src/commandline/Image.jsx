import "./Image.css";
import {useState, useEffect} from "react";

function Image(props) {
  const [textId, setTextId] = useState(-props.node.position.start.offset);

  useEffect(() =>  {
    if(textId < 0) {
      setTimeout(() => {
        setTextId(textId + props.speed);
      }, 1)
    }
  });

  return (
    textId >= 0 ? <img src={props.image.src} alt={props.image.alt}/> : <div></div>
  );
}

export default Image;
