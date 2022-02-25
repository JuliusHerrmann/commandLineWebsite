import "./CommandLineManager.css";
import {useEffect, useState} from 'react';
import CommandLineEntry from './CommandLineEntry.jsx';
import Prompt from './Prompt.jsx';

function CommandLineManager(props) {

  // set the path to the correct md file via props
  const path = require(`./content/${ props.page }.md`);
  const [text, updateText] = useState("");

  fetch(path).then(r => {
    return r.text();
  }).then(text =>  {
    updateText(text);
  });

  const getDelay = () => {
    return (text.length / Math.round(1 + (Number)(text.length / 1000)));
  }

  return(
    <div id="commandLineManager">
      <CommandLineEntry text={text}/>
      <Prompt delay={getDelay()}/>
    </div>
    );
}

export default CommandLineManager;
