import React from "react";

const UserStatus = ({ isOnline, currentMovie }) => {
  return (
    <div className="user-status">
      <p>{isOnline ? "Sta guardando" : "Offline -.-"}</p>
      {isOnline && <p>{currentMovie}</p>}
    </div>
  );
};

export default UserStatus;
