import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const VideoChat = () => {
  return (
    <div style={{paddingLeft:"20px", paddingTop:"30px"}}>
      <h1 style={{fontFamily:"Roboto", fontSize: "2.5rem", letterSpacing: 1,}}>
        Hey <span style={{color:"#49AB94"}}>{sessionStorage.getItem("Name").toUpperCase()}!</span> Hope everything is doing great
      </h1>
      <i style={{fontSize: "1.5rem"}}>Connect to someone and help share your thoughts</i><br/>
      <ul style={{paddingTop:"10px", fontSize:"1.2rem"}}>
        <li>Enter team name as Nekoma</li>
        <li>Enter your Username</li>
      </ul>
      <a
        href="https://videochatapp24.herokuapp.com/"
        rel="noreferrer"
        target="_blank"
        style={{textDecoration:"none"}}
      >
        <Button variant="contained" style={{borderRadius: "31px", backgroundColor: "#49AB94", marginTop:"15px"}} >Connect</Button>
      </a>
    </div>
  );
};

export default VideoChat;
