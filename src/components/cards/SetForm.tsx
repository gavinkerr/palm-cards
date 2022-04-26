import { Box, TextField } from "@mui/material";
import { ChangeEvent, PropsWithChildren, useState } from "react";
import { Set } from "../../domain/domain";

function Item(props: PropsWithChildren<any>) {
  return <Box sx={{ p: 1, m: 1 }}>{props.children}</Box>;
}

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
  //todo https://mui.com/material-ui/react-grid/
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
