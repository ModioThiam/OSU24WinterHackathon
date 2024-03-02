import React from "react";
import './LandingPage.css'; 

function LandingPage() {
    return (
        <>
        <div className="landingpage-contianer">
            <div className="landingpage-content">
                <h1>The Reading Corner</h1>
                <h3>Track Your Reads and Discover More</h3>
                <img id="myImage" src="images/reading2.jpeg" alt="books in library"/>
            <button class="start-btn">Start Now</button>
            </div>
        
        </div>
        </>
    )
}

export default LandingPage;