import * as React from "react";
import './App.css';

export  function GitHubRepoURL({url}){
  return <h2><a href={url} target="blank_">GitHub reposity.</a></h2> 
}
export  function GitHubAvatar({url,size = 50}){
  return  <img 
          src={url}
          alt="avata_github"
          width={size}
          height={size}
          />   
}
