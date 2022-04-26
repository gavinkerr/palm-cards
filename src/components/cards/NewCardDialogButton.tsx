import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CardForm from "./CardForm";
import { PalmCard } from "../../domain/domain";

function NewCardDialogButton(props: { onConfirm: (value: PalmCard) => void }) {
  const [open, setOpen] = useState(false);
  // const [newCard, setNewCard] = useState<Card>( {cards: [], description: '', title: ''});

  const initCard: PalmCard = {
    question: "",
    answer: "",
    hint: "",
    imageUri: null,
  };
  let newCard: PalmCard = initCard;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOkay = () => {
    setOpen(false);
    props.onConfirm(newCard);
  };

  const handleCardChange = (value: PalmCard) => {
    newCard = value;
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Card
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Card</DialogTitle>
        <DialogContent>
          <CardForm onCardChange={handleCardChange} card={initCard}></CardForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOkay}>Okay</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default NewCardDialogButton;
