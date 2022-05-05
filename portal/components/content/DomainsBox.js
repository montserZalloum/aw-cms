import Fab from "@mui/material/Fab";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

import { forwardRef, useState } from "react";
function DomainsBox(props) {
  const [checked, setChecked] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange2 = (event) => {
    setChecked(event.target.checked);
    console.log(checked)
  };
  return (
    <div className="domains-box">
      <Fab onClick={handleClickOpen} className="bg-white" variant="extended">
        <EmojiFlagsIcon color="primary" sx={{ mr: 1 }} />
        Country
      </Fab>

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
              Select Country
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div className="d-flex row-3 p-side-15 mt-20">
          <div className="checkbox-group">
            <FormControlLabel
              label="Child 1"
              control={<Checkbox checked={checked} onChange={handleChange2} color="warning" />}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default DomainsBox;
