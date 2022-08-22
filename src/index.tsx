import ReactDOM from "react-dom/client";
import App from "./App";
import { loadDevTools } from "jira-dev-tool";
import { AppProviders } from "./pages/context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

loadDevTools(() =>
  root.render(
    <AppProviders>
      <App />
    </AppProviders>
  )
);
