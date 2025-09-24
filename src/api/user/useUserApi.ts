import { useState } from "react";
import { api } from "../axiosApiConfig";
import type { ApiResponse } from "../types";
import type { UserDetails } from "./user.types";
import { useUserStore } from "../../store/UserStore";
import { LocalStorageItems } from "../../configs/config";

export default function usePostApi() {
    const [loading, setLoading] = useState(false);
    const {setUser} = useUserStore()
    async function getUser() {
        setLoading(true)
        try {
           const {data: {message: user}} = await api.get<ApiResponse<UserDetails>>('/user/details');
           setUser({
               email: user.email,
               firstName: user.firstName,
               lastName: user.lastName,
               id: user.id,
               token: localStorage.getItem(LocalStorageItems.TOKEN) as string,
               expiresAt: user.expiresAt+""
           })
        } catch (error: any) {
            console.error("Error adding secret:", error);
            alert("Failed to add secret: " + error.message);
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        getUser
    }
}