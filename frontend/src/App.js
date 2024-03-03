// Importing modules
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BookLog from "./pages/BookLog";
import LandingPage from './pages/LandingPage'
import Discover from "./pages/Discover";
import AboutPage from "./pages/AboutPage";

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
      <AboutPage/>
      <BookLog/>
      <Discover/>
    </div>
    </>
  );
}

export default App;
