import * as React from "react";
import Rating from "@mui/material/Rating";
import Badge from "@mui/material/Badge";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { purple } from "@mui/material/colors";
import RateReviewIcon from "@mui/icons-material/RateReview";
import InfoIcon from "@mui/icons-material/Info";
import CancelIcon from "@mui/icons-material/Cancel";

const ProductCard = () => {
  const [flipped, setFlipped] = React.useState(false);

  const handleInfoClick = () => {
    setFlipped(!flipped);
  };
  const mainContent = () => {
    return (
      <>
        <CardMedia
          component="img"
          sx={{ height: "200px", width: "200px" }}
          image={
            "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
          }
          alt="Paella dish"
        />
        <CardContent sx={{ padding: "4px 16px" }}>
          <Typography
            variant="body2"
            sx={{ color: "text.primary", fontWeight: 700, fontSize: "12px" }}
          >
            Essence Mascara Lash Princess
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ paddingTop: 0 }}>
          <Rating size="small" name="read-only" value={4.94} readOnly />
          <IconButton
            sx={{
              marginLeft: "auto",
              position: "relative",
              bottom: "236px",
              left: "54px",
            }}
            onClick={handleInfoClick}
            aria-label="info"
          >
            <InfoIcon fontSize="small" />
          </IconButton>
          <IconButton sx={{ marginLeft: "auto" }} aria-label="add to favorites">
            <RateReviewIcon fontSize="small" />
          </IconButton>
        </CardActions>
      </>
    );
  };
  const infoContent = () => {
    return (
      <>
        <CardHeader
          sx={{ padding: "10px" }}
          avatar={
            <Avatar
              sx={{ bgcolor: purple[100] }}
              src={
                "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
              }
            />
          }
          action={
            <IconButton onClick={handleInfoClick} aria-label="settings">
              <CancelIcon fontSize="small" />
            </IconButton>
          }
          title="Essence"
        />
        <CardContent>
          <Typography
            variant={"body2"}
            sx={{ marginBottom: 0.5, fontSize: "12px" }}
          >
            Product Info:
          </Typography>
          <Typography
            variant={"caption"}
            sx={{
              marginBottom: 0.5,
              fontSize: "10px",
              lineHeight: 0.5,
              letterSpacing: "unset",
            }}
          >
            {
              "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula."
            }
          </Typography>
        </CardContent>
      </>
    );
  };
  return (
    <Card sx={{ maxWidth: 200, minHeight: 280 }}>
      {flipped ? infoContent() : mainContent()}
    </Card>
  );
};
export default ProductCard;
