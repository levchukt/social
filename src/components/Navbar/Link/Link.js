import { NavLink } from "react-router-dom";
import s from './Link.module.css'

const Link = (props) => {
    return (
        <li>
            <NavLink to={`/${props.section}`}
            className={({ isActive }) =>
              isActive ? s.active : undefined
            }
            >{props.section}</NavLink>
          </li>
    )
}

export default Link;