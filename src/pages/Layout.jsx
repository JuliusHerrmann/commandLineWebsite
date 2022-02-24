import "./Layout.css";
import {Outlet} from "react-router";

function Layout() {
  return (
    <div>
      <div className="scanline"></div>
      <div id="screenBezel">
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout;
