import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TerminalSharpIcon from "@mui/icons-material/TerminalSharp";
import { CardActionArea } from "@mui/material";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";
import { Button } from "react-bootstrap";
import S from "./Card.module.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cards({
  title,
  date,
  image,
  generalIdeas,
  Tecs,
  ListOftechnologies,
  Language,
  github,
  deploy,
  init = null,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{ maxWidth: 345, bgcolor: "rgb(36, 36, 36)", color: "white" }}
      variant="outlined"
    >
      <CardActionArea>
        <CardHeader
          sx={{ color: "white" }}
          avatar={<TerminalSharpIcon />}
          title={title}
          subheader={
            <Typography sx={{ mb: 1 }} color="white" fontSize="2vw">
              {date}
            </Typography>
          }
        />
        <CardMedia component="img" height="194" image={image} alt="project" />
        <CardContent>
          <Typography variant="body2" color="white">
            {generalIdeas}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Link href={deploy}>
              <CodeIcon sx={{ color: "white" }} />
            </Link>
          </IconButton>
          <IconButton aria-label="share">
            <Link href={github}>
              <GitHubIcon sx={{ color: "white" }} />
            </Link>
          </IconButton>

          {init !== null && (
            <IconButton aria-label="share">
              <Link href={init}>
                <CodeIcon sx={{ color: "white" }} />
              </Link>
            </IconButton>
          )}

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ color: "white" }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph> {Tecs} </Typography>
            <Typography paragraph>{ListOftechnologies}</Typography>
          </CardContent>
        </Collapse>
      </CardActionArea>
    </Card>
  );
}
