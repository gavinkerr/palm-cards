import { Container } from "@mui/material";
import { PalmCard } from "../../domain/domain";
import ViewCard from "./ViewCard";

function CardList(props: {
  cards: PalmCard[];
  editClick: (card: PalmCard) => void;
}) {
  return (
    <Container>
      {props.cards.map((card) => (
        <ViewCard card={card} editClick={() => props.editClick(card)} />
      ))}
    </Container>
  );
}

export default CardList;
