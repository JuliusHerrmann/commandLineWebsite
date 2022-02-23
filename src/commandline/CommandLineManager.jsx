import {useState} from 'react';
import CommandLineEntry from './CommandLineEntry.jsx';
import Prompt from './Prompt.jsx';

function CommandLineManager() {
  const [input, setInput] = useState("");

  const updateInput = (e) => {
    setInput(e.target.value);
  }

  const submitInput = (e) => {
    //check if enter was pressed
    if (e.keyCode === 13) {
      console.log(input);
    }
  }

  return(
    <div id="commandLineManager">
      <CommandLineEntry/>
      <Prompt input={input} updateInput={updateInput} submitInput={submitInput}/>
    </div>
  );
}

export default CommandLineManager;
