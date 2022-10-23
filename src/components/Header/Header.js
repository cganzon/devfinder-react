import "./Header.css";

export default function Header(props) {
    return (
        <header className="header">
            <h1 className="website">devfinder</h1>
            <button className="theme-toggle" onClick={props.toggleDarkMode}>
                {props.darkMode ? "Light" : "Dark"}
                <img src={`./images/icon-${props.darkMode ? "sun.svg" : "moon.svg"}`} />
            </button>
        </header>
    );
};