import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserData from "./components/UserData";

export default function App() {
    return (
        <main className="container">
            <h1>devfinder</h1>
            <Header />
            <SearchBar />
            <UserData />
        </main>
    );
};