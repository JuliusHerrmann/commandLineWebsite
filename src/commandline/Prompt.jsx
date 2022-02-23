import './Prompt.css';

function Prompt(props) {
  return(
    <div className="Prompt">
      <p id="ps1">visitor@julius $ </p>
      <input id="promptInput" type="text" autoFocus={true} maxLength={20}
      value={props.input} onChange={props.updateInput} onKeyDown={props.submitInput}/>
    </div>
  );
}

export default Prompt;
