import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { UserContextProvider } from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="flex items-center justify-center gap-6">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
