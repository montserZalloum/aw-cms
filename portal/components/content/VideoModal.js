import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import React from "react";
function VideoModal(props) {

  function handleChange(e) {
    console.log(e.target.value);
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    props.setShow(open);
  };

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
                <Button autoFocus color="inherit" onClick={toggleDrawer(false)}>
                  save
                </Button>
              </Toolbar>
            </AppBar>
            <div className="pt-15 p-side-15 pb-15">
              <div className="form-group w-100 mb-15">
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  className="w-100"
                  name="name"
                  onChange={handleChange}
                  // value={formData.name}
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
