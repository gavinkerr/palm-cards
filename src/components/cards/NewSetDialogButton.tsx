import {  Fragment, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import SetForm from './SetForm';
import { Set } from '../../domain/domain';


function NewSetDialogButton(props: {onConfirm: (value: Set) => void}){
    const [open, setOpen] = useState(false);
    // const [newSet, setNewSet] = useState<Set>( {cards: [], description: '', title: ''});
   
    const unitset: Set = {cards: [], description: '', title: ''}; 
    let newSet: Set = unitset;

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleOkay = () => {
        setOpen(false);
        props.onConfirm(newSet);
    };

    const handleSetChange = (value: Set) => {
        newSet = value;
    };

    return (
        <Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
            Add New Set
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Set</DialogTitle>
        <DialogContent>
          <SetForm onSetChange={handleSetChange} set={unitset}></SetForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOkay}>Okay</Button>
        </DialogActions>
      </Dialog>
        </Fragment>
        
        );
}

export default NewSetDialogButton;