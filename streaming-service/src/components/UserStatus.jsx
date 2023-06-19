import React from "react";

const UserStatus = ({ isOnline, currentMovie }) => {
  return (
    <div className="user-status">
      {/* <p>{isOnline ? `Sta guardando` : "Offline -.-"}</p> */}
      {isOnline && <div className="watching-now"><span class="blink_me"></span><p>Sta guardando:</p><p>{currentMovie}</p></div>}
      {!isOnline && <p>Offline -.-</p>}
    </div>
  );
};

export default UserStatus;
