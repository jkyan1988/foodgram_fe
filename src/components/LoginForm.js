import React, { useState } from "react";


function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
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

        <div className="container">
            <div className="box">
                <div className="heading">FOODGRAM</div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="field">
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
                    <div className="field">
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
                    <button className="login-button" title="login" variant="fill" color="primary" type="submit">Log In</button>

                </form>
            </div>
        </div>

    );
}

export default LoginForm;