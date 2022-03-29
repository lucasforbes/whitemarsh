import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AmplifyProvider>
      <Authenticator.Provider>
        <App />
      </Authenticator.Provider>
    </AmplifyProvider>
  </StrictMode>,
  rootElement
);
