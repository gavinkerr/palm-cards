import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSet, updateSet } from "../apis/cardsApi";
import CardList from "../components/cards/CardList";
import EditSetDialogButton from "../components/cards/EditSetDialogButton";
import EditCardDialogButton from "../components/cards/EditSetDialogButton copy";
import NewCardDialogButton from "../components/cards/NewCardDialogButton";
import { PalmCard, Set } from "../domain/domain";

function EditSet() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEditSetOpen, setIsEditSetOpen] = useState(false);
  const [isEditCardOpen, setIsEditCardOpen] = useState(false);
  const [loadedSet, setLoadedSet] = useState<Set | null>(null);
  const [editingCard, setEditingCard] = useState<{
    card: PalmCard;
    index: number;
  } | null>(null);

  const { id } = useParams<{ id: string }>();

  function handleEditClick() {
    setIsEditSetOpen(true);
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

  const handelEditCard = (value: PalmCard, index: number) => {
    alert(JSON.stringify(value));
    setEditingCard({ card: value, index });
    setIsEditCardOpen(true);
  };

  const handelEditSetConfirm = (value: Set) => {
    alert(JSON.stringify(value));
    setIsEditSetOpen(false);
    setIsLoading(false);
    updateSet(value).then(() => {
      setIsLoading(false);
      setLoadedSet(value);
    });
  };

  const handelEditCardConfirm = (value: PalmCard) => {
    alert(JSON.stringify(value));
    setIsEditSetOpen(false);
    if (!!loadedSet) {
      const newSet = {
        ...loadedSet,
        cards: loadedSet.cards.map((x, i) =>
          i === editingCard?.index ? value : x
        ),
      };
      updateSet(newSet).then(() => {
        setIsLoading(false);
        setLoadedSet(newSet);
      });
    }
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
  //todo rename Edit Dialog button (mabey and reuse the dialog for both )
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
        {!!loadedSet ? (
          <EditSetDialogButton
            open={isEditSetOpen}
            initValue={loadedSet}
            onConfirm={handelEditSetConfirm}
            onCancel={() => setIsEditSetOpen(false)}
          ></EditSetDialogButton>
        ) : null}
        {!!editingCard ? (
          <EditCardDialogButton
            open={isEditCardOpen}
            initValue={editingCard.card}
            onConfirm={handelEditCardConfirm}
            onCancel={() => setIsEditCardOpen(false)}
          ></EditCardDialogButton>
        ) : null}
      </section>
    </>
  );
}

export default EditSet;
