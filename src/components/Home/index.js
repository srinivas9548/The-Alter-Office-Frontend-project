import { useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import './index.css'
import PostItem from '../PostItem';

const Home = () => {
    const navigate = useNavigate();
    const [profilePic, setProfilePic] = useState(null);
    const [name, setName] = useState('');

    useEffect(() => {
        const savedProfilePic = localStorage.getItem("profilePic");
        const savedName = localStorage.getItem("name");

        if (savedProfilePic) setProfilePic(savedProfilePic);
        if (savedName) setName(savedName);
    }, []);


    return (
        <div className='home-page-container'>
            <div className='profile-info-container' onClick={() => navigate("/profile")}>
                {profilePic ? (
                    <img src={profilePic} alt="profile logo" className="home-profile-upload-pic" />
                ) : (
                    <CgProfile className="default-profile-icon" />
                )}
                <div className="">
                    <p className="greeting-message">Welcome Back,</p>
                    <h1 className="profile-name">{name || "Guest"}</h1>
                </div>
            </div>
            <h1 className="feeds-heading">Feeds</h1>
            <PostItem />
            <button type="button" className="post-add-button" onClick={() => navigate("/createPost")}
            >
                +
            </button>
        </div>
    )
}

export default Home