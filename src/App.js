import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar";
import UserData from "./components/UserData";
import "./App.css";

export default function App() {
    const isDarkMode = JSON.parse(localStorage.getItem("dark-mode"));
    const [ darkMode, setDarkMode ] = useState(isDarkMode);
    console.log(darkMode)

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode);
    };

    useEffect(() => {
        localStorage.setItem("dark-mode", darkMode);
    }, [darkMode]);

    return (
        <div className={`App ${darkMode ? "dark" : ""}`}>
            <main className="container">
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <SearchBar />
                <UserData />
            </main>
        </div>
    );
};