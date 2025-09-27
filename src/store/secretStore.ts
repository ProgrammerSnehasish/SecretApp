import { create } from "zustand";
import type { PaginatedSecretResponse } from "../api/post/post.types";

export interface ISecret {
    selectedSecretId?: string,
    setSecret: (selectedSecretId: string) => void,
    secretList?: PaginatedSecretResponse,
    setSecretList: (secretList: PaginatedSecretResponse) => void
}
export const useSecretStore = create<ISecret>((set) => ({
    selectedSecretId: undefined,
    secretList: undefined,
    setSecret: (selectedSecretId: string) => {
        set({ selectedSecretId });
    },
    setSecretList: (secretList: PaginatedSecretResponse) => {
        set({ secretList });
    }
}))
