import { Link } from "react-router-dom";
import "./index.css";

export default function Nav() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin Mode</Link>
          </li>
          <li>
            <Link to="/viewer">Viewer Mode</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
