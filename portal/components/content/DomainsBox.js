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

import { forwardRef, useEffect, useState } from "react";
function DomainsBox(props) {
  const [open, setOpen] = useState(false);
  const [localList, setLocalList] = useState(props.data.map(object => ({ ...object })));
  const handleClickOpen = () => {
    setOpen(true);
  };
  

  const handleClose = () => {
    
    setLocalList(props.data.map(object => ({ ...object })))
    setOpen(false);
  };
  const handleChange = (id) => {
    const targetIndex = localList.findIndex(item => item.id === id);
    const newList = [...localList];
    newList[targetIndex].isChecked = !newList[targetIndex].isChecked;
    setLocalList(newList);
  };
  const saveChanges = () => {
    props.setData([localList.map(object => ({ ...object }))]);
    setOpen(false);
  }

  const drawList = localList.map((domain) => {
    return (
      <div className="checkbox-group" key={domain.id} >
        <FormControlLabel
          label={domain.name}
          control={
            <Checkbox
              checked={domain.isChecked}
              onChange={()=>{handleChange(domain.id)}}
              color="warning"
            />
          }
        />
      </div>
    );
  });
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
            <Button autoFocus color="inherit" onClick={saveChanges}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div className="d-flex row-3 p-side-15 mt-20">
          {drawList}
        </div>
      </Dialog>
    </div>
  );
}

export default DomainsBox;
