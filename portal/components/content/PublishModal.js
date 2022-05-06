import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
function PublishModal(props) {
  const [isPublish, setIsPublish] = useState(props.data.isPublish);
  const [isSticky, setIsSticky] = useState(props.data.isSticky);
  const [createdAt,setCreatedAt] = useState(props.data.createdAt);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    if (!open) {
      setIsPublish(props.data.isPublish);
      setIsSticky(props.data.isSticky);
      setCreatedAt(props.data.createdAt);
    }
      props.setShow(open);
  };

  function saveChanges () {
    props.setIsPublish(isPublish);
    props.setIsSticky(isSticky);
    props.setCreatedAt(createdAt);
    props.setShow(false);
  }

  return (
    <div className="publish-modal-box">
      <div>
        <React.Fragment>
          <Drawer
            anchor={"bottom"}
            open={props.show}
            onClose={toggleDrawer(false)}
            className="publish-drawer"
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
                  Publishing Options
                </Typography>
                <Button autoFocus color="inherit" onClick={saveChanges}>
                  save
                </Button>
              </Toolbar>
            </AppBar>
            <div className="pt-15 pb-15 p-side-15">
              <div className="checkbox-group">
                <FormControlLabel
                  label="Publish"
                  control={
                    <Checkbox
                      checked={isPublish}
                      onChange={() => {setIsPublish(!isPublish)}}
                      color="warning"
                    />
                  }
                />
              </div>
              <div className="checkbox-group">
                <FormControlLabel
                  label="Sticky"
                  control={
                    <Checkbox
                      checked={isSticky}
                      onChange={() => {setIsSticky(!isSticky)}}
                      color="warning"
                    />
                  }
                />
              </div>
              <div className="form-group w-100 mt-15">
                <TextField
                  label="Created Date"
                  className="w-100"
                  name="name"
                  onChange={(e)=>{setCreatedAt(e.target.value)}}
                  value={createdAt}
                />
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
    </div>
  );
}

export default PublishModal;
