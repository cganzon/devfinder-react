import { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar";
import UserData from "./components/UserData";
import "./App.css";

export default function App() {
    const [ darkMode, setDarkMode ] = useState(false);

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode);
    };

    return (
        <main className={`App ${darkMode ? "dark" : ""}`}>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <SearchBar />
            <UserData />
        </main>
    );
};