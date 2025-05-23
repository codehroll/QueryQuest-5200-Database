import React from "react";
import "./App.css";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import QueryQuest from "./QueryQuest";
import Signin from "./QueryQuest/Account/Signin";
import Signup from "./QueryQuest/Account/Signup";
import store from "./QueryQuest/store";
import { Provider } from "react-redux";
import ProtectedRoute from "./QueryQuest/Account/ProtectedRoute";
import Session from "./QueryQuest/Account/Session";
function App() {
  return (
    <Provider store={store}>
      <Session>
        <HashRouter>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="/QueryQuest/Signin" />} />
              {/* Standalone pages */}
              <Route path="/QueryQuest/Signin" element={<Signin />} />
              <Route path="/QueryQuest/Signup" element={<Signup />} />

              {/* Protected Pages */}
              {/* Pages with Sidebar */}
              <Route
                path="/QueryQuest/*"
                element={
                  <ProtectedRoute>
                    <QueryQuest />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </HashRouter>
      </Session>
    </Provider>
  );
}

export default App;
