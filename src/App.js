import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from './components/Login';
import { useAuth } from './context/AuthContext';
import AdminPage from './pages/Admin';
import NotFound from './pages/NotFound';
import Unauthorised from "./pages/Unauthorised";
import UserPage from './pages/User';

function App() {
  const { auth } = useAuth();
  const loggedIn = auth.isLoggedIn;
  const PrivateRoute = ({ isAuthenticated, children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  }
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <PrivateRoute isAuthenticated={loggedIn}>
        <Navigate to="/home" />
      </PrivateRoute>,
    },
    {
      path: "/home",
      element: <PrivateRoute isAuthenticated={loggedIn}>
        {auth.role === "admin" ? <Navigate to="/home/admin" /> : auth.role === "user" ? <UserPage /> : <Unauthorised />}
      </PrivateRoute>,
    },
    {
      path: "/home/admin",
      element: <PrivateRoute isAuthenticated={loggedIn}><AdminPage /></PrivateRoute>,
    },
    {
      path: "/home/admin/users",
      element: <PrivateRoute isAuthenticated={loggedIn}><AdminPage showUsers={true} /></PrivateRoute>,
    },
    {
      path: "/home/user/counter",
      element: <PrivateRoute isAuthenticated={loggedIn}><UserPage showCounter={true} /></PrivateRoute>,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
