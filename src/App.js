import React from "react";
import "./App.css";
import SidebarNav from "./components/sidebarNav/SidebarNav";
import TopNav from "./components/topNav/TopNav";
import Inbox from "./components/inbox/Inbox";
import { makeStyles } from "@material-ui/core/styles";
import { Router } from "@reach/router";
import Mail from "./components/mail/Mail";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopNav />
      <SidebarNav />
      <Router>
        <Inbox path="/" />
        <Mail path="mail" />
      </Router>
    </div>
  );
};

export default App;
