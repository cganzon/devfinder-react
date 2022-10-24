import "./UserData.css";

export default function UserData(props) {
    console.log(props.user);

    return (
        <section className="user-card">
            <div className="user-top">
                <img className="avatar" src={props.user.avatar_url} alt={props.user.name} />
                <div className="user-info">
                    <div className="user-info-inner">
                        <h2 className="name">{props.user.name ? props.user.name : props.user.login}</h2>
                        <p className="login">@{props.user.login}</p>
                    </div>
                    <p className="joined">Joined {props.user.created_at}</p>
                </div>
            </div>
            {/* <p>{props.user.bio ? props.user.bio : "This profile has no bio"}</p>
            <p>Repos: {props.user.public_repos}</p>
            <p>Followers: {props.user.followers}</p>
            <p>Following: {props.user.following}</p>
            <p>Location: {props.user.location ? props.user.location : "Not Available"}</p>
            <p>Blog: {props.user.blog ? props.user.blog : "Not Available"}</p>
            <p>Twitter: {props.user.twitter_username ? props.user.twitter_username : "Not Available"}</p>
            <p>Company: {props.user.company ? props.user.company : "Not Available"}</p> */}
        </section>
    );
};