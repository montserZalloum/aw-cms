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
function PublishModal(props) {
  const [checked, setChecked] = useState(true);
  const handleChange2 = (event) => {
    setChecked(event.target.checked);
    console.log(checked)
  };
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
                <Button autoFocus color="inherit" onClick={toggleDrawer(false)}>
                  save
                </Button>
              </Toolbar>
            </AppBar>
            <div className="pt-15 pb-15 p-side-15">
              <div className="checkbox-group">
                <FormControlLabel
                  label="Child 1"
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange2}
                      color="warning"
                    />
                  }
                />
              </div>
              <div className="checkbox-group">
                <FormControlLabel
                  label="Child 1"
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange2}
                      color="warning"
                    />
                  }
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
