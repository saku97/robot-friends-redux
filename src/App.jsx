import { useState, createContext } from "react";
import "./App.css";
import { useEffect } from "react";
import List from "./components/List";
import Form from "./components/Form";
export const FriendsContext = createContext({
  friends: [],
  addFriend: (friend) => {},
});

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.dataset.theme = theme;
  }, [theme]); // bsh ybedel theme

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
      <FriendsContext.Provider
        value={{
          friends,
          addFriend,
        }}
      >
        <Form />
        <List />
      </FriendsContext.Provider>
    </>
  );
}

export default App;
