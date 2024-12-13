import { FaArrowLeft } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import './index.css'
import { useEffect, useState } from "react";
import imageCompression from 'browser-image-compression'

const EditProfile = () => {
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

    const compressImage = async (file) => {
        try {
            const options = {
                maxSizeMB: 0.5, // Compress to 0.5MB or smaller
                maxWidthOrHeight: 1024, // Resize the image if it's larger than 1024px
                useWebWorker: true,
            };
            const compressedFile = await imageCompression(file, options);
            return compressedFile;
        } catch (error) {
            console.error("Error compressing image:", error);
            return file; // Return original file if compression fails
        }
    };

    const onChangeFile = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const compressedFile = await compressImage(file);
            const reader = new FileReader()
            reader.onload = () => {
                const imageData = reader.result;
                // localStorage.removeItem("profilePic");
                setProfilePic(imageData);
                localStorage.setItem("profilePic", imageData);
            };
            reader.readAsDataURL(compressedFile);
        }
    };

    const onChangeBackgroundImage = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const compressedFile = await compressImage(file);
            const reader = new FileReader();
            reader.onload = () => {
                const imageData = reader.result;
                // localStorage.removeItem("backgroundImage");
                setBackgroundImage(imageData);
                localStorage.setItem("backgroundImage", imageData);
            };
            reader.readAsDataURL(compressedFile);
        }
    };

    const onSaveProfile = () => {
        localStorage.setItem("name", name);
        localStorage.setItem("bio", bio);
        navigate("/profile");
    }

    return (
        <div className="edit-profile-container">
            <div
                className="edit-profile-bg-top-container"
                style={{
                    background: backgroundImage ? `url(${backgroundImage}) center/cover no-repeat` : "#D9D9D99C",
                }}
            >
                <div className="edit-left-arrow-and-edit-text">
                    <FaArrowLeft className="edit-left-arrow-img" onClick={() => navigate("/profile")} />
                    <p className="edit-profile-text">Edit Profile</p>
                </div>
                <MdEdit
                    className="edit-icon"
                    onClick={() => document.getElementById("backgroundInput").click()}
                />
                <input
                    id="backgroundInput"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={onChangeBackgroundImage}
                />
            </div>

            <div className="edit-profile-pic-holder">
                <label htmlFor="fileInput">
                    {profilePic ? (
                        <img src={profilePic} alt="profile pic" className="edit-profile-pic-upload-img" />
                    ) : (
                        <CgProfile className="edit-profile-pic-default-img" />
                    )}
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={onChangeFile}
                    />
                </label>
            </div>
            <MdEdit
                className="edit-profile-icon"
                onClick={() => document.getElementById("fileInput").click()}
            />

            <div className="edit-profile-bg-bottom-container">
                <div className="edit-profile-label-input-container">
                    <label htmlFor="name" className="edit-label-element">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="edit-input-element"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="edit-profile-label-input-container">
                    <label htmlFor="bio" className="edit-label-element">Bio</label>
                    <input
                        type="text"
                        id="bio"
                        className="edit-input-element"
                        placeholder="Write your bio"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    />
                </div>
                <button type="button" className="save-button" onClick={onSaveProfile}>Save</button>
            </div>
        </div>
    )
}

export default EditProfile