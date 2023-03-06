import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navigation from './Navigation';
import Login from "../pages/Login";
import PostContainer from "./PostContainer";
import PostForm from './PostForm';
import PostCard from './PostCard';
import UserProfile from './UserProfile';
import Explore from './Explore';
import '../styles/App.scss'


function App() {
    const [user, setUser] = useState(null);
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);
    const [likes, setLikes] = useState([]);
    const [findUser, setFindUser] = useState([]);
    const [showPostForm, setShowPostForm] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/comments')
            .then((resp) => resp.json())
            .then((comments) => setComment(comments))
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((resp) => resp.json())
            .then((posts) => setPost(posts))
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then((resp) => resp.json())
            .then((users) => setFindUser(users))
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/likes")
            .then((resp) => resp.json())
            .then((likes) => setLikes(likes))
    }, []);

    useEffect(() => {
        // auto-login
        fetch("http://localhost:3000/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }, []);

    if (!user) return <Login onLogin={setUser} />;

    // logout button
    function handleLogoutClick() {
        fetch("http://localhost:3000/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    // return all posts once edited
    function onUpdatePost(updatedPost) {
        const filteredPosts = post.map((post) => {
            if (post.id === updatedPost.id) {
                return updatedPost
            } else {
                return post
            }
        })
        setPost(filteredPosts)
    }

    // return all comments once edited
    function onUpdateComment(updatedComment) {
        const filteredComments = comment.map((comment) => {
            if (comment.id === updatedComment.id) {
                return updatedComment
            } else {
                return comment
            }
        })
        setComment(filteredComments)
    }

    function onUpdateLike(updatedLike) {
        const filteredLikes = likes.map((like) => {
            if (like.id === updatedLike.id) {
                return updatedLike
            } else {
                return like
            }
        })
        setLikes(filteredLikes)
    }


    // return all posts that's not deleted
    function onDeletePost(id) {
        const filteredPostsToo = post.filter((post) => post.id !== id)
        setPost(filteredPostsToo)
    }

    // return all comments that's not deleted
    function onDeleteComment(id) {
        const filteredCommentsToo = comment.filter((comment) => comment.id !== id)
        setComment(filteredCommentsToo)
    }

    // filter all users by username
    const filteredUsers = findUser.filter((user) => user.username).map((user) => user.username)
    // const https = require("https");

    // setInterval(function() {
    //   https.get("https://betterfoodgram.herokuapp.com/");
    // }, 300000); // every 5 minutes (300000)


    return (
        <div className="container">


            <Navigation
                user={user}
                handleLogoutClick={handleLogoutClick}
                setShowPostForm={setShowPostForm}
                showPostForm={showPostForm}
            />
            <div>

                <Routes>

                    <Route path="/profile">
                        <UserProfile user={user} posts={post} />
                    </Route>
                    <Route path="/explore">
                        <Explore posts={post} user={user} />
                    </Route>
                    <Route path="/">
                        <PostForm
                            post={post}
                            setPost={setPost}
                            showPostForm={showPostForm}
                        />
                        <PostContainer
                            posts={post}
                            comments={comment}
                            setComment={setComment}
                            setPost={setPost}
                            likes={likes}
                            setLikes={setLikes}
                            findUser={findUser}
                            onUpdatePost={onUpdatePost}
                            onDeletePost={onDeletePost}
                            onUpdateComment={onUpdateComment}
                            onDeleteComment={onDeleteComment}
                            onUpdateLike={onUpdateLike}
                            user={user}
                            filteredUsers={filteredUsers}
                        />
                    </Route>

                </Routes>
            </div>

            <div>
                <Routes>

                    <Route path="/postcard">
                        <PostCard
                            posts={post}
                            setComment={setComment}
                            likes={likes}
                            setLikes={setLikes}
                            setPost={setPost}
                            user={user}
                            findUser={findUser}
                            onUpdatePost={onUpdatePost}
                            onDeletePost={onDeletePost}
                            onUpdateComment={onUpdateComment}
                            onDeleteComment={onDeleteComment}
                            onUpdateLike={onUpdateLike}
                            filteredUsers={filteredUsers}
                        />
                    </Route>
                    <Route path="/login">
                        <Login onLogin={setUser} />
                    </Route>

                </Routes>

            </div>
        </div>
    );

}

export default App