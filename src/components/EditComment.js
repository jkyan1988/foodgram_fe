import '../styles/comment.scss'

function EditComment({ handleSubmit, setEditComment }) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="edit-comment-input" onChange={(e) => setEditComment(e.target.value)} />
                <button className="edit-comment-btn">Edit</button>
            </form>
        </div>
    )
}

export default EditComment;