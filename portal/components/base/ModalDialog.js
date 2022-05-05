import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import { forwardRef, useState } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function ModalDialog(props) {
  console.log(props)
  return (
    <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>props.closeModalHandler(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{props.title}</DialogTitle>
        
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>props.closeModalHandler(false)}>Disagree</Button>
          <Button onClick={()=>props.agreeHandler(props.id)}>Agree</Button>
        </DialogActions>
      </Dialog>
  )
}

export default ModalDialog