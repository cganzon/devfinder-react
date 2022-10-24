import { useState, useEffect } from "react";
import "./SearchBar.css";

export default function SearchBar() {
    const [ username, setUsername ] = useState("");
    
    function handleChange(e) {
        setUsername(e.target.value);
    };

    return (
        <form className="search-form">
            <input type="text" name="username" value={username} onChange={handleChange}/>
            <button>Search</button>
        </form>
    );
};