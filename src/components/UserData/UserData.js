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
            <div className="user-bottom">
                <div className={`link-wrapper ${!props.user.twitter_username ? "not-available" : ""}`}>
                    <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" fill="currentColor"/>
                    </svg>
                    {
                        !props.user.twitter_username ?
                        <p className="not-available">Not Available</p> :
                        <a href={`https://twitter.com/${props.user.twitter_username}`} target="_blank">{props.user.twitter_username}</a>
                    }
                </div>
            </div>
            {/* <p>Location: {props.user.location ? props.user.location : "Not Available"}</p>
            <p>Blog: {props.user.blog ? props.user.blog : "Not Available"}</p>
            <p>Company: {props.user.company ? props.user.company : "Not Available"}</p> */}
        </section>
    );
};