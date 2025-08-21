import { create } from "zustand";
import type { AddSecretResponse } from "../api/types";

export interface ISecret{
    id: number,
    title: string,
    value: string
}

interface ISecretStore {
    secretList: AddSecretResponse[],
    selectedSecret?: AddSecretResponse,
    addSecret: (item: AddSecretResponse) => void,
    removeSecret: (id: string) => void,
    updateSecret: (item: AddSecretResponse) => void,
    setSelectedSecret: (item?: AddSecretResponse) => void
}

export const useSecretStore = create<ISecretStore>((set, get) => ({
    secretList: [],
    selectedSecret: undefined,
    addSecret: (item: AddSecretResponse) => {
        const secrets = get().secretList;
        set({
            secretList: [...secrets, item]
        })
    },
    setSelectedSecret: (item?: AddSecretResponse) => {
        set({
            selectedSecret: item
        })
    },
    removeSecret: (id: string) => {
        const secrets = get().secretList.filter(secret => secret.id !== id);
        set({
            secretList: secrets,
            selectedSecret: undefined
        });
    },
    updateSecret: (item: AddSecretResponse) => {
        const secrets = get().secretList.map(secret => secret.id === item.id ? item : secret);
        set({
            secretList: secrets,
            selectedSecret: item
        });
    }
}));