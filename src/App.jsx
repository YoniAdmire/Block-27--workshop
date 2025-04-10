import { useState } from "react";
import Authenticate from "//authenticate";
import SignUpForm from "//signupform";
import "./App.css";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="app">
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </div>
  );
}

