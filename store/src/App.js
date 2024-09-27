import React from "react";
import {Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Store from "./Store";
import Edit from "./Edit";
import Cart from "./Cart";
import SignUp from "./SignUp";
import { UserHttp } from "./UserHttp";
import AddBoard from "./AddBoard";

function App() {
    return (
      <UserHttp>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Store" element={<Store />} />
                <Route path="/Edit" element={<Edit />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Edit" element={<Edit Login={Login} />} />
                <Route path="/AddBoard" element={<AddBoard />} />
            </Routes>
      </UserHttp>
    );
}

export default App;
