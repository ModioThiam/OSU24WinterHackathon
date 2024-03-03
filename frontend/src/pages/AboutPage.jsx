import React from "react";
import "./About.css";

function AboutPage() {
  return (
    <>
      <div id="about">
        <div className="about-container">
          <div className="about-content-container">
          <div className="about-content">
            <h1>About</h1>
            <div className="about-h3"></div>
            <h3>
              The core mission of The Reading Corner is to assist individuals passionate about books, regardless of their expertise level, in discovering their next captivating read. Our aim is to furnish a user-friendly platform allowing individuals to effortlessly record the books they are presently engrossed in, explore fresh titles spanning diverse genres, and receive personalized recommendations aligned with their unique preferences. In essence, we strive to create an interactive space that caters to the diverse needs of book enthusiasts, fostering a seamless and enjoyable reading experience.
            </h3>
            <h3>What We Offer:</h3>
            <h3>
              My Library: Keep track of the books you're currently reading using
              the Book Logging feature to set your reading goals, and monitor
              your progress effortlessly.
            </h3>
            <h3>
              My To Read: Add books to your To-Read List by using our Discover
              Search Engine!
            </h3>
            <h3>
              Discover New Books: Explore a vast collection of books curated to
              cater to different interests and genres. Find your next favorite
              read with ease using a keyword search, and add to your To-Read
              List.
            </h3>
            <h3>
              Personalized Recommendations: Receive tailored book
              recommendations based on your author of choice and book category.
            </h3>
            {/* <div class="btn-container">
              <button onclick="window.open('./#about')">My Library</button>
              <button onclick="location.href= './#chatbot-section'">
                Discover
              </button>
              <button onclick="location.href= './#chatbot-section'">
                Log Book
              </button>
            </div> */}
          </div>
          </div>
          <div className="about-video">
            <video autoPlay muted loop id="aboutVideo">
              <source src="images/reading2.mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
