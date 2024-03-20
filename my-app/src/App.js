import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.js";
import './App.css'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </Router>
    );
};

export default App;