import { useState, useEffect } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
    const [ username, setUsername ] = useState("");
    const [ error, setError] = useState(false);

    useEffect(() => fetchUserData("octocat"), []);

    function fetchUserData(username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => {
                if(data.message === "Not Found") {
                    setError(true);
                } else {
                    setError(false);
                    props.saveUserData(data);
                    setUsername("");
                };
            });
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
            <img className="search-icon" src="./images/icon-search.svg" alt="" />
            <input type="text" className="username" placeholder="Search GitHub username" name="username" value={username} onChange={handleChange}/>
            {error && <span className="error">No results</span>}
            <button className="search-btn">Search</button>
        </form>
    );
};