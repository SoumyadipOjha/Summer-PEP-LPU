import React from "react";

const LoginPage = () => {
  const[username, setUser] = React.useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Login form submitted");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
