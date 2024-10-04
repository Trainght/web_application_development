import "./App.css";
import {GitHubRepoURL ,GitHubAvatar } from "./github_data.js";


function GitHubInfo() {
  const userInfo= {
    url : "https://github.com/Trainght",
    imgURL: "https://avatars.githubusercontent.com/u/119283041?v=4",
    alt:"Nathachai Charoenchai"
  }
  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar url ={userInfo.imgURL}/>
      <GitHubRepoURL url = {userInfo.url}/>
    </div>
  );
}

export default GitHubInfo;
