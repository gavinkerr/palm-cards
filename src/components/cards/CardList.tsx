import { Container } from "@mui/material";
import { PalmCard } from "../../domain/domain";
import ViewCard from "./ViewCard";

function CardList(props: {
  cards: PalmCard[];
  editClick: (card: PalmCard, index: number) => void;
  deleteClick: (card: PalmCard, index: number) => void;
}) {
  return (
    <Container>
      {props.cards.map((card, index) => (
        <ViewCard
          key={index + ""}
          card={card}
          editClick={() => props.editClick(card, index)}
          deleteClick={() => props.deleteClick(card, index)}
        />
      ))}
    </Container>
  );
}

export default CardList;
