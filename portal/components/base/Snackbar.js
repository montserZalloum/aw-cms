import {forwardRef, useEffect, useState} from 'react'
import Snackbar from '@mui/material/Snackbar';
import {useSelector, useDispatch} from 'react-redux'
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function SnackbarAlert() {
    const dispatch = useDispatch();

    const {global} = useSelector(state => state)
    const alert = (message,status) => dispatch({type: 'ALERT', payload: {message,status}})

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        alert("",false);
    };

    const alertStatus = global.alert.isSuccess ? "success" : "error";
  return (
    <Snackbar open={!!global.alert.message} onClose={handleClose} autoHideDuration={4000}>
        <Alert onClose={handleClose} severity={alertStatus} sx={{ width: '100%' }}>
          {global.alert.message}
        </Alert>
    </Snackbar>
  )
}

export default SnackbarAlert