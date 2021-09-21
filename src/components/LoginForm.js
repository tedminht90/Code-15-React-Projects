import { useState } from "react";
import axios from "axios";

const projectID = "4afdd2e2-8200-4a78-b7a8-3fcd504b2011";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      //username | password => chatengine => give messages
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      //work out => loggin in
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      //error => try with new username
      //console.log(error);
      setError("Oops, incorrect credentials.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h1 className="error">{error}</h1>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
