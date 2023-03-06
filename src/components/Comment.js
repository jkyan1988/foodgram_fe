import { TbPencil } from 'react-icons/tb';
import { RiDeleteBinLine } from 'react-icons/ri';
import React, { useState } from 'react';
import EditComment from './EditComment';
import '../styles/comment.scss';

function Comment({ comment,
    setComment,
    onUpdateComment,
    onDeleteComment,
    findUser,
    currentUser,
    setShowComments,
    filteredUsers
}) {

    const [isEditing, setIsEditing] = useState(false)
    const [editComment, setEditComment] = useState("")

    // EDIT COMMENT
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http:/localhost:3000/comments/${comment.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: editComment,
                id: comment.id,
            }),
        })
            .then((r) => r.json())
            .then((updatedComment) => onUpdateComment(updatedComment));
        setIsEditing(false)
        e.target.reset()
    }

    // DELETE COMMENT
    function handleDelete(id) {
        fetch(`http:/localhost:3000/comments/${id}`, {
            method: "DELETE",
        })
        onDeleteComment(id)
    }


    const commentUser = findUser.filter((user) => user.id === comment.user_id).map((user) => user.username)
    const commentUserPic = findUser.filter((user) => user.id === comment.user_id).map((user) => user.profile_pic)

    const filterCurrentCommentUserId = findUser.filter((user) => user.id === comment.user_id).map((user) => user.id)

    let displayEdit
    filterCurrentCommentUserId == currentUser.id ?
        displayEdit = <TbPencil onClick={() => setIsEditing(true)} />
        :
        displayEdit = null

    let displayDelete
    filterCurrentCommentUserId == currentUser.id ?
        displayDelete = <RiDeleteBinLine onClick={() => handleDelete(comment.id)} />
        :
        displayDelete = null


    return (
        <div className="commentContainer">


            <span>
                <br></br>
                <span className="commenter-icon-container"><img className="commentericon" src={commentUserPic} /></span>
                <b className="accountName">{commentUser}</b>
                <span className="comment">{comment.comment} </span>



                <span className="edit-comment-icons">
                    {displayEdit}
                </span>
                <span className="edit-comment-icons-trash">
                    {displayDelete}
                </span>








            </span>


            <br></br>

            <div style={isEditing === false ? { display: "none" } : { display: "" }}>
                <EditComment handleSubmit={handleSubmit} setEditComment={setEditComment} />
            </div>
        </div>
    )
}

export default Comment;