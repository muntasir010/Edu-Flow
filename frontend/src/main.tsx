import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
        <Toaster position="top-right" />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
