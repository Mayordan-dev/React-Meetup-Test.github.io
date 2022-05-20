import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All MeetUps </Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New MeetUps </Link>
          </li>
          <li>
            <Link to="/favourites">My Favourites </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
