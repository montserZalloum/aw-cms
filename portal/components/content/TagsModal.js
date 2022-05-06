import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import React from "react";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

import { forwardRef, useState } from "react";
import { server } from "../../config";
function TagsModal(props) {
  const [authorList, setAuthorList] = React.useState([]);
  const [selectedTags, setSelectedTags] = React.useState(props.data);
  const textInput = React.useRef(null);
  function textFieldOnChange(e) {
    const needToAdd = e.target.value.endsWith(",") || e.target.value.endsWith("،");
    //do something here
    if (needToAdd) {
      selectTagFromList(e.target.value.slice(0,-1),-1)
      textInput.current.value = "";
      return false
    }
    if (e.target.value.length > 0) {
      let fetchedData = [];
      async function fetchData() {
        const resp = await fetch(
          `${server}/taxonomy/6275228b0e894242f002047f/term/search`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: e.target.value }),
          }
        );
        fetchedData = await resp.json();
        setAuthorList([...fetchedData]);
        open = true;
      }
      fetchData();
    }
  }

  const selectTagFromList = (tag,index) => {
    setSelectedTags(prevArray => [...prevArray, tag]);
    if (index != -1)
      setAuthorList(authorList.filter((item,idx)=> idx != index))
  };

  const removeTag = (index) => {
    setSelectedTags(selectedTags.filter((item,idx)=> idx != index));
  };

  const saveChanges = () => {
    props.setData([selectedTags.map(object => ([ ...object ]))]);
    props.setShow(false)
  }
  const closeWithoutSave = () => {
    setSelectedTags(props.data);
    props.setShow(false)
  }

  return (
    <Dialog
      fullScreen
      open={props.show}
      onClose={() => props.setShow(true)}
      TransitionComponent={Transition}
    >
      <AppBar color="secondary" sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => closeWithoutSave()}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Add Tags
          </Typography>
          <Button
            autoFocus
            color="inherit"
            onClick={saveChanges}
          >
            save
          </Button>
        </Toolbar>
      </AppBar>
      <div className="w-100 m-side-15 p-side-12 mt-20 tags-group autocomplete-group">
        <TextField
          label="Add tags"
          className="w-100"
          name="tags-input"
          onChange={textFieldOnChange}
          // value={textField}
          inputRef={textInput}
          inputProps={{
            autoComplete: 'off'
          }}
        />

        {authorList.length > 0 && (
          <>
            <div className="float-autocomplete">
              {authorList.map((author, index) => (
                <MenuItem
                  key={index}
                  onClick={(e) => selectTagFromList(author.name,index)}
                >
                  {author.name}
                </MenuItem>
              ))}
            </div>
          </>
        )}
      </div>
      { selectedTags.length > 0 && 
          <div className="selected-tags-list gap-10 d-flex flex-wrap p-side-15">
          {selectedTags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              variant="outlined"
              color="info"
              onDelete={() => removeTag(index)}
            />
          ))}
        </div>
        }
    </Dialog>
  );
}

export default TagsModal;
