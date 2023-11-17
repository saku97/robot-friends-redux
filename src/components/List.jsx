import "./List.css";
const List = ({ friends }) => {
  // deconstruction kima hadi wela props
  return (
    <div>
      <h1>List of Robot friends</h1>
      <input type="text" placeholder="search" />
      <div className="robots">
        {friends.map((e, i) => {
          return (
            <div className="robot">
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
