import React from "react";
import Login from "./Login";
import MainSection from "./MainSection";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return <>{code ? <MainSection code={code} /> : <Login />}</>;
}

export default App;
