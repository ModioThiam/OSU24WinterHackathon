import React from "react";
import './About.css'; 

function AboutPage() {
    return (
        <>
        <div id="about">
            <div className="about-contianer">
                <div className="about-content">
                    <h1>About</h1>
                    <div className="about-h3">
                        
                    </div>
                    <h3>
The Reading Corner is dedicated to helping book enthusiasts of all levels find their next great read. Our mission is to provide a platform where users can easily log the books they're currently reading, discover new titles across various genres, and receive tailored recommendations based on their preferences.
</h3>
<h3>
What We Offer:
</h3>
<h3>
My Library: Keep track of the books you're currently reading using the Book Logging feature to set your reading goals, and monitor your progress effortlessly.
</h3>
<h3>
My To Read: Add books to your to-read-list by using our Discover Search Engine! 
</h3>
<h3>
Discover New Books: Explore a vast collection of books curated to cater to different interests and genres. Find your next favorite read with ease using a keyword search, and add to your To-Read-List.
</h3>
<h3>
Personalized Recommendations: Receive tailored book recommendations based on your author of choice and book category.</h3>
<div class="btn-container">
                <button onclick="window.open('./#about')">My Library</button>
                <button onclick="location.href= './#chatbot-section'">Discover</button>
                <button onclick="location.href= './#chatbot-section'">Log Book</button>
                
                
            </div>   
                </div>
            
            </div>
    </div>
        </>
    )
}



export default AboutPage;