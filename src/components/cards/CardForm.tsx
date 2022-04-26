import { Box, TextField } from "@mui/material";
import { ChangeEvent, PropsWithChildren, useState } from "react";
import { PalmCard } from "../../domain/domain";

function Item(props: PropsWithChildren<any>) {
  return <Box sx={{ p: 1, m: 1 }}>{props.children}</Box>;
}

function CardForm(props: {
  card: PalmCard;
  onCardChange: (value: PalmCard) => void;
}) {
  const [question, setQuestion] = useState(props.card.question);
  const [answer, setAnswer] = useState(props.card.answer);
  const returnValue = { ...props.card, question, answer };

  const handleQuestionChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log('handleQuestionChange');
    setQuestion(event.target.value);
    props.onCardChange({ ...returnValue, question: event.target.value });
  };

  const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log('handleQuestionChange');
    setAnswer(event.target.value);
    props.onCardChange({ ...returnValue, answer: event.target.value });
  };
  //todo https://mui.com/material-ui/react-grid/
  return (
    <Box sx={{ display: "grid" }}>
      <Item>
        <TextField
          id="standard-basic"
          label="Question"
          multiline
          maxRows={4}
          value={question}
          onChange={handleQuestionChange}
        />
      </Item>
      <Item>
        <TextField
          id="outlined-multiline-flexible"
          label="Answer"
          multiline
          maxRows={4}
          value={answer}
          onChange={handleAnswerChange}
        />
      </Item>
    </Box>
  );
}

export default CardForm;
