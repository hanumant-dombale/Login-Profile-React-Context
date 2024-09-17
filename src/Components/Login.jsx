import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="w-96 h-96 flex items-center justify-center flex-col gap-4 bg-white text-black p-7 text-2xl rounded-2xl border-2 border-white">
      <h1 className="text-5xl mb-4">Login</h1>
      <input
        className="py-4 px-2 rounded-lg bg-white border-2 focus:outline-none focus:border-gray-600"
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="py-4 px-2 rounded-lg bg-white border-2 focus:outline-none focus:border-gray-600"
        type="text"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
      className="mt-5 bg-black text-white hover:bg-white hover:text-black hover:border-black rounded-xl"
      onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
