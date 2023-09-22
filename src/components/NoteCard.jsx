import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
}));

const NoteCard = ({ note, handleDelete }) => {
  const navigate = useNavigate();

  const noteColor = (category) => {
    if (category === "work") {
      return "#b3e5fc";
    } else if (category === "school") {
      return "#b2dfdb";
    } else if (category === "todo") {
      return "#ffcdd2";
    } else {
      return "#d1c4e9";
    }
  };

  const getAvatarBg = () => {
    switch (note.category) {
      case "work":
        return "#01579b";
      case "school":
        return "#004d40";
      case "todo":
        return "#b71c1c";
      default:
        return "#311b92";
    }
  };

  const colorOfCard = noteColor(note.category);

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <Box>
      <DrawerHeader />
      <Card
        sx={{ backgroundColor: colorOfCard, cursor: "pointer" }}
        onClick={() => {
          navigate("/view");
        }}
      >
        <CardHeader
          action={
            <IconButton
              aria-label="settings"
              onClick={() => handleDelete(note.id)}
            >
              <DeleteOutlineIcon />
            </IconButton>
          }
          avatar={
            <Avatar sx={{ backgroundColor: getAvatarBg() }}>
              {note.title[0].toUpperCase()}
            </Avatar>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NoteCard;
