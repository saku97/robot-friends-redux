import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.dataset.theme = theme;
  }, [theme]);

  const [friends, setFriends] = useState([]); // deconstructe l.friends chaque wahda
  function addFriend(friend) {
    // hadi l fonction li tajoute friend
    setFriends([...friends, friend]);
  }

  return (
    <>
      <header>
        <h1>My Robots friends</h1>
        <button className="Light"> Light</button>
      </header>
      <Form addFriend={addFriend} />
      <List friends={friends} />
    </>
  );
}

export default App;
