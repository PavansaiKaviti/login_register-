import React, { useState } from "react";

const Registration = () => {
  const [formdata, setformdata] = useState({
    Fullname: "",
    Email: "",
    Gender: "",
    Dob: "",
    Password: "",
  });
  const onchangehandler = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const onsubmitform = (e) => {
    e.preventDefault();
    console.log(formdata);
  };
  return (
    <div class="Registercontainer">
      <div id="Register">
        <h1>Register Here</h1>
      </div>
      <form onSubmit={onsubmitform}>
        <div class="changes">
          <label for="Fullname">Full_Name: </label>
          <input
            onChange={onchangehandler}
            id="Fullname"
            type="text"
            value={formdata.Fullname}
            name="Fullname"
          ></input>
        </div>
        <div class="changes">
          <label for="Email">Email: </label>
          <input
            onChange={onchangehandler}
            id="Email"
            type="email"
            value={formdata.Email}
            name="Email"
          ></input>
        </div>
        <div class="changes">
          <label for="Gender">Gender: </label>
          <input
            onChange={onchangehandler}
            id="Gender"
            type="text"
            value={formdata.Gender}
            name="Gender"
          ></input>
        </div>
        <div class="changes">
          <label for="Dob">Birth: </label>
          <input
            onChange={onchangehandler}
            id="Dob"
            type="date"
            value={formdata.Dob}
            name="Dob"
          ></input>
        </div>
        <div class="changes">
          <label for="Password">Password: </label>
          <input
            onChange={onchangehandler}
            id="Password"
            type="password"
            value={formdata.Password}
            name="Password"
          ></input>
        </div>
        <button id="registerbutton" type="submit">
          register
        </button>
      </form>
    </div>
  );
};

export default Registration;
