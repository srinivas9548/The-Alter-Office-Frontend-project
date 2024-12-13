import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'
import { useState } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import {
    FaTwitter,
    FaFacebook,
    FaRedditAlien,
    FaDiscord,
    FaFacebookMessenger,
    FaInstagramSquare,
    FaCopy
} from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

const PostItem = () => {
    const [likesCount, setLikesCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const onClickLikeIcon = () => {
        if (isLiked) {
            setLikesCount((prevCount) => Math.max(prevCount - 1, 0)); // Decrease likes
        } else {
            setLikesCount((prevCount) => prevCount + 1); // Increase likes
        }
        setIsLiked(!isLiked);
    }

    const openPopup = () => {
        setIsPopupOpen(true);
    }

    const closePopup = () => {
        setIsPopupOpen(false);
    }

    const overlayStyle = {
        backgroundColor: '#363441b5',
    }

    return (
        <div className="post-item-container">
            <div className="post-item-profile-info">
                <img
                    src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733994220/lmflvrijm8yopza5okzy.png"
                    alt="user profile pic"
                    className="post-user-profile-pic"
                />
                <div className="post-user-name-and-time">
                    <h3 className="post-user-name">Aarav</h3>
                    <p className="post-user-time">2 hours ago</p>
                </div>
            </div>
            <p className="post-item-description">
                Just arrived in New York City! Excited to explore the sights, sounds, and energy
                of this amazing place. 🗽 <span style={{ "color": "blue" }}>#NYC #Travel</span>
            </p>
            <img
                src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733995395/iqz2u9hsgnmabcegsgo9.png"
                alt="posted item"
                className="posted-item-image"
            />
            <div className="post-likes-and-share-button">
                <div className="post-like-icon-and-count" onClick={onClickLikeIcon}>
                    {isLiked ? (
                        <IoHeart style={{ "color": "red" }} className="post-like-icon" />
                    ) : (
                        <IoHeartOutline className="post-like-icon" />
                    )}

                    <p className="post-likes-count">{likesCount}</p>
                </div>
                <button type="button" className="post-share-button" onClick={openPopup}>
                    <FaLocationArrow />
                    Share
                </button>
            </div>

            {/* Popup */}
            <Popup
                modal
                open={isPopupOpen}
                position="center center"
                closeOnDocumentClick
                onClose={closePopup}
                overlayStyle={overlayStyle}

            >
                <div className="popup-content">
                    <div className="popup-header">
                        <h2 className="popup-title">Share post</h2>
                        <button
                            type="button"
                            className="popup-close-button"
                            onClick={closePopup}
                        >
                            X
                        </button>
                    </div>
                    <div className="popup-share-post-options-container">
                        <div className="share-post-item">
                            <div className="share-post-icon-container bg-twitter">
                                <FaTwitter className="share-post-icon twitter" />
                            </div>
                            <p className="share-post-item-name">Twitter</p>
                        </div>
                        <div className="share-post-item">
                            <div className="share-post-icon-container bg-facebook">
                                <FaFacebook className="share-post-icon facebook" />
                            </div>
                            <p className="share-post-item-name">Facebook</p>
                        </div>
                        <div className="share-post-item">
                            <div className="share-post-icon-container bg-reddit">
                                <FaRedditAlien className="share-post-icon reddit" />
                            </div>
                            <p className="share-post-item-name">Reddit</p>
                        </div>
                        <div className="share-post-item">
                            <div className="share-post-icon-container bg-discord">
                                <FaDiscord className="share-post-icon discord" />
                            </div>
                            <p className="share-post-item-name">Discord</p>
                        </div>
                        <div className="share-post-item">
                            <div className="share-post-icon-container bg-whatsApp">
                                <IoLogoWhatsapp className="share-post-icon whatsApp" />
                            </div>
                            <p className="share-post-item-name">WhatsApp</p>
                        </div>
                        <div className="share-post-item">
                            <div className="share-post-icon-container bg-messenger">
                                <FaFacebookMessenger className="share-post-icon messenger" />
                            </div>
                            <p className="share-post-item-name">Messenger</p>
                        </div>
                        <div className="share-post-item">
                            <div className="share-post-icon-container bg-telegram">
                                <RiTelegram2Fill className="share-post-icon telegram" />
                            </div>
                            <p className="share-post-item-name">Telegram</p>
                        </div>
                        <div className="share-post-item">
                            <div className="share-post-icon-container bg-instagram">
                                <FaInstagramSquare className="share-post-icon instagram" />
                            </div>
                            <p className="share-post-item-name">Instagram</p>
                        </div>
                    </div>
                    <h2 className="page-link-heading">Page Link</h2>
                    <div className="page-link-input-and-paste-icon">
                        <input type="text" className="page-link-input" placeholder="Link URL" />
                        <FaCopy className="copy-logo-img" />
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default PostItem