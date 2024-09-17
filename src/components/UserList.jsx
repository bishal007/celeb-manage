import React from "react";
import UserCard from "./UserCard";
import { useUserStore } from "../context/UserContext"; // updated to use useUserStore

const UserList = () => {
  const users = useUserStore((state) => state.users); // access users from Zustand store

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
