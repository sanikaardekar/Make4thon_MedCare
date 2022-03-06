import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { URL } from "../../utils/api";
import { GiButterfly } from "react-icons/gi";

export default function ViewPosts() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    (async () => {
      let posts;
      let token = sessionStorage.getItem("token");
      try {
        let response = await fetch(URL + "disc-forum/post/", {
          method: "GET",
          headers: {
            Authorization: `token ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        posts = await response.json();
        console.log(posts);
      } catch (error) {
        console.log("Error" + error);
        posts = [];
      }

      setCard(posts);
    })();
  }, []);

  return (
    <>
      <Grid
        container
        className="display"
        // alignItems="center"
        // justifyContent="center"
      >
        <Box ml={5} mr={5} mt={3} pt={3} mb={1} pb={1} >
          <Grid
            container
            spacing={3}
            alignContent="flex-start"
            justify="center"
            // display="flex"
            // flexDirection="column"
          >
            {card.map((post, index) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                  <Card sx={{ maxWidth: 345 }} style={{ width: "50vh", backgroundColor: "#49ab9480", marginLeft:"170px"}}
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom">
                    <CardContent>
                      <Typography
                        style={{ color: "black" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {post.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </>
  );
}
