import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Prompt.css';

function Prompt(props) {
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  var focusIntervalId;
  //periodically focus the input
  useEffect(() => {
    const input = document.querySelector("input");
    focusIntervalId = setInterval(() => {
      input.focus();
    }, 100);
    return () => {
      clearInterval(focusIntervalId);
    }
  }, []);

  var visibleTimeoutId;

  useEffect(() => {
    if(props.delay != 0) {
      visibleTimeoutId = setTimeout(() =>  {
        setVisible(true);
      }, props.delay * 5);
    }

    return () => {
      clearTimeout(visibleTimeoutId);
    }
  }, [props.delay]);

  const updateInput = (e) => {
    var value = e.target.value.trim().toLowerCase();
    setInput(value);
    var element = document.getElementById("promptInput");
    element.setAttribute("size", value.length + 1);
  }

  useEffect(() => {
    var element = document.getElementById("promptInput");
    element.setAttribute("size", 1);
  }, []);


  const submitInput = (e) => {
    //check if enter was pressed
    if (e.keyCode === 13) {
      if(input.length > 0) {
        if(input.toLowerCase() === "reload") {
          window.location.reload();
        }
        navigate(`/${ input.trim() }`);
      }
      setInput("");
      document.getElementById("promptInput").setAttribute("size", 1);
    }
  }

  if(visible) {
    return(
      <div className="Prompt">
        <p id="ps1">visitor@julius {'>'} </p>
        <input id="promptInput" type="text" autoFocus={true} maxLength={20}
        value={input} onChange={updateInput} onKeyDown={submitInput}/>
        <div id="inputCursor">_</div>
      </div>
      );
  }

  return(
    <div className="Prompt">
      <p id="ps1" style={{display: "none"}}>visitor@julius $ </p>
      <input id="promptInput" style={{display: "none"}} type="text" autoFocus={true} maxLength={20}
      value={input} onChange={updateInput} onKeyDown={submitInput}/>
    </div>
  );
}

export default Prompt;
