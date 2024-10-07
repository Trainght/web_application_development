import {GitHubInfo} from "./github_info.js"
import {users} from "./users.js"




function App() {
  const Mostfollowers = users.filter(user => user.followers >= 10000);

  return (
    <div className="App">
      <h1>Popular GitHub Repositories</h1>
      <h2>
        <ol>
          {Mostfollowers.map((user, index) => (
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

