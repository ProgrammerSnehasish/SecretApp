import { create } from "zustand";

export interface ISecret {
    selectedSecretId?:string,
    setSecret:(selectedSecretId:string)=>void
}
export const useSecretStore = create<ISecret>((set)=>({
    selectedSecretId:undefined,
    setSecret:(selectedSecretId:string)=>{
        set({selectedSecretId})
    }
}))
