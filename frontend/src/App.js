import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import { Authprovider } from "./context/Authcontext";
import Signin from "./components/Signin";

import {Route, BrowserRouter, Routes} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <Authprovider>
    <Header />
    <Routes>
    <Route Component={Signin} path="/signin" />
    <Route Component={PrivateRoute}>
    <Route Component={Home} path="/" />
    <Route Component={Login} path="/login" />
    </Route>
    </Routes>
    </Authprovider>
    </BrowserRouter>
  );
}

export default App;
