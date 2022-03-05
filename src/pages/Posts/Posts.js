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
import React from 'react';
import { useState } from "react";
import { URL } from "../../utils/api";
import {GiButterfly} from 'react-icons/gi';

export default function Posts() {
  const [values, setValues] = useState({
    description: "",
  });
     
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
          let token = sessionStorage.getItme('token');
          let result = await fetch(
            URL + "disc-forum/forum/",
            {
              method: "POST",
              body: JSON.stringify({
                description: values.description,
              }),
              headers: {
                Authorization: `token ${token}`,
              },
            }
            
          );
          result = await result.json();
          console.log(result);
          console.log(result.dateCreated);
        //   if(result){
        //     alert("Signed in Successfully! Please verify your email");
        //   }
        } catch (error) {
          console.log("Error" + error);
         }
      }

      const handleChanges = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
        console.log(values);
        //localStorage.setItem("user", JSON.stringify(values.email));
      };

  return (
    <>
      <Grid container className="forum">
        <Card sx={{ display: "flex", width: "70vw", marginLeft: "60px" }}>
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
              <Input
                id="discuss"
                label="discuss"
                multiline
                row={8}
                value={values.description}
                onChange={handleChanges}
                placeholder="Say your heart out"
                variant="standard"
              />
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Button variant="contained" sx={{ marginRight: "40px" }} onClick={handleSubmit}>
                Post
              </Button>
            </Box>
          </Box>
          <GiButterfly size={60}/>
        </Card>
      </Grid>
    </>
  );
}
