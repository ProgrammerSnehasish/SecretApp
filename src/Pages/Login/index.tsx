import { useState } from "react";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";


export default function LoginPage() {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
           {showLogin ? <LoginForm /> : <SignupForm />}
            <button onClick={() => setShowLogin(prev => !prev)} style={{cursor: 'pointer'}}>
                {showLogin ? "Don't have account! Switch to Sign Up" : "Switch to Login"}
            </button>
        </div>
    )
}
