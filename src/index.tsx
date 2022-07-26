import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./assets/Styles/globalStyles";
import { Provider } from "react-redux";
import { store } from "Store/store";
import { StoreProvider } from "Store/StoreProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StoreProvider>
        <GlobalStyles />
        <App />
      </StoreProvider>
    </Provider>
  </React.StrictMode>
);
