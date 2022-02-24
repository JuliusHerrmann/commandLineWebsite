import "./Start.css";
import CommandLineManager from "../commandline/CommandLineManager";

function Start() {
  return(
    <div id="animationOverlay">
      <CommandLineManager page={"start"}/>
    </div>
  );
}

export default Start;
