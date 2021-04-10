import React from "react";
import Style from "../stylesheets/MissionCards.module.css";
import MissionDetail from "./MissionDetail";


const Missions = (props) => {
  
  const h1style = {
    textAlign: "center",
  };

  return (
      
    <div className={Style.wrapper_mission_cards}>
      {props.missionsList.loading ? <h1 style={h1style}>Loading</h1> : null}
      {props.missionsList.error ? (
        <h1 style={h1style}>{props.missionsList.error}</h1>
      ) : null}
      <div className={Style.mission_cards}>
        {props.missionsList.map((mission, idx) => (
          <MissionDetail key={idx} mission={mission} />
        ))}
      </div>
    </div>
   
  );
};

export default Missions;
