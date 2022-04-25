import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import SetForm from "./SetForm";
import { Set } from "../../domain/domain";

function EditSetDialogButton(props: {
  initValue: Set;
  open: boolean;
  onConfirm: (value: Set) => void;
  onCancel: () => void;
}) {
  const unitset: Set = { ...props.initValue };
  let newSet: Set = unitset;

  const handleClose = () => {
    props.onCancel();
  };

  const handleOkay = () => {
    props.onCancel();
    props.onConfirm(newSet);
  };

  const handleSetChange = (value: Set) => {
    newSet = value;
  };

  return (
    <>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Edit Set</DialogTitle>
        <DialogContent>
          <SetForm onSetChange={handleSetChange} set={unitset}></SetForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOkay}>Okay</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditSetDialogButton;
