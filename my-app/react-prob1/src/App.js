import * as React from "react";
import './App.css';
import ReactDOM from "react-dom";

function GitHubRepoURL(){
  return <h2><a href="https://github.com/Trainght">My GitHub ropository</a></h2> 
}
function GitHubAvatar(){
  return <img 
          src="https://avatars.githubusercontent.com/u/119283041?s=400&u=418913adbf43640454d666d49140d6979c1a93a6&v=4"
          alt="avata_github"
          />
}

function App() {
  return (
    <div class="component">
        <h2 class="text_one">My Github infomation</h2>
        <GitHubAvatar/>
        <GitHubRepoURL/>
    </div>

  );
}

export default App;
