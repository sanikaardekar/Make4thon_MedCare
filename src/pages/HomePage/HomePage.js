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
              <Typography
                style={{
                  fontSize: "5rem",
                  letterSpacing: 1,
                  fontFamily: "Roboto",
                }}
              >
                MedCare
              </Typography>
            </Grid>
            <br />
            <Grid item sm={6} md={12}>
              <Typography style={{ fontFamily: "Roboto", fontSize: "1.2rem" }}>
                Our emotions can trigger all sorts of behaviors— uncontrollable
                anger, crying spells, self-loathing, and other not-so-positive
                reactions. Managing your emotions takes a dose of willpower,
                plenty of awareness, lots of resilience, among other self-care
                tools. Are you ready to build your own emotional toolkit? Here
                is what you can do:{" "}
              </Typography>
            </Grid>
            <br />
            <Grid item sm={6} md={3}>
              <Button
                style={{ borderRadius: "31px", backgroundColor: "#49AB94", fontSize:"1.5rem" }}
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
