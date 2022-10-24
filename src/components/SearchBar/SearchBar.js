import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar() {
    const [ user, setUser ] = useState({
        username: ""
    });

    console.log(user.username)
    
    function handleChange(e) {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    return (
        <form className="search-form">
            <input type="text" name="username" value={user.username} onChange={handleChange}/>
            <button>Search</button>
        </form>
    );
};