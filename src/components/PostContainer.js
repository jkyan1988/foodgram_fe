import React from 'react';
import PostCard from './PostCard';
import '../styles/postcontainer.scss';

function PostContainer({ posts,
    comments,
    setComment,
    setPost,
    findUser,
    likes,
    setLikes,
    onUpdatePost,
    onDeletePost,
    onUpdateComment,
    onDeleteComment,
    onUpdateLike,
    user,
    filteredUsers
}
) {
    const { id, like, post_id, user_id } = likes

    return (
        <div >
            {posts && posts.map((post) => {
                return (
                    <PostCard
                        key={post.id}
                        selectedPost={post}
                        comments={comments}
                        setComment={setComment}
                        setPost={setPost}
                        findUser={findUser}
                        likes={likes}
                        setLikes={setLikes}
                        onUpdatePost={onUpdatePost}
                        onDeletePost={onDeletePost}
                        onUpdateComment={onUpdateComment}
                        onDeleteComment={onDeleteComment}
                        onUpdateLike={onUpdateLike}
                        user={user}
                        filteredUsers={filteredUsers}
                    />
                )
            })}

        </div>
    )
}

export default PostContainer;