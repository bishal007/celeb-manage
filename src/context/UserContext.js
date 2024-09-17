import create from "zustand";
import celebrityData from "../data/celebrities.json"; 

export const useUserStore = create((set) => ({
  users: celebrityData,
  addUser: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
  deleteUser: (id) => set((state) => ({
    users: state.users.filter((user) => user.id !== id)
  })),
  editUser: (editedUser) => set((state) => ({
    users: state.users.map((user) => user.id === editedUser.id ? editedUser : user)
  }))
}));
