import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSet } from "../apis/cardsApi";
import CardList from "../components/cards/CardList";
import EditSetDialogButton from "../components/cards/EditSetDialogButton";
import { Set } from "../domain/domain";

function EditSet() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [loadedSet, setLoadedSet] = useState<Set | null>(null);

  const { id } = useParams<{ id: string }>();

  function handleEditClick() {
    setIsEditOpen(true);
  }

  const handelEditConfirm = (value: Set) => {
    alert(JSON.stringify(value));
    setIsEditOpen(false);
    setIsLoading(false);
    // addSet(value).then((newSet) => {
    //   setIsLoading(false);
    //   setLoadedSets([...loadedSets, newSet]);
    // });
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
  return (
    <>
      <section>
        <h1>{loadedSet?.title}</h1>
        <p>{loadedSet?.description}</p>
        <IconButton onClick={handleEditClick}>
          <Edit sx={{ fontSize: 14 }} />
        </IconButton>
        <CardList cards={loadedSet?.cards || []} />
      </section>
      <section>
        here
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
