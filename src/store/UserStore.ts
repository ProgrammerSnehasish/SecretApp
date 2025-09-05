import { create } from "zustand";


export interface IUser {
    email: string,
    firstName: string,
    lastName: string,
    id: string,
    token: string,
    expiresAt: string
}

interface IUserStore {
    user?: IUser,
    setUser: (user: IUser | undefined) => void;
}

export const useUserStore = create<IUserStore>((set) => ({
    user: undefined,
    secret: [],
    setUser: (user?: IUser) => {
        set({ user });
    }
}))