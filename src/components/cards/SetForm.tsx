
import {  Box,  TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Set } from '../../domain/domain';




function SetForm(props: {set: Set, onSetChange: (value: Set) => void}){
   
    const [title, setTitle] = useState(props.set.title);
    const [description, setDescription] = useState(props.set.description);
    const returnValue = {...props.set, title, description}
    // console.log(returnValue);
    

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log('handleTitleChange');
        setTitle(event.target.value);
        props.onSetChange({...returnValue, title: event.target.value})
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log('handleTitleChange');
        setDescription(event.target.value);
        props.onSetChange({...returnValue, description: event.target.value})
    };

    // eslint-disable-next-line react/jsx-no-undef
    return (<Box>
        <TextField id="standard-basic" label="Title" variant="standard" value={title}
          onChange={handleTitleChange} />
        <TextField
          id="outlined-multiline-flexible"
          label="Descriptino"
          multiline
          maxRows={4}
          value={description}
          onChange={handleDescriptionChange}
        />
      </Box>)
}

export default SetForm;