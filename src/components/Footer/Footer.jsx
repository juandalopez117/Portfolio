import * as React from "react";

import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";
import { Divider, IconButton } from "@mui/material";

import { Link } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        maxWidth={true}
        sx={{
          bgcolor: "black",
          color: "white",
          display: "block",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1%",
          }}
        >
          <Typography variant="h6"> Social media </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Divider sx={{ width: "40%", bgcolor: "white" }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1%",
          }}
        >
          <Box>
            <IconButton>
              <Link href="https://github.com/juandalopez117">
                <GitHubIcon
                  sx={{
                    fontSize: "200%",
                    color: "white",
                  }}
                />
              </Link>
            </IconButton>
          </Box>

          <Box>
            <IconButton>
              <Link href="https://www.linkedin.com/in/juan-david-piedrahita-l%C3%B3pez-ab9b57b2/">
                <LinkedInIcon
                  sx={{
                    fontSize: "200%",
                    color: "white",
                  }}
                />
              </Link>
            </IconButton>
          </Box>

          <Box>
            <Link href="https://twitter.com/Juandavlopez117">
              <TwitterIcon
                sx={{
                  fontSize: "300%",
                  color: "white",
                }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
