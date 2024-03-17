import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [Formdata, setFormdata] = useState({
    Fullname: "",
    Email: "",
    Password: "",
  });
  const onChangehandler = (e) => {
    setFormdata({
      ...Formdata,
      [e.target.name]: e.target.value,
    });
  };
  const onsubmitchanges = (e) => {
    e.preventDefault();
    console.log(Formdata);
  };
  return (
    <div id="container">
      <form id="form-data" onSubmit={onsubmitchanges}>
        <div>
          <img src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t39.30808-6/429834200_2104821603209350_6598924110214709275_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QAmD07UdFVQAX95Mj5S&_nc_ht=scontent.fmkc1-1.fna&oh=00_AfAXYXoAXTbeCuLuZQi5A4lJmNFYVyTrBUf3aSvTL7I_zw&oe=65FAB499"></img>
        </div>
        <div>
          <div class="labelling_gap">
            <label for="fullname">Full Name:</label>
            <input
              onChange={onChangehandler}
              type="text"
              id="fullname"
              required
              value={Formdata.Fullname}
              name="Fullname"
            ></input>
          </div>

          <div class="labelling_gap">
            <label for="email">Email:</label>
            <input
              onChange={onChangehandler}
              type="email"
              id="email"
              required
              value={Formdata.Email}
              name="Email"
            ></input>
          </div>
          <div class="labelling_gap">
            <label for="pass">Password:</label>
            <input
              onChange={onChangehandler}
              type="password"
              id="pass"
              required
              value={Formdata.Password}
              name="Password"
            ></input>
          </div>
        </div>
        <button type="submit">login</button>
        <div class="link">
          <Link to="/register">register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
