import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import Text from "./Text";

function Paragraph(props) {
  const generateDisplay = () => {
    var buffer = [];
    var currentColor = undefined;
    for (var i = 0; i < props.children.length; i++) {
      //filter out newlines... they are managed by <br/>
      if(props.children[i] === "\n") continue;

      if(props.node.children[i].type === "text") {
        var offset = props.node.children[i].position.start.offset;
        buffer.push(<Text color={currentColor} key={i} text={props.children[i]} offset={offset} speed={props.speed}/>);
    } else if(props.node.children[i].type === "raw") {
      var color = props.children[i].replace("<", "")
      color = color.replace(">", "");
      if(color === "clear") {
        currentColor = undefined;
      } else {
        currentColor = color;
      }
    } else {
        buffer.push(props.children[i]);
      }
    }
    return buffer;
  }

  return(
    <div>
      {generateDisplay()}
    </div>
  );
}

export default Paragraph; 
