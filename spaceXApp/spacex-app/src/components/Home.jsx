import React, { useState, useEffect } from 'react';
import homeStyles from "../stylesheets/Home.module.css";
import Filters from './Filters';
import axios from "axios";
import queryString from 'querystring';
import Missions from './Missions';

// const Missions = dynamic(() =>
//   import("./Missions")
// );

function Home() {

  const [missionsList, setMissionsList] = useState([]);
  const [launchYear, setLaunchYear] = useState(null);
  const [launchSuccess, setLaunchSuccess] = useState(null)
  const [landSuccess, setLandSuccess] = useState(null);

  let API_URL = "https://api.spacexdata.com/v3/launches?limit=100";

  useEffect(() => {
    
    axios.get(API_URL).then(
      res => {
       
        setMissionsList(res.data);}
      )
      .catch(error => { throw error.response });
  }, []);


  useEffect(() => {

    
    if (launchYear !== null) {
      API_URL = API_URL + `&` +queryString.stringify({launch_year: launchYear});
    }

    if (launchSuccess !== null) {
      API_URL = API_URL + `&` +queryString.stringify({launch_success : launchSuccess});
    }

    if (landSuccess !== null) {
      API_URL = API_URL + `&` +queryString.stringify({land_success : landSuccess});
    }

    axios.get(API_URL).then(
      res => {
        setMissionsList(res.data);}
      )
      .catch(error => { throw error.response });

      
  }, [
    launchYear, launchSuccess, landSuccess
  ]);

  
    return (
      
        <>
        <main className={homeStyles.parent}>
          <div className={homeStyles.left_section}>
            <Filters launchYear ={launchYear} onUpdateYear = {setLaunchYear}
            launchSuccess = {launchSuccess} onUpdateLaunch = {setLaunchSuccess}
            landSuccess = {landSuccess} onUpdateLand = {setLandSuccess}/>
          </div>
          <div className={homeStyles.right_section}>
            <Missions missionsList = {missionsList}/>
          </div>
        </main>
        </>
    )
      
}


export default Home;