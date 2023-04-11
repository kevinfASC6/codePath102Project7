import React, { useState, useEffect } from "react";
import { supabase } from "../client";

const Create = () => {
  const [crewmateInfo, setCrewmateInfo] = useState([]);
  const [crewmate, setCrewmate] = useState({ name: "", speed: "", color: "" });

  useEffect(() => {
    fetchCrewmates();
  }, []);

  async function fetchCrewmates() {
    const { data } = await supabase.from("crewmates").select();
    setCrewmateInfo(data);
    console.log("Data ", data);
  }

  async function createCrewmate() {
    await supabase.from("crewmates").insert([crewmate]).single();
    setCrewmate({ name: "", speed: "", color: "" });
    fetchCrewmates();
  }

  return (
    <div className="Create">
      <div>
        <h1>Create a New Crewmate</h1>
        <img src="./public/amongus1.png" className="welcome-images" />
        <br />
      </div>
      <form className="form-container">
        <div className="mini-container">
          <label className="top-text"> Name: </label>
          <input type="text" name="name" value={crewmate.name} onChange={(e) => setCrewmate({ ...crewmate, name: e.target.value })}placeholder="Enter crewmate's name"/>
        </div>
        <div className="mini-container">
          <label className="top-text">Speed (mph):</label>
          <input type="text" name="speed" value={crewmate.speed} onChange={(e) => setCrewmate({ ...crewmate, speed: e.target.value })} placeholder="Enter speed in mph"/>
        </div>
        <div className="mini-container">
          <label className="top-text">Color: </label>
          <li> <input id="Red" name="color" type="radio" value="Red" checked={crewmate.color === "Red"} onChange={(e) => setCrewmate({ ...crewmate, color: e.target.value })}/> Red</li>
          <li> <input id="Green" name="color" type="radio" value="Green" checked={crewmate.color === "Green"} onChange={(e) =>setCrewmate({ ...crewmate, color: e.target.value })}/> Green </li>
          <li> <input id="Blue" name="color" type="radio" value="Blue" checked={crewmate.color === "Blue"} onChange={(e) => setCrewmate({ ...crewmate, color: e.target.value })}/>Blue </li>
        </div>
      </form>
      <button onClick={createCrewmate} className="btn">
        Create a Crewmate
      </button>
    </div>
  );
};

export default Create;
