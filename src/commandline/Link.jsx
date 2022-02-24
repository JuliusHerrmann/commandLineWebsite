import {useEffect, useState} from "react";

function Link(props) {
  const [textId, setTextId] = useState(-props.node.position.start.offset);

  useEffect(() =>  {
    if(textId <= props.link.children[0].length) {
      setTimeout(() => {
        setTextId(textId + props.speed);
      }, 1)
    }
  });

  return(
    <a href={props.link.href}>{props.link.children[0].substring(0, textId)}</a>
  );
}

export default Link;
