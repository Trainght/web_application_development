import React, { useState } from "react";

import "./App.css";

function App() {
  const [users] = useState([
    {
      url: "http://github.com/Trainght",
      imgURL: "https://avatars.githubusercontent.com/u/119283041?v=4",
      alt: "Nathachai Charoenchai",
      followers: 13,
    },
    {
      url: "https://github.com/facebook/react",
      imgURL: "https://avatars.githubusercontent.com/u/69631?v=4",
      alt: "facebook",
      followers: 25800,
    },
    {
      url: "https://github.com/vercel/next.js",
      imgURL: "https://avatars.githubusercontent.com/u/14985020?v=4",
      alt: "vercel",
      followers: 17500,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFollowers, setShowFollowers] = useState(false);

  const currentUser = users[currentIndex];

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    setShowFollowers(false); // Hide follower
  };

  const handleNext = () => {
    if (currentIndex < users.length - 1) setCurrentIndex(currentIndex + 1);
    setShowFollowers(false);
  };

  const toggleFollowers = () => {
    setShowFollowers(!showFollowers);
  };

  return (
    <div className="App">
      <h1>GitHub Repositories</h1>
      <div>
        <img
          src={currentUser.imgURL}
          alt="GitHub Avatar"
          width={300}
          height={300}
        />

        <a
          href={currentUser.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {currentUser.alt}
        </a>

        {showFollowers && <p>{currentUser.followers} followers</p>}

        <button onClick={toggleFollowers} >
          {showFollowers ? "Hide followers" : "Show followers"}
        </button>

        <div>
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === users.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;