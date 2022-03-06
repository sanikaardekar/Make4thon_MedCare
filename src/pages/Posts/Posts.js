import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Input,
  Button,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { URL } from "../../utils/api";
import { GiButterfly } from "react-icons/gi";
import ViewPosts from "./ViewPosts";

export default function Posts() {
  let userId = sessionStorage.getItem("user_id");
  let name = sessionStorage.getItem("Name");


  const [description, setDescription] = useState("");
  const [posted_by, setPosted_by] = useState(userId);

  const handleSubmit = (event) => {
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    post();
  };

  async function post() {
    // console.log("hello");
    try {
      let token = sessionStorage.getItem("token");
      let result = await fetch(URL + "disc-forum/post/", {
        method: "POST",
        body: JSON.stringify({
          description: description,
          posted_by: posted_by,
        }),
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);
      setPosted_by(userId);
      //   if(result){
      //     alert("Signed in Successfully! Please verify your email");
      //   }
    } catch (error) {
      console.log("Error" + error);
    }
  }

  return (
    <>
      <Grid
        container
        className="post"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Card sx={{ display: "flex", width: "70vw" }}>
          <CardMedia
            component="img"
            sx={{ width: 40 }}
            image="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg"
            alt="black"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "70vw",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="body1"> @ {name}</Typography>
              <Input
                id="description"
                label="description"
                multiline
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Say your heart out"
                variant="standard"
              />
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Button
                variant="contained"
                sx={{
                  marginRight: "40px",
                  backgroundColor: "#49AB94",
                  color: "#B10A47",
                }}
                onClick={handleSubmit}
              >
                Post
              </Button>
            </Box>
          </Box>
          <GiButterfly size={60} />
        </Card>
      </Grid>
      <br />
      <hr />
      <Typography variant="h5" textAlign="center" marginTop="20px">
        Previous Posts
      </Typography>
      <ViewPosts/>
    </>
  );
}
