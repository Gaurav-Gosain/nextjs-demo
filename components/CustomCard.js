import React, { useState } from "react";
import Card from "@mui/material/Card";
import {
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
const CustomCard = () => {
  const [likes, setLikes] = useState(1);

  const [open, setOpen] = useState(false);

  const [buttonRef, setButtonRef] = useState(null);

  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <Card className="w-80 mb-8 rounded-3xl" elevation={20}>
      <CardHeader
        avatar={
          <Avatar
            src={"https://source.unsplash.com/random/300x300/?person"}
          />
        }
        action={
          <div>
            <IconButton
              onClick={(event) => {
                setOpen(!open);
                setButtonRef(event.currentTarget);
              }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={buttonRef} open={open}>
              {["Item 1", "Item 2", "Item 3"].map((item) => {
                return (
                  <MenuItem
                    onClick={() => {
                      setButtonRef(null);
                      setOpen(false);
                    }}
                  >
                    {item}
                  </MenuItem>
                );
              })}
            </Menu>
          </div>
        }
        title="Persons Name"
        subheader="10 mins ago..."
      ></CardHeader>
      <CardMedia
        component="img"
        image="https://source.unsplash.com/random/1280x720/?scenery"
        alt="Post Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Welcome to GDSC! This is a custom card :D
        </Typography>
      </CardContent>
      <CardActions className="flex flex-row justify-between">
        <div>
          <IconButton onClick={incrementLikes}>
            <FavoriteIcon color={likes % 2 === 0 ? "error" : "default"} />
          </IconButton>
          <IconButton
            onClick={() => {
              alert("Shared successfully!");
            }}
          >
            <ShareIcon />
          </IconButton>
        </div>
        <div className="text-3xl mr-3">{likes}</div>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
