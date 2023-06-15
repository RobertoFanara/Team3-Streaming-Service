import React from "react";
import './Followers.css'

const Followers = ({ followers, followed }) => {
  return (
    <div className="followers">
      <p>Total Followers: {followers}</p>
      <p>Total Followed: {followed}</p>
    </div>
  );
};

export default Followers;
