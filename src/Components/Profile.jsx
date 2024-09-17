import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="w-96 h-96 flex items-center justify-center flex-col gap-4 bg-white text-black p-7 text-2xl rounded-2xl border-2 border-white">
        <h1>please login</h1>
      </div>
    );
  }

  return (
    <div className="w-96 h-96 flex items-center justify-center flex-col gap-4 bg-white text-black p-7 text-2xl rounded-2xl border-2 border-white">
      <h1>Welcome {user.username} your username and passwoed is:</h1>
      <h1>Username: {user.username}</h1>
      <h1>Password: {user.password}</h1>
    </div>
  );
}

export default Profile;
