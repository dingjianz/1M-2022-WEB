import React, { useState } from "react";
import ProjectList from "./pages/projectList";
import TryUseArray from "./pages/tryUseArray";

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [flag, setFlag] = useState<boolean>(true);
  return <div>{flag ? <ProjectList /> : <TryUseArray />}</div>;
};

export default App;
