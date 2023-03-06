import '../styles/EditPost.scss'

function EditPost({
    isEditing,
    handleSubmit,
    setEditDescription,
    setEditPost,
    setIsEditing
}) {

    return (
        <div style={isEditing === false ? { display: "none" } : { display: "" }}>
            {/* <h3 className="edit-post-title">Edit Post</h3> */}
            <form className="edit-post" onSubmit={handleSubmit}>
                <button className="edit-cancel-btn" onClick={(e) => {
                    e.stopPropagation()
                    setIsEditing(false)
                }}>X</button>
                <input className="edit-post-url" id="Edit Post URL" name="Edit Post URL" type="text" placeholder="Edit Post URL" onChange={(e) => setEditPost(e.target.value)} />
                <input className="edit-post-desc" type="text" placeholder="Edit Caption" onChange={(e) => setEditDescription(e.target.value)} />
                <button className="edit-submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default EditPost;