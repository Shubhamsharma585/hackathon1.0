import React, { useState } from "react";
import Styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { useDispatch, useSelector } from "react-redux";

function Nav() {
  const user = useSelector((state) => state.regi.username);

  return (
    <div className={Styles.nav}>
      <p className={Styles.home}>Home</p>

      <p className={Styles.about}>About</p>

      <p className={Styles.user}>{user ? user : "User"}</p>
    </div>
  );
}

export default Nav;
