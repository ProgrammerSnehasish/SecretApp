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
    // getUserByToken(token: string): any;
}

export const useUserStore = create<IUserStore>((set) => ({
    user: undefined,
    secret: [],
    setUser: (user?: IUser) => {
        set({ user });
    }
    // getUserByToken: (token?: string) =>{
    //         if(token){
    //             const user = useUserStore.getState().user;
    //             if(user && user.token === token){
    //                 return user;
    //             } else {
    //                 return undefined;
    //             }
    //         }
    //     }
}))