import React from "react";

const LastViewed = ({ lastViewed }) => {
  return (
    <div className="last-viewed">
      <h3>Last Viewed</h3>
      {lastViewed.length > 0 ? (
        <ul>
          {lastViewed.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No viewing history available.</p>
      )}
    </div>
  );
};

export default LastViewed;
