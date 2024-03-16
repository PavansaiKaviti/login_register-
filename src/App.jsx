import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [Fullname, setFullname] = useState("");
  const [Email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  //onchange name
  const onChangeFullname = (e) => {
    setFullname(e.target.value);
  };
  const onChangegmail = (e) => {
    setemail(e.target.value);
  };
  const onChangepassword = (e) => {
    setPassword(e.target.value);
  };
  //onsubmit
  const onSubmitform = (e) => {
    e.preventDefault();
    console.log({ Fullname, Email, Password });
  };

  return (
    <div id="container">
      <form id="form-data" onSubmit={onSubmitform}>
        <div>
          <img src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t39.30808-6/429834200_2104821603209350_6598924110214709275_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QAmD07UdFVQAX95Mj5S&_nc_ht=scontent.fmkc1-1.fna&oh=00_AfAXYXoAXTbeCuLuZQi5A4lJmNFYVyTrBUf3aSvTL7I_zw&oe=65FAB499"></img>
        </div>
        <div>
          <div class="labelling_gap">
            <label for="fullname">Full Name:</label>
            <input
              onChange={onChangeFullname}
              type="text"
              id="fullname"
              required
              value={Fullname}
            ></input>
          </div>
          <div class="labelling_gap">
            <label for="email">Email:</label>
            <input
              onChange={onChangegmail}
              type="email"
              id="email"
              required
              value={Email}
            ></input>
          </div>
          <div class="labelling_gap">
            <label for="pass">Password:</label>
            <input
              onChange={onChangepassword}
              type="password"
              id="pass"
              required
              value={Password}
            ></input>
          </div>
        </div>
        <button type="submit">register</button>
      </form>
    </div>
  );
};

export default App;
