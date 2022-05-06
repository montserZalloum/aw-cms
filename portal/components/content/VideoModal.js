import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import React, { useState } from "react";

function VideoModal(props) {
  const [localVideoLink,setLocalVideoLink] = useState(props.data);
  function handleChange(e) {
    setLocalVideoLink(e.target.value);
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    if (!props.open) {
      setLocalVideoLink(props.data);
    }
    props.setShow(open);
  };

  function saveChanges(){
    props.setData(localVideoLink)
    props.setShow(false);
  }

  return (
    <div className="video-box">
      <div>
        <React.Fragment>
          <Drawer
            anchor={"bottom"}
            open={props.show}
            onClose={toggleDrawer(false)}
            className="author-drawer"
          >
            <AppBar color="secondary" sx={{ position: "relative" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={toggleDrawer(false)}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  Add Video From Youtube
                </Typography>
                <Button autoFocus color="inherit" onClick={saveChanges}>
                  save
                </Button>
              </Toolbar>
            </AppBar>
            <div className="pt-15 p-side-15 pb-15">
              <div className="form-group w-100 mb-15">
                <TextField
                  required
                  id="outlined-required"
                  label="Link from Youtube"
                  className="w-100"
                  name="name"
                  onChange={handleChange}
                  value={localVideoLink}
                />
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
    </div>
  );
}

export default VideoModal;
