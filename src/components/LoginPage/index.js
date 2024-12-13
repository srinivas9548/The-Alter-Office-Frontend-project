import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";

import { useNavigate } from 'react-router-dom'

import './index.css'

const LoginPage = () => {
    const navigate = useNavigate();

    const onClickContinueWithGoogle = () => {
        googleLogin();
    }

    const googleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const userCredential = await signInWithPopup(auth, provider);
            navigate("/");
            console.log("User logged in with Google:", userCredential.user);
        } catch (error) {
            console.error("Google login error:", error.message);
        }
    };

    return (
        <div className="login-page-container">
            <div className="login-page-card-container">
                <div className="login-page-card-details">
                    <div className="login-page-card-logo-and-heading">
                        <img
                            src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733821873/vtalgcqyd3py4hiefegj.png"
                            alt="vibe logo"
                            className="login-vibe-logo-img"
                        />
                        <h1 className="login-vibesnap-heading">Vibesnap</h1>
                    </div>
                    <p className="login-page-card-description">Moments That Matter, Shared Forever.</p>
                </div>
                <button type="button" className="login-page-card-button" onClick={onClickContinueWithGoogle}>
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733821873/t9aechbfvcnvwaxykci6.png"
                        alt="google logo"
                        className="login-page-google-logo-img"
                    />
                    Continue with Google
                </button>
            </div>
        </div>
    )
}

export default LoginPage