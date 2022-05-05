import Drawer from "@mui/material/Drawer";
import LoadingButton from "@mui/lab/LoadingButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import React from "react";
import UploadIcon from "@mui/icons-material/Upload";
import DoDisturbOnSharpIcon from '@mui/icons-material/DoDisturbOnSharp';
function ImagesModal(props) {
  const [loading, setLoading] = React.useState(false);
  function uploadImage() {
    setLoading(true);
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
    <div className="images-modal-box">
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
                  Add images
                </Typography>
                <Button autoFocus color="inherit" onClick={toggleDrawer(false)}>
                  save
                </Button>
              </Toolbar>
            </AppBar>
            <div className="pt-15 pb-15">
              <div className="p-side-15">
                <LoadingButton
                  size="small"
                  color="primary"
                  onClick={uploadImage}
                  loading={loading}
                  loadingPosition="start"
                  startIcon={<UploadIcon />}
                  variant="contained"
                >
                  Upload image
                </LoadingButton>
              </div>
              <div className="image-uploader-box d-flex pt-30 swipe-box pl-15 pr-15 gap-10">
                <div className="upload-img-box d-flex relative">
                  <img
                    className="rounded"
                    src="https://via.placeholder.com/150"
                    width="75"
                    height="75"
                    alt=""
                  />
                    <input className="upload-img-alt" />
                    <DoDisturbOnSharpIcon className="remove-img" />
                </div>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
    </div>
  );
}

export default ImagesModal;
