import { useState } from "react";

const UserCard = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-card">
      <div className="header" onClick={toggleOpen}>
        <img src={user.image} alt={user.name} />
        <h2>{user.name}</h2>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="details">
          <p><b>Age:</b> {user.age}</p>
          <p><b>Gender:</b> {user.gender}</p>
          <p><b>Country:</b> {user.country}</p>
          <p>{user.description}</p>
          <button className="edit-button">Edit</button>
          <button className="delete-button">Delete</button>
        </div>
      )}
    </div>
  );
};

export default UserCard;
