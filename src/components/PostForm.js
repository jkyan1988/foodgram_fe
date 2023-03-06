import React, { useState } from "react";
import '../styles/postform.scss'

function PostForm({ post, setPost, showPostForm }) {
    const [postURL, setPostURL] = useState("");
    const [description, setDescription] = useState("");

    // SUBMIT POST
    function handlePostSubmit(e) {
        e.preventDefault();
        fetch("http:/localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json",
            },
            body: JSON.stringify(
                {
                    post: postURL,
                    description: description,
                }
            ),
        }).then(r => r.json())
            .then(newPost => setPost([newPost, ...post]))
        e.target.reset()
    }
    return (
        <div style={showPostForm === false ? { display: "none" } : { display: "" }} className="create-post">
            {/* <h3 className="post-title">Post it!</h3> */}
            <form className="post-form-container" onSubmit={handlePostSubmit}>
                <input id="post-form" type="text" className="post-form" placeholder="add URL" onChange={(e) => setPostURL(e.target.value)} />
                <input id="desc-form" type="text" className="desc-form" placeholder="add description" onChange={(e) => setDescription(e.target.value)} />
                <button className="submit-form-btn">Submit</button>
            </form>
        </div>
    )
}

export default PostForm;