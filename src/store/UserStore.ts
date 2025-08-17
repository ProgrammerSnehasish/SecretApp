import { create } from "zustand";
import type { ISecret } from "./SecretStore";

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
    secret: ISecret[],
    setUser: (user: IUser | undefined) => void;
    addNew: (secret: ISecret) => void;
}

export const useUserStore = create<IUserStore>((set) => ({
    user: undefined,
    secret: [],
    setUser: (user?: IUser) => {
        set({ user });
    },
    addNew: (secret: ISecret) => {
        set((store) => ({ secret: [...store.secret, secret] }));
    }
}))
