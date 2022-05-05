import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function TitleTabs() {
  const [anchorEl, setAnchorEl] = useState(null);
  const availableLangs = ["ar","en", "fr"];
  const [lang, setLang] = useState("ar");
  const open = Boolean(anchorEl);
  const changeTab = (e, selector) => {
    document
      .querySelector(".info-title-box .info-tab.active")
      .classList.remove("active");
    document
      .querySelector(`.info-title-box .info-tab[id="lang--${selector}"]`)
      .classList.add("active");
    e.target.classList.add("active");
    setLang(selector);
  };
  const handlePopupClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const currentLangBox = (
    <Tooltip title="Change Language">
      <IconButton
        onClick={handlePopupClick}
        size="small"
        sx={{ }}
        aria-controls={open ? "langs-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar color="primary" sx={{ width: 32, height: 32 }}>
          {lang.toUpperCase()}
        </Avatar>
      </IconButton>
    </Tooltip>
  );

  const MenuBox = (
    <Menu
      anchorEl={anchorEl}
      id="langs-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: 0,
            mr: 0,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {availableLangs.map((langItem) => {
        if (langItem != lang) {
          return (
            <MenuItem key={langItem} onClick={(e) => changeTab(e, langItem)}>
              <Avatar color="primary" sx={{ width: 32, height: 32 }}>
                {langItem.toUpperCase()}
              </Avatar>
            </MenuItem>
          );
        }
      })}
    </Menu>
  );


       // define form inputs
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    isLoading(true);
    try {
      const resp = await fetch(`${server}/taxonomy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!resp.ok) {
        alert("Something went wrong", false);
      } else {
        alert("Successfully", true);
        router.push("/taxonomy");
      }
    } catch (error) {
      alert(error.message, false);
    }
    isLoading(false);
  };

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }



  return (
    <div className="info-title-box">
      {currentLangBox}
      {MenuBox}
      
      <div onClick={changeTab} className="info-tab active" id="lang--ar">
      <form onSubmit={handleSubmit}>
        <div className="form-group w-100 mb-15">
          <TextField
            required
            id="outlined-required"
            label="Name"
            className="w-100"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="form-group w-100 mb-15">
          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            minRows={4}
            className="w-100"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group w-100 mb-15">
          <Button type="submit" variant="contained">
            ADD TAXONOMY
          </Button>
        </div>
      </form>
      </div>
      <div onClick={changeTab} className="info-tab" id="lang--en">
        English
      </div>
      <div onClick={changeTab} className="info-tab" id="lang--fr">
        French
      </div>
    </div>
  );
}

export default TitleTabs;
