import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";



function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="body">



            <div class='light x1'></div>
            <div class='light x2'></div>
            <div class='light x3'></div>
            <div class='light x4'></div>
            <div class='light x5'></div>
            <div class='light x6'></div>
            <div class='light x7'></div>
            <div class='light x8'></div>
            <div class='light x9'></div>
            {showLogin ? (
                <div>

                    <LoginForm onLogin={onLogin} />
                    <div className="container">
                        <div className="box">
                            <div className="account-text"> Don't have an account? &nbsp;</div>
                            <button className="signup" color="secondary" onClick={() => setShowLogin(false)}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <SignUpForm onLogin={onLogin} />
                    <div className="container">
                        <p className="box">
                            <div className="account-text"> Already have an account? &nbsp;</div>
                            <button className="signup" color="secondary" onClick={() => setShowLogin(true)}>
                                Log In
                            </button>
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}


export default Login;