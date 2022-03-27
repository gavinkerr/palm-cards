
import {  Container } from '@mui/material';
import { PalmCard } from '../../domain/domain';
import ViewCard from './ViewCard';

function CardList(props: {cards: PalmCard[]}){

    return <Container>
            {props.cards.map(card => <ViewCard card={card}/>)}
     </Container>
}

export default CardList;