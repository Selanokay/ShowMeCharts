import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.js";
import SignupPage from "./pages/signup.js"; 
import LoginPage from "./pages/login.js"; 
import Header from "./pages/header.js";
import signuplogin from "./pages/signuplogin.js";
import Navigation from "./pages/navigation.js";
import Profile from "./pages/profile.js";
import Charts from "./pages/charts.js";
import './App.css'
import axios from 'axios';



const App = () => {

    //Creating useState.
    const [songs, setSongs] = useState([]);

    //Using axios to call backend data.
    const fetchData = async () => {
        const { data } = await axios.get("/api/allsongs");

        setSongs(data);
    };

    console.log(songs);

    //calling fetchData function
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;