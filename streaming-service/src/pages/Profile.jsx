import React, { useState, useEffect } from "react";
import "./Profile.css";
import UserStatus from "../components/UserStatus";
import Recommendations from "../components/Recommendation";
import LastViewed from "../components/LastViewed";
import Followers from "../components/Followers";

const Profile = () => {
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    subscriptionPlan: "Premium",
    profilePicture: "profile-picture.jpg",
    isOnline: false,
    currentMovie: "Spider-man into the spiderverse",
  });

  const [favorites] = useState([
    "The Shawshank Redemption",
    "The Godfather",
    "Pulp Fiction",
    "The Dark Knight",
  ]);

  const [recommendations] = useState([
    {
      title: "inception",
      cover:
        "https://image.tmdb.org/t/p/w1280//edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    },
    {
      title: "spider-man across the spiderverse",
      cover:
        "https://image.tmdb.org/t/p/w1280//8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    },
    {
      title: "Alice in wonderland",
      cover: "https://www.themoviedb.org/t/p/original/oftPD4SPK8A0jAqaMBSbBhLeS1s.jpg",
    },
    {
      title: "Avatar",
      cover: "https://www.themoviedb.org/t/p/original/b1UAG3QykMoLxwDgzk1LqsBkkG3.jpg"
    }
  ]);

  const [lastViewed] = useState([
    "Breaking Bad",
    "Stranger Things",
    "The Crown",
    "Narcos",
  ]);

  const [followers, setFollowers] = useState(2500);
  const [followed] = useState(500);
  const [isFollowed, setIsFollowed] = useState(false);

  useEffect(() => {
    if (isFollowed) {
      setFollowers(followers + 1);
    }
  }, [isFollowed]);

  return (
    <>
      <div className="profile-container">
        <div className="profile-header">
          <div className="user-status-container">
            <UserStatus
              isOnline={user.isOnline}
              currentMovie={user.currentMovie}
            />
          </div>
          <div className="profile-header-image"></div>
          <h3 className="profile-header-nickname">Gabrimarche_</h3>
          <Followers followers={followers} followed={followed} />
          <div className="buttons-container">
            <button className="message-button">Send Message</button>
            <button
              className={!followed ? "follow-button" : "followed"}
              disabled={isFollowed}
              onClick={() => setIsFollowed(true)}
            >
              {isFollowed ? "Followed" : "Follow"}
            </button>
          </div>
        </div>
        <Recommendations recommendations={recommendations} />
        <LastViewed lastViewed={lastViewed} />
      </div>
    </>
  );
};

export default Profile;
