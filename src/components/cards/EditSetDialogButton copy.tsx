import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CardForm from "./CardForm";
import { PalmCard } from "../../domain/domain";

function EditCardDialogButton(props: {
  initValue: PalmCard;
  open: boolean;
  onConfirm: (value: PalmCard) => void;
  onCancel: () => void;
}) {
  const unitcard: PalmCard = { ...props.initValue };
  let newCard: PalmCard = unitcard;

  const handleClose = () => {
    props.onCancel();
  };

  const handleOkay = () => {
    props.onCancel();
    props.onConfirm(newCard);
  };

  const handleCardChange = (value: PalmCard) => {
    newCard = value;
  };
  return (
    <>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Edit Card</DialogTitle>
        <DialogContent>
          <CardForm onCardChange={handleCardChange} card={unitcard}></CardForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOkay}>Okay</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditCardDialogButton;
