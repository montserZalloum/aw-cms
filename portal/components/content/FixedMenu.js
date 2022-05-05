import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import LocalOfferSharpIcon from '@mui/icons-material/LocalOfferSharp';
import Paper from '@mui/material/Paper';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useRef, useState } from 'react';
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
import FaxIcon from '@mui/icons-material/Fax';
function FixedMenu(props) {
    const [value, setValue] = useState(null);
  const ref = useRef(null);
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
      className="fixed-menu-bar-content"
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={()=> props.setImageModal(true)} label="Images" icon={<AddPhotoAlternateIcon />} />
        <BottomNavigationAction onClick={()=> props.setVideoModal(true)} label="Video" icon={<VideoCallSharpIcon />} />
        <BottomNavigationAction onClick={()=> props.setTagsModal(true)} label="Tags" icon={<LocalOfferSharpIcon />} />
        <BottomNavigationAction onClick={()=> props.setDepartmentsModal(true)} label="Departments" icon={<AssignmentSharpIcon />} />
        <BottomNavigationAction onClick={()=> props.setPublishModal(true)} label="Publish" icon={<FaxIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

export default FixedMenu;
