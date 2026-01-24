import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useAppDispatch } from "./redux/hook";
import { useEffect } from "react";
import { fetchMe } from "./redux/features/auth/authSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
