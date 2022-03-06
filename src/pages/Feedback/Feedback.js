import { Typography, Grid, TextField, Button } from "@mui/material";
import { useState } from "react";
import { BsStar } from "react-icons/bs";
import swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


export default function Feedback() {
  const navigate = useNavigate();
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const star = Array(5).fill(0);
  const [feedback, setFeedback] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    postFeedback();
  };
  async function postFeedback() {
    // console.log("hello");
    try {
      let token = sessionStorage.getItem('token');
      let result = await fetch(
        URL + "contactus/",
        {
          method: "POST",
          body: JSON.stringify({
            feedback: feedback,
            stars: currentValue,
          }),
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",

          },
        }
        
      );
      result = await result.json();
      console.log(result);
      if(result){
        swal.fire({
            confirmButtonText:'We are Grateful for your Feedback'
          }).then(()=>{
           navigate('/home')
          })
      }
    } catch (error) {
      console.log("Error" + error);
     }
  }


  const handleClick = (value) => {
    setCurrentValue(value);
    console.log(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  const name = sessionStorage.getItem('Name').toUpperCase();
  return (
    <>
      <Grid container display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" textAlign="center" fontFamily="Roboto" style={{paddingBottom:"20px"}}>
          Nothing to Prove, Everything to Improve
        </Typography>
        <Typography variant="h5" textAlign="center" fontFamily="Roboto">
          Hey {name}, Help us Improve
        </Typography>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "70px" }}
        >
          {star.map((_, index) => {
            return (
              <Grid container>
                <BsStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || currentValue) > index ? "#B10A47" : "grey"
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              </Grid>
            );
          })}
        </div>
        <div style={{ marginTop: "20px" }}>
          <TextField
            id="feedback"
            label="Tell us your experience with us"
            multiline
            rows={4}
            style={{ color: "#B10A47" }}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#49AB94", color: "#B10A47" }}
            onClick={handleSubmit}
          >
            Done!
          </Button>
        </div>
      </Grid>
    </>
  );
}
