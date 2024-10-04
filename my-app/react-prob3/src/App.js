import {GitHubInfo} from "./github_info.js"
import {users} from "./users.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <GitHubInfo UserInfo={users[0]} />
      <GitHubInfo UserInfo={users[1]} />
      <GitHubInfo UserInfo={users[2]} />  
    </div>

  );
}

export default App;
