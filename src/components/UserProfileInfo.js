import '../styles/userprofileinfo.scss';

function UserProfileInfo({ user }) {
    return (
        <div>
            <div>
                <div className="profile-pic-holder">
                    <img src={user.profile_pic} className="userpost" />
                </div>
                <div className="user-profile-info">
                    <span className="username">{user.username}</span>
                    <br></br>
                    <span className="location">{user.location}</span>
                </div>
            </div>
            {/* <h4 className="username">{user.username}</h4> */}
        </div>
    )
}
export default UserProfileInfo;