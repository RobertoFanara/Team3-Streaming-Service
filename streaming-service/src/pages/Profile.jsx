import React, { useState, useEffect } from "react";
import useSound from 'use-sound'
import boopSfx from '../assets/onclick-sound.mp3';
import "./Profile.css";
import UserStatus from "../components/UserStatus";
import Recommendations from "../components/Recommendation";
import LastViewed from "../components/LastViewed";
import Followers from "../components/Followers";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Profile = () => {
  const [play] = useSound(boopSfx);

  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    subscriptionPlan: "Premium",
    profilePicture: "profile-picture.jpg",
    isOnline: true,
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
      <Sidebar/>
      <Navbar/>
      <div className="profile-container">
    <Recommendations recommendations={recommendations} />
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
              className="follow-button"
              disabled={isFollowed}
              onClick={() => {setIsFollowed(true); play()}}
            >
              {isFollowed ? "Followed" : "Follow"}
            </button>
          </div>
        </div>
        <LastViewed lastViewed={lastViewed} />
      </div>
    </>
  );
};

export default Profile;
