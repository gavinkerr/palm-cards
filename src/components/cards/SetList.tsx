
import {  Container } from '@mui/material';
import { Set } from '../../domain/domain';
import ViewSet from './ViewSet';

function SetList(props: {sets: Set[]}){

    return <Container>
            {props.sets.map(set => <ViewSet key={set.id} set={set}/>)}
     </Container>
}

export default SetList;