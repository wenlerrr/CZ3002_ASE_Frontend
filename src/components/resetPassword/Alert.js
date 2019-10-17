import React from 'react'
import {Slide, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@material-ui/core'

function Transition(props) {
  return <Slide direction="up" {...props} />
}

export default function Alert({
  handleClose,
  handleSubmit,
  isOpen,
  hasTwoButtons = false,
  submitButtonText,
  title,
  text,
}) {
  return (
    <Dialog
      open={isOpen}
      transition={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {hasTwoButtons ? (
          <Button onClick={handleClose} variant="raised" color="primary">
            {'CANCEL'}
          </Button>
        ) : null}
        <Button onClick={handleSubmit} color="primary">
          {submitButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
