import { create } from "zustand";

const registerUser = () => {

  

  console.log("register")
};

const loginUser = () => {
  console.log("login")
};

export const useUser = create((set) => ({
  user: {},
  register: () =>
    set((state) => ({
      user: registerUser(),
    })),
  login: () =>
    set((state) => ({
      user: loginUser(),
    })),
}));
