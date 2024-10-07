import {GitHubInfo} from "./github_info.js"
import {users} from "./users.js"




function App() {
  const getGit = users.filter(user => user.followers >= 10000);

  return (
    <div className="App">
      <h1>Sample github repositories</h1>
      <h2>
        <ol>
          {getGit.map((user, index) => (
            <li key={index}>
              <GitHubInfo UserInfo={user}/>
            </li>
          ))}
        </ol>
      </h2>

    </div>
  );
}

export default App;

