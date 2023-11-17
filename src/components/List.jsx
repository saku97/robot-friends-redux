import "./List.css";
import { useSelector } from "react-redux";

const List = () => {
  const friends = useSelector((state) => state.friendsState.friends);
  // kan kayen props 'friends
  // deconstruction kima hadi wela props
  return (
    <div>
      <h1>List of Robot friends</h1>
      <input type="text" placeholder="search" />
      <div className="robots">
        {friends.map((e, i) => {
          return (
            <div key={i} className="robot">
              <h1>{e.name}</h1>
              <img src={e.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default List;
