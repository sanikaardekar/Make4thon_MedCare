import { Typography, Grid, TextField, Button } from "@mui/material";
import {useState} from "react";
import {AiOutlineStar} from 'react-icons/ai';

export default function Feedback(){
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  } 
    let name = localStorage.getItem("token")
    return(<>
    <Grid container display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" textAlign="center" fontFamily="Roboto">Nothing to Prove, Everything to Improve</Typography>
        <Typography variant="h4" textAlign="center" fontFamily="Roboto">Hey {name}, Help us Improve</Typography>
        <div style={{display:"flex", flexDirection:"row", marginTop: "70px"}}>
        {stars.map((_, index) => {
          return (
              <Grid container>
            <AiOutlineStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? "#B10A47" : "grey"}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
            </Grid>
          )
        })}</div>
        <div style={{marginTop: "20px"}}>
        <TextField
          id="feedback"
          label="Tell us your experience with us"
          multiline
          rows={4}
          style={{color: "#B10A47"}}
        />
        </div>
        <div style={{marginTop: "15px"}}>
            <Button variant="contained" style={{backgroundColor: "#49AB94", color: "#B10A47"}}>Done!</Button>
        </div>
    </Grid>
   </>);
}
