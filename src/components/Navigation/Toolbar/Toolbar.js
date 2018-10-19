import React from "react";
import Logo from "../../Logo/Logo";
import classes from "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
const toolbar = () => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <Logo />
    <nav className={classes.Nav}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
