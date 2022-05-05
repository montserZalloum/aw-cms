import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import React from "react";
import Chip from '@mui/material/Chip';
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

import { forwardRef, useState } from "react";
function TagsModal(props) {
  const [authorModal, setAuthorModal] = React.useState(false);
  const [openAuthorsList, setOpenAuthorsList] = React.useState(false);
  const [authorList, setAuthorList] = React.useState([]);
  const loading = props.show && authorList.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setAuthorList([...topFilms]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  React.useEffect(() => {
    if (!openAuthorsList) {
      setAuthorList([]);
    }
  }, [openAuthorsList]);

  return (
    <Dialog
        fullScreen
        open={props.show}
        onClose={()=>props.setShow(true)}
        TransitionComponent={Transition}
      >
        <AppBar color="secondary" sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={()=>props.setShow(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Add Tags
            </Typography>
            <Button autoFocus color="inherit" onClick={()=>props.setShow(false)}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div className="d-flex w-100 p-side-15 mt-20 tags-group">
        <Autocomplete
                multiple
                id="tags-filled"
                freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
                sx={{ width: 300 }}
                open={openAuthorsList}
                onOpen={() => {
                  setOpenAuthorsList(true);
                }}
                onClose={() => {
                  setOpenAuthorsList(false);
                }}
                isOptionEqualToValue={(option, value) =>
                  option.title === value.title
                }
                getOptionLabel={(option) => option.title}
                options={authorList}
                loading={loading}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Enters author name"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {loading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
        </div>
      </Dialog>
  );
}
const topFilms = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];
export default TagsModal;
