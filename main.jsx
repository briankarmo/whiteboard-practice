import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {
  const [drawings, setDrawings] = useState([]);

  useEffect(() => {
    axios.get('/api/drawings')
      .then(response => setDrawings(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleSaveDrawing = (drawing) => {
    axios.post('/api/drawings', drawing)
      .then(response => setDrawings([...drawings, response.data]))
      .catch(error => console.log(error));
  }

  return (
    <div className="main">
      // Add the canvas, tools, and drawing history components
    </div>
  );
}

export default Main;
