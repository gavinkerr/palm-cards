import { Fragment, useEffect, useState } from 'react';
import {Set} from '../domain/domain'
import {getSets, addSet} from '../apis/cardsApi'
import SetList from '../components/cards/SetList';
import NewSetDialogButton from '../components/cards/NewSetDialogButton';


function EditSetsPage(){
    
    const [isLoading, setIsLoading] = useState(true);
    const [loadedSets, setLoadedSets] = useState<Set[]>([]);

    //const initialNewOne: Set = {cards: [], description: '', title: ''};
    const handelAddConfirm = (value: Set) => {
        alert(JSON.stringify(value));
        setIsLoading(false);
        addSet(value).then((newSet) => {
            setIsLoading(false);
            setLoadedSets([...loadedSets, newSet]);
          });
    };

    

    useEffect(() => {
        setIsLoading(true);
        getSets()
          .then((data) => {
            setIsLoading(false);
            setLoadedSets(data);
          });
      }, []);

      if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
      }

    return (
    <Fragment>
      <section>
        <h1>All Sets</h1>
        <SetList sets={loadedSets} />
      </section>
      <section>
      
      <NewSetDialogButton onConfirm={handelAddConfirm}/>


      </section>

    </Fragment>

      
      
      )
}

export default EditSetsPage;