import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import pages
//import Upload from "./pages/upload.js";
import SignUp from "./pages/signup.js"; 
import LogIn from "./pages/login.js"; 

import Profile from "./pages/profile.js";
import Charts from "./pages/charts.js";
import Schools from "./pages/schools.js";
import Clubs from "./pages/clubs.js";
import ArtistBillboard from "./pages/artistBillboard.js";
import SongBillboard from "./pages/songBillboard.js";
import Footer from "./components/Footer";

//import components
//import Header from "./components/header.js";
import Navigation from "./components/navigation.js";
import SignUpLogIn from "./components/signuplogin.js";

import './App.css'

//const path = require("path");
//app.use(express.static(path.join(__dirname, "build"))); //lines added to use render for hosting

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <SignUpLogIn />
                <Routes>
                    <Route path="/" element={<Charts />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/schools" element={<Schools />} />
                    <Route path="/clubs" element={<Clubs />} />
                    <Route path="/songBillboard" element={<SongBillboard />} />
                    <Route path="/artistBillboard" element={<ArtistBillboard />} />
                </Routes>
                <Footer />

            </div>
        </Router>
    );
};

export default App;
