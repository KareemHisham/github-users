import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-1-4ankoy.us.auth0.com"
      clientId="qRdDJHS5S1doCNJIa1WOkkLCNuQpxSfv"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </Auth0Provider>
  </React.StrictMode>
);
