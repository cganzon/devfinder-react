import "./UserData.css";

export default function UserData(props) {
    console.log(props.user);

    function convertDate(datetime) {
        const date = new Date(datetime);
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "short" });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    const joinDate = convertDate(props.user.created_at);

    return (
        <section className="user-card">
            <div className="user-top">
                <img className="avatar" src={props.user.avatar_url} alt={props.user.name} />
                <div className="user-info">
                    <div className="user-info-inner">
                        <h2 className="name">{props.user.name ? props.user.name : props.user.login}</h2>
                        <p className="login">@{props.user.login}</p>
                    </div>
                    <p className="joined">Joined {joinDate}</p>
                </div>
            </div>
            <div className="user-middle">
                <p className={`bio ${!props.user.bio ? "not-available": ""}`}>{props.user.bio ? props.user.bio : "This profile has no bio"}</p>
                <div className="stats">
                    <div className="stat">
                        <h3 className="stat-title">Repos</h3>
                        <p className="stat-number">{props.user.public_repos}</p>
                    </div>
                    <div className="stat">
                        <h3 className="stat-title">Followers</h3>
                        <p className="stat-number">{props.user.followers}</p>
                    </div>
                    <div className="stat">
                        <h3 className="stat-title">Followng</h3>
                        <p className="stat-number">{props.user.following}</p>
                    </div>
                </div>
            </div>
            {/* <p>Location: {props.user.location ? props.user.location : "Not Available"}</p>
            <p>Blog: {props.user.blog ? props.user.blog : "Not Available"}</p>
            <p>Twitter: {props.user.twitter_username ? props.user.twitter_username : "Not Available"}</p>
            <p>Company: {props.user.company ? props.user.company : "Not Available"}</p> */}
        </section>
    );
};