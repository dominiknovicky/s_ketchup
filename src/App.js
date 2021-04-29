import React, { useState } from "react";
import "./App.css";
import SidebarNav from "./components/sidebarNav/SidebarNav";
import TopNav from "./components/topNav/TopNav";
import AppContent from "./components/appContent/AppContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const App = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <TopNav showMenuClick={handleDrawerOpen} menuVisibility={open} />
      <SidebarNav hideMenuClick={handleDrawerClose} menuVisibility={open} />
      <AppContent />
    </div>
  );
};

export default App;
