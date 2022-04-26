import { Edit } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { PalmCard } from "../../domain/domain";

//TODO tight align the icon a

function ViewCard(props: { card: PalmCard; editClick: () => void }) {
  return (
    <Card>
      <Box sx={{ p: 2, display: "flex" }}>
        {!!props.card.imageUri ? (
          <Avatar variant="rounded" src={props.card.imageUri} />
        ) : null}
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>{props.card.question}</Typography>
          <Typography variant="body2" color="text.secondary">
            {props.card.answer}
          </Typography>
        </Stack>
        <IconButton onClick={() => props.editClick()}>
          <Edit sx={{ fontSize: 14 }} />
        </IconButton>
      </Box>
      <Divider />
      <Stack>
        <Typography variant="body2" color="text.secondary">
          {props.card.hint}
        </Typography>
      </Stack>
    </Card>
  );
}

export default ViewCard;
