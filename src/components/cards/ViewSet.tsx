import { Edit } from "@mui/icons-material";
import { Box, Card, IconButton, Stack, Typography } from "@mui/material";
import { Set } from "../../domain/domain";
import { Link as RouterLink } from "react-router-dom";

//todo make common card wrapper

function ViewSet(props: { set: Set }) {
  return (
    <Card>
      <Box sx={{ p: 2, display: "flex" }}>
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>{props.set.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {props.set.description}
          </Typography>
        </Stack>
        <IconButton
          component={RouterLink}
          to={"/edit-set/" + props.set.id || "0"}
        >
          <Edit sx={{ fontSize: 14 }} />
        </IconButton>
      </Box>
    </Card>
  );
}

export default ViewSet;
