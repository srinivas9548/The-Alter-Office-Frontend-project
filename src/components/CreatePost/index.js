import { FaArrowLeft, FaCamera } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
import { ImFolderOpen } from "react-icons/im";
import { MdVideoLibrary } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";

import './index.css'

const CreatePost = () => {
    const navigate = useNavigate();

    return (
        <div className="create-post-container">
            <div className="create-post-header">
                <FaArrowLeft className="create-left-arrow-img" onClick={() => navigate("/")} />
                <h3 className="create-new-post-heading">New Post</h3>
            </div>
            <textarea 
                placeholder="What’s on your maind?" 
                className="create-post-text-content"
            ></textarea>
            <div className="create-post-desktop-container">
                <div className="create-post-upload-folder-and-text">
                    <ImFolderOpen className="create-upload-folder-icon bg-folder" />
                    <p className="create-upload-folder-text">Choose the file</p>
                </div>
                <div className="create-post-upload-folder-and-text">
                    <FaCamera className="create-upload-folder-icon bg-camera" />
                    <p className="create-upload-folder-text">Camera</p>
                </div>
            </div>
            <div className="create-post-mobile-container">
            <div className="create-post-upload-folder-and-text">
                    <IoMdPhotos className="create-upload-folder-icon bg-photos" />
                    <p className="create-upload-folder-text">Photos</p>
                </div>
                <div className="create-post-upload-folder-and-text">
                    <MdVideoLibrary className="create-upload-folder-icon bg-video" />
                    <p className="create-upload-folder-text">Video</p>
                </div>
                <div className="create-post-upload-folder-and-text">
                    <FaCamera className="create-upload-folder-icon bg-camera" />
                    <p className="create-upload-folder-text">Camera</p>
                </div>
            </div>
            <button type="button" className="create-button">CREATE</button>
        </div>
    )
}

export default CreatePost