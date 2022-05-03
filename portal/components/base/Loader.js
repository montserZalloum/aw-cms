import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {useSelector} from 'react-redux'
function Loader() {
    const {global} = useSelector(state => state)
  return (
    <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={global.isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  )
}

export default Loader