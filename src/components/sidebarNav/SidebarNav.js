import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import { Link } from "@reach/router";

const drawerWidth = 240;

const navLinks = [
  { title: "Inbox", to: "/", iconName: "inbox" },
  { title: "Send email", to: "/mail", iconName: "email" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkTo: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const SidebarNav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left">
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {navLinks.map(({ title, to, iconName }) => (
              <Link key={title} to={to} className={classes.linkTo}>
                <ListItem button>
                  <ListItemIcon>
                    <Icon>{iconName}</Icon>
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
};

export default SidebarNav;
