// Read.js

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

const Read = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    fetchCrewmates();
  }, []);

  async function fetchCrewmates() {
    const { data } = await supabase.from('crewmates').select();
    setCrewmates(data);
  }

  return (
    <div className="crewmate-list">
      {crewmates.map((crewmate) => (
        <Link to={`/update/${crewmate._id}`} key={crewmate._id}>
          <div className="crewmate-box">
            <h3>{crewmate.name}</h3>
            <p>Speed: {crewmate.speed} mph</p>
            <p>Color: {crewmate.color}</p>
            <Link to={`/info`}>
  <button>View Crewmate</button>
</Link>

          </div>
        </Link>
      ))}
    </div>
  );
};

export default Read;

