import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeProvider";
import { useGetMeQuery } from "./redux/api/authApi";
import { clearUser, setUser } from "./redux/features/auth/authSlice";

// eslint-disable-next-line react-refresh/only-export-components
const AuthLoader = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const { data, isError } = useGetMeQuery(undefined);

  React.useEffect(() => {
    if (data?.user) {
      dispatch(setUser(data.user));
    } else if (isError) {
      dispatch(clearUser());
    }
  }, [data, isError, dispatch]);

  return <>{children}</>;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <AuthLoader>
          <App />
        </AuthLoader>
        <Toaster position="top-right" />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
