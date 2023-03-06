import React, { useState } from "react";


function SignUpForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                profile_pic: profilePic,
                bio,
                location,
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => alert(err.errors));
            }
        });
    }

    return (
        <>
            <div class="container">
                <div class="box">
                    <div class="heading">FOODGRAM</div>
                    <form class="login-form" onSubmit={handleSubmit}>
                        <div class="field">
                            <input
                                id="username"
                                className="sign-in-form"
                                type="name"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label for="username">Username</label>
                        </div>
                        <div class="field">
                            <input
                                id="password"
                                className="sign-in-form"
                                type="password"
                                placeholder="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label for="password">Password</label>
                        </div>
                        <div class="field">
                            <input
                                id="password"
                                className="sign-in-form"
                                type="password"
                                placeholder="password"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                autoComplete="current-password"
                            />
                            <label for="password">Password Confirmation</label>
                        </div>
                        <div class="field">
                            <input
                                type="text"
                                className="sign-in-form"
                                id="imageUrl"
                                value={profilePic}
                                onChange={(e) => setProfilePic(e.target.value)}
                            />
                            <label for="profile pic">Set Profile Pic</label>
                        </div>
                        <div class="field">
                            <input
                                type="text"
                                className="sign-in-form"
                                id="bio"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                            />
                            <label for="bio">Set Bio</label>
                        </div>
                        <div class="field">
                            <input
                                type="text"
                                id="location"
                                className="sign-in-form"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                            <label for="location">Set Location</label>
                        </div>
                        <button class="login-button" title="login" variant="fill" color="primary" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUpForm;