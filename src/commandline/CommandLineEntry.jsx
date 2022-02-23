import Markdown from "markdown-to-jsx";
import {useEffect, useState} from "react";

import test from "./content/test.png";

function CommandLineEntry(props) {
  // set the path to the correct md file via props
  const path = require(`./content/${ props.content }.md`);
  const [text, updateText] = useState("");

  // fetching the content of path
  fetch(path).then(r => {
    return r.text();
  }).then(text =>  {
      updateText(text);
    })


  const [displayIndex, setDisplayIndex] = useState(0);

  var intervalId;
  useEffect(() =>  {
    intervalId = setInterval(() => {
      if (displayIndex < text.length) {
        setDisplayIndex(displayIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1);
    return function cleanup() {
      clearInterval(intervalId);
    }
  });

  const getTextToDisplay = () => {
    return text.substring(0, displayIndex);
  }

  return(
    <Markdown>{getTextToDisplay()}</Markdown>
  );
}

export default CommandLineEntry;
