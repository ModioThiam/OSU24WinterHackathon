// Importing modules
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from './pages/LandingPage'

function App() {
  // usestate for setting a javascript
  // object for storing and using data
  const [data, setdata] = useState({
    name: "",
    age: 0,
    date: "",
    programming: "",
  });

  // Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("http://127.0.0.1:5000/").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setdata({
          name: data.Name,
          age: data.Age,
          date: data.Date,
          programming: data.programming,
        });
      })
    );
  }, []);

  return (
    <>
    <div className="App">
      <Navbar/>
      <LandingPage/>
    </div>
    </>
  );
}

export default App;
