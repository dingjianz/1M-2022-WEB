/* eslint-disable */
import React, { useState } from "react";
import ProjectList from "./pages/projectList";
import TryUseArray from "./pages/tryUseArray";
import Login from "./pages/login";

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [flag, setFlag] = useState<boolean>(false);
  return <div>{flag ? <ProjectList /> : <Login />}</div>;
};

export default App;
