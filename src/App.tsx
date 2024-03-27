import React from "react";
import { useScrollToTop } from "./Hooks/useScrollToTop";
import { UserStorage } from "./context/UserContext";
import { Layout } from "./Components/Layout";
import "./App.css";

export function App() {
  useScrollToTop();

  return (
    <div className="App">
      <UserStorage>
        <Layout />
      </UserStorage>
    </div>
  );
}
