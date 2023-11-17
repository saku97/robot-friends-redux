import { useState } from "react";
import "./Form.css";
const Form = ({ addFriend }) => {
  //addfriend is the prop
  const [value, setValue] = useState(""); //ndiro value besh  ygeneraw fel input

  return (
    <div>
      <h1>Add New Friend</h1>
      <div className="name">
        <p>Robot Name :</p>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="C3PO R2D2"
        />
      </div>
      <div>
        <p>Robot Image</p>
        <div className="imageFormat">
          <img src={"https://robohash.org/" + value} alt="" />
        </div>
      </div>
      <button
        onClick={() => {
          //ki tkon dayer form li treloader tsema dir onsubmit prevent default
          // on click nzido name w img li homa l value
          addFriend({
            name: value,
            image: "https://robohash.org/" + value,
          });
          setValue("");
        }}
      >
        Add Friend
      </button>
    </div>
  );
};
export default Form;
