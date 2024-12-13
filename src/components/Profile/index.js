import { CgProfile } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import './index.css'
import { useEffect, useState } from "react";

const Profile = () => {
    const navigate = useNavigate();
    const [profilePic, setProfilePic] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');

    useEffect(() => {
        const savedProfilePic = localStorage.getItem("profilePic");
        const savedBgImage = localStorage.getItem("backgroundImage");
        const savedName = localStorage.getItem("name");
        const savedBio = localStorage.getItem("bio");

        if (savedProfilePic) setProfilePic(savedProfilePic);
        if (savedBgImage) setBackgroundImage(savedBgImage);
        if (savedName) setName(savedName);
        if (savedBio) setBio(savedBio);

    }, [])

    return (
        <div className="profile-container">
            <div
                className="profile-bg-top-container"
                style={{
                    background: backgroundImage ? `url(${backgroundImage}) center/cover no-repeat` : "#D9D9D99C",
                }}
            >
                <FaArrowLeft className="profile-left-arrow-icon" onClick={() => navigate("/")} />
            </div>

            <div className="profile-pic-holder">
                {profilePic ? (
                    <img src={profilePic} alt="profile pic" className="profile-pic-upload-img" />
                ) : (
                    <CgProfile className="profile-pic-default-img" />
                )}
            </div>
            <button type="button" className="edit-profile-button" onClick={() => navigate("/editProfile")}>
                Edit Profile
            </button>

            <div className="profile-details-container">
                <h1 className="profile-details-name">{name}</h1>
                <p className="profile-details-bio">{bio}</p>
            </div>
            
            <h2 className="my-posts-heading">My Posts</h2>
        </div>
    )
}

export default Profile