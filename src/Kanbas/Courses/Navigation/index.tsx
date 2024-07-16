import "./index.css";
import { NavLink } from 'react-router-dom';

export default function CoursesNavigation() {
    return (
     
      <nav>
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <NavLink className="nav-link" to="Home">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="Modules">Modules</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="Assignments">Assignments</NavLink>
                </li>
            </ul>
        </nav>

  );}
  
  