import { Grid, Button, Typography } from "@mui/material";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <Grid item sm={6} md={3} className="left-box">
          <div className="text">
            <Grid item sm={6} md={3}>
              <Typography style={{ fontSize: "3.5rem", letterSpacing: 1, fontFamily:"Roboto" }}>MedCare</Typography>
            </Grid>
            <br />
            <Grid item sm={6} md={3}>
              <Typography style={{ fontFamily:"Roboto", fontSize: "1.5rem" }}>We Got Your Back </Typography>
            </Grid>
            <br />
            <Grid item sm={6} md={3}>
              <Button
                style={{ borderRadius: "31px", backgroundColor: "#49AB94" }}
                variant="contained"
              >
                Explore
              </Button>
            </Grid>
          </div>
        </Grid>
        <Grid item sm={6} md={6} className="right-box"></Grid>
      </Grid>
    </>
  );
}
