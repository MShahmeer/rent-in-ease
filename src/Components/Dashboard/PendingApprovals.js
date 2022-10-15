import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PendingApprovals() {
  const [open, setOpen] = React.useState(false);
  const [ownerName, setOwnerName] = React.useState("");
  const [propertyType, setPropertyType] = React.useState("");

  const handleClickOpen = (name, type) => {
    setOpen(true);
    setOwnerName(name);
    setPropertyType(type);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {ownerName}
            </Typography>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {propertyType}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Typography align="center" sx={{ fontWeight: "bold" }}>
          Pending Approvals
        </Typography>
        <ListItem
          onClick={() => {
            handleClickOpen("By Shahmeer", "House");
          }}
          sx={{ cursor: "pointer" }}
        >
          <ListItemAvatar>
            <Avatar src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
          </ListItemAvatar>
          <ListItemText secondary="By Shahmeer" primary="House" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
          </ListItemAvatar>
          <ListItemText secondary="By Ali" primary="Flat" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
          </ListItemAvatar>
          <ListItemText secondary="By Bashara" primary="Portion" />
        </ListItem>
        <Typography>See All</Typography>
      </List>
    </>
  );
}
