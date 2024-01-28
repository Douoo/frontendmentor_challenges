import { useEffect, useState } from "react";
import Center from "./components/Layouts/Center";
import Container from "./components/Layouts/Container";
import "./App.css";

import SearchInput from "./components/Form/SearchInput";
import Header from "./components/Header/Header";
import User from "./components/User/User";

function App() {
  const [user, setUser] = useState(null);

  const [noResult, setResult] = useState(false);
  const [noData, setNoData] = useState(false);

  const [username, setUsername] = useState(null);

  const ENDPOINT = "https://api.github.com/users";
  const fetchGitData = async () => {
    const response = await fetch(`${ENDPOINT}/${username ?? `octocat`}`);
    const data = await response.json();
    if (data.message == "Not Found") {
      setResult(true);
      setNoData(true);
      setTimeout(() => {
        setNoData(false);
      }, 1000);
    } else {
      setResult(false);
      setUser(data);
    }
  };

  const handleUsernameChange = (event) => {
    const { value } = event.target;
    setUsername(value);
  };

  useEffect(() => {
    fetchGitData();
  }, []);

  return (
    <Center>
      {!user ? (
        <h1>Loading...</h1>
      ) : (
        <Container>
          <Header />
          <form
            onSubmit={(event) => {
              event.preventDefault();
              fetchGitData();
            }}
          >
            <SearchInput
              type="text"
              id="username"
              name="query"
              onChange={handleUsernameChange}
              placeholder="Search GitHub username…"
              noResult={noResult}
              noData={noData}
            />
          </form>
          <User userData={user} />
        </Container>
      )}
    </Center>
  );
}

export default App;
