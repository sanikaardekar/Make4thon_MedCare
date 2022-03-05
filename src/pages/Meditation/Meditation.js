import React, { useState } from "react";
import CountDownTimer from "./CountDownTimer";
import OpeningMsg from "./OpeningMsg";
import "./Meditation.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Meditation = () => {
  const [show, setshow] = useState(true);
  setTimeout(() => setshow(false), 4000);
  return (
    <>
      <div className="mainMeditationBox">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid
              item
              sm={12}
              md={6}
              lg={7}
              style={{
                padding: "5%",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="timergrid"
            >
              <div style={{ paddingBottom: "40px" }}>
                <p style={{ fontSize: "50px", fontWeight: "500" }}>
                  Prayer is when you talk to <span style={{color:"#49AB94"}}>God</span>
                </p>
                <i style={{ fontSize: "30px", fontWeight: "500" }}>
                <span style={{color:"#49AB94"}}>Meditation</span> is when you listen to God
                </i>
              </div>
              <div className="timerBack">
                <CountDownTimer />
              </div>
              {show && <OpeningMsg />}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              style={{ paddingTop: "100px", height: "88vh" }}
            >
              <div className="spotifyPlayer">
                <iFrame
                  src="https://open.spotify.com/embed/playlist/5biekm8QYDTMHzxLqkIn6M?utm_source=generator&theme=0"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iFrame>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Meditation;
