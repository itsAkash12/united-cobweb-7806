import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {auth} from "../firebase.js"
import Login from './../components/Login/Login';
import Signup from './../components/Signup/Signup';

function Registration(){
    const [userName,setUserName] = useState("");
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUserName(user.displayName);
            }else setUserName("")
        })
    },[]);
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/signup" element={<Signup />}/>
                </Routes>
            </Router>
        </div>
    )
}
export default Registration;