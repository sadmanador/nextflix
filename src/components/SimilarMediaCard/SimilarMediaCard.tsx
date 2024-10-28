import { CardsProps } from "@/types";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import React from "react";

const SimilarMediaCard = ({ item }: CardsProps) => {
  const { title, poster_path, overview, vote_average } = item;

  const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <Card
      sx={{ maxWidth: 345, backgroundColor: "#181818", position: "relative" }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={imageUrl} alt={title} />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
            zIndex: 1,
          }}
        />
        <CardContent
          sx={{ color: "#ffffff80", position: "relative", zIndex: 2 }}
        >
          <Typography sx={{ color: "#53d853" }}>{`${Math.round(
            vote_average * 10
          )}% match`}</Typography>
          <Typography variant="body2">{overview.slice(0, 100)}. . .</Typography>
        </CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            position: "absolute",
            top: "40%",
            left: "5%",
            color: "#ffffff",
            zIndex: 2,
          }}
        >
          {title.slice(0, 12)}...
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default SimilarMediaCard;
