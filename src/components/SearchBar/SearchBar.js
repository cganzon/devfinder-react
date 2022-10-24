import { useState, useEffect } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
    const [ username, setUsername ] = useState("");

    useEffect(() => fetchUserData("octocat"), []);

    function fetchUserData(username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => props.saveUserData(data));
    };
    
    function handleChange(e) {
        setUsername(e.target.value);
    };
    
    function handleSubmit(e) {
        e.preventDefault();
        fetchUserData(username);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input type="text" name="username" value={username} onChange={handleChange}/>
            <button>Search</button>
        </form>
    );
};