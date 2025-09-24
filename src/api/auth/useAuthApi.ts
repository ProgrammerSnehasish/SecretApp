import { useState } from "react";
import { api } from "../axiosApiConfig";
import { useUserStore, type IUser } from "../../store/UserStore";
import type { ApiResponse } from "../types";
import { LocalStorageItems } from "../../configs/config";
import { toast } from "sonner";

export default function useAuthApi() {
    const [loading, setLoading] = useState(false);
    const setUser = useUserStore((store) => store.setUser);

    async function login(email: string, password: string) {
        setLoading(true)
        try {
                const {data: {message: user}} = await api.post<ApiResponse<IUser>>('/auth/login', {
                    email: email,
                    password: password
                })
                setUser(user)
                localStorage.setItem(LocalStorageItems.TOKEN, user.token);
                localStorage.setItem(LocalStorageItems.EXPIRES_AT, user.expiresAt);
                toast.success("Login successful!");
            } catch (error: any) {
                toast.error("Login failed: " + error);
            } finally {
                setLoading(false);
            }
    }

    async function signup(email: string, password: string, firstName: string, lastName: string) {
        setLoading(true)
        try {
            const result = await api.post<ApiResponse<void>>('/auth/signup', {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            })
            if (result.status === 201) {
                toast.success("Signup successful! Please login.");
            }
        } catch (error: any) {
            toast.error("Signup failed: " + error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    function logout() {
        setUser(undefined),
        localStorage.clear(),
        toast.success("Logged out successfully!");
    }

    return {
        loading,
        login,
        logout,
        signup
    }
}