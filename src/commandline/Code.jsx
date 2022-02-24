import {useEffect, useState} from "react";

function Code(props) {
  const [textId, setTextId] = useState(-props.node.position.start.offset);

  useEffect(() =>  {
    if(textId <= props.code.children[0].length) {
      setTimeout(() => {
        setTextId(textId + props.speed);
      }, 1)
    }
  });

  return(
    <code>{props.code.children[0].substring(0, textId)}</code>
  );
}

export default Code;
