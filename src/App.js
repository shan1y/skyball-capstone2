import { useState, useEffect } from "react";
import "./App.css";
import { useAuth } from "./contexts/AuthContext";
import { Switch, Route, BrowserRouter, useHistory } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import MySchedule from "./pages/MySchedule/MySchedule";
import Layout from "./components/Layout/Layout";

import ClinicsPage from "./pages/ClinicsPage/ClinicsPage";
import SignUpForm from "./components/Auth/SignUp/SignUp";
import SignInForm from "./components/Auth/SignIn/SignInForm";

import PrivateRoute from "./components/Auth/PrivateRoute/PrivateRoute";
import CreateEvent from "./pages/CreateEvent/CreateEvent";

function App() {
  const [userId, setUserId] = useState(1);
  const { currentUser, logOut } = useAuth([]);
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
    } else {
      setUserId(currentUser.email);
    }
  }, [currentUser]);

  async function handleLogout() {
    setError("");
    try {
      console.log("loggingout");
      await logOut();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/login" component={SignInForm} />
            <PrivateRoute exact path="/">
              <Layout handleLogout={handleLogout} userId={userId}>
                <Home userId={userId} />
              </Layout>
            </PrivateRoute>
            <PrivateRoute exact path="/myschedule">
              <Layout handleLogout={handleLogout} userId={userId}>
                <MySchedule userId={userId} />
              </Layout>
            </PrivateRoute>
            <PrivateRoute exact path="/create-event">
              <Layout handleLogout={handleLogout} userId={userId}>
                <CreateEvent userId={userId} />
              </Layout>
            </PrivateRoute>
            <PrivateRoute exact path="/clinics">
              <Layout handleLogout={handleLogout} userId={userId}>
                <ClinicsPage userId={userId} />
              </Layout>
            </PrivateRoute>
            <Route exact path="/login" component={SignInForm} />
          </Switch>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
