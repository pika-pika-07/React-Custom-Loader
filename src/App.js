import "./App.css";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "loader",
      element: <Body />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
