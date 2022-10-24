import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import UserData from "./components/UserData/UserData";
import "./App.css";

export default function App() {
    const isDarkMode = JSON.parse(localStorage.getItem("dark-mode"));
    const [ darkMode, setDarkMode ] = useState(isDarkMode);
    const [ userData, setUserData ] = useState({});

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode);
    };

    function saveUserData(user) {
        setUserData(user);
    };

    useEffect(() => {
        localStorage.setItem("dark-mode", darkMode);
    }, [darkMode]);

    return (
        <div className={`App ${darkMode ? "dark" : "light"}`}>
            <main className="container">
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <SearchBar saveUserData={saveUserData} />
                <UserData user={userData} />
            </main>
        </div>
    );
};