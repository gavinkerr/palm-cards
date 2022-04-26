import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSet, updateSet } from "../apis/cardsApi";
import CardList from "../components/cards/CardList";
import EditSetDialogButton from "../components/cards/EditSetDialogButton";
import NewCardDialogButton from "../components/cards/NewCardDialogButton";
import { PalmCard, Set } from "../domain/domain";

function EditSet() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [loadedSet, setLoadedSet] = useState<Set | null>(null);

  const { id } = useParams<{ id: string }>();

  function handleEditClick() {
    setIsEditOpen(true);
  }
  //todo fix the loading bug ...
  const handelAddConfirm = (value: PalmCard) => {
    alert(JSON.stringify(value));
    setIsLoading(false);
    if (!!loadedSet) {
      const newSet = { ...loadedSet, cards: [...loadedSet.cards, value] };
      updateSet(newSet).then(() => {
        setIsLoading(false);
        setLoadedSet(newSet);
      });
    }
  };

  const handelEditCard = (value: PalmCard) => {
    alert(JSON.stringify(value));
  };

  const handelEditConfirm = (value: Set) => {
    alert(JSON.stringify(value));
    setIsEditOpen(false);
    setIsLoading(false);
    updateSet(value).then(() => {
      setIsLoading(false);
      setLoadedSet(value);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getSet(id || "").then((data) => {
      setIsLoading(false);
      setLoadedSet(data);
    });
  }, [id]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  //todo move the view set details into it own
  //todo gid this fella https://mui.com/material-ui/react-grid/
  //todo get rid of sections for the grids
  return (
    <>
      <section>
        <h1>{loadedSet?.title}</h1>
        <p>{loadedSet?.description}</p>
        <IconButton onClick={handleEditClick}>
          <Edit sx={{ fontSize: 14 }} />
        </IconButton>
        <CardList editClick={handelEditCard} cards={loadedSet?.cards || []} />
      </section>
      <section>
        <NewCardDialogButton onConfirm={handelAddConfirm} />
        <EditSetDialogButton
          open={isEditOpen}
          initValue={{
            ...(loadedSet || { cards: [], description: "", title: "" }),
          }}
          onConfirm={handelEditConfirm}
          onCancel={() => setIsEditOpen(false)}
        ></EditSetDialogButton>
      </section>
    </>
  );
}

export default EditSet;
