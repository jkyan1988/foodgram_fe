import '../styles/Explore.scss';


function Explore({ user, posts }) {
    return (
        <div style={{
            maxWidth: '600px',
            margin: '0px auto',
            backgroundColor: "white",
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "10px"

        }}>
            <div className="gallery">
                {posts.map((post) => {
                    if (post.user_id !== user.id) {
                        return (
                            <img
                                style={{
                                    paddingTop: "10px",
                                    paddingBottom: "10px"
                                }}
                                className="item"
                                alt=""
                                src={post.post}
                            />
                        )
                    }
                })}


            </div></div>
    )
}

export default Explore;