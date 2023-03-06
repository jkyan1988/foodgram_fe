import '../styles/userprofile.scss';
import Youtube from 'react-youtube';

function UserProfile({ user, posts }) {

    const opts = {
        height: '350',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div style={{
            maxWidth: '600px', margin: '0px auto'
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "20px 0px",
                backgroundColor: "white",
                paddingTop: "10px",
                paddingBottom: "10px",
                borderRadius: "10px"
                // borderBottom: "1px solid grey"

            }}>
                <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                    <img style={{ width: "160px", height: "160px", borderRadius: "80px" }} alt=""
                        src={user.profile_pic}
                    />
                </div>
                <div style={{ paddingLeft: "10px", paddingRight: "10px", paddingBottom: "10px" }}>
                    <h4>{user.username}</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "108%", marginBottom: "10px" }}>
                        Location: {user.location}
                    </div>
                    <div>
                        About me: {user.bio}
                    </div>
                </div>
            </div>
            <div style={{
                backgroundColor: "white",
                paddingTop: "10px",
                paddingBottom: "10px",
                borderRadius: "10px"
            }}
                className="gallery"
            >
                {posts.map((post) => {
                    if (post.user_id === user.id) {
                        return (

                            <img style={{
                                paddingTop: "10px",
                                paddingBottom: "10px"
                            }}
                                className="item" alt="" src={post.post} />



                        )
                    }
                })}


            </div>
        </div>
    )
}

export default UserProfile;