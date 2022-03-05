import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import colors from "../utils/colors"

const NotFound = () => {
  return (
    <div style={{backgroundColor:colors.orange, height:"86vh", paddingTop:"100px"}}>
      <center>
        <div style={{ transform: "translateY(-44px)" }}>
          <img
            width="390"
            src="https://cdn.dribbble.com/users/605899/screenshots/4144886/pikabu_still_2x.gif?compress=1&resize=400x300"
            // src="https://previews.123rf.com/images/aleksorel/aleksorel1703/aleksorel170300038/74313329-la-pagina-di-errore-404-con-i-numeri-verdi-vector-l-illustrazione-su-fondo-nero-progettazione-grafic.jpg"
            alt="space"
          ></img>
          <h1 style={{ fontWeight: 800, color:colors.greenA }}>Oops! Something went wrong!</h1>
          <br />
          <h2 style={{ color: "rgb(0,0,0,0.8)" }}>
            We couldn't find what you are looking for
          </h2>
          <br />
          <Link style={{ textDecoration: "none" }} to="/login">
            <Button width="40px" variant="contained" style={{backgroundColor:colors.greenA}}>
              Try Again!
            </Button>
          </Link>
        </div>
      </center>
    </div>
  );
};

export default NotFound;
