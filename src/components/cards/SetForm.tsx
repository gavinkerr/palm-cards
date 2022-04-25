import { Box, BoxProps, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Set } from "../../domain/domain";

function SetForm(props: { set: Set; onSetChange: (value: Set) => void }) {
  const [title, setTitle] = useState(props.set.title);
  const [description, setDescription] = useState(props.set.description);
  const returnValue = { ...props.set, title, description };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log('handleTitleChange');
    setTitle(event.target.value);
    props.onSetChange({ ...returnValue, title: event.target.value });
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log('handleTitleChange');
    setDescription(event.target.value);
    props.onSetChange({ ...returnValue, description: event.target.value });
  };

  function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          ...sx,
        }}
        {...other}
      />
    );
  }

  // eslint-disable-next-line react/jsx-no-undef
  return (
    <Box sx={{ display: "grid" }}>
      <Item>
        <TextField
          id="standard-basic"
          label="Title"
          variant="standard"
          value={title}
          onChange={handleTitleChange}
        />
      </Item>
      <Item>
        <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          value={description}
          onChange={handleDescriptionChange}
        />
      </Item>
    </Box>
  );
}

export default SetForm;
