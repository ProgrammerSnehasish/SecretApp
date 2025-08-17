import { useState } from "react";
import { api } from "../axiosApiConfig";
import { useUserStore, type IUser } from "../../store/UserStore";

export default function useAuthApi() {
    const [loading, setLoading] = useState(false);
    const setUser = useUserStore((store) => store.setUser);

    async function login(email: string, password: string) {
        setLoading(true)
        try {
                const result = await api.post<{ message: IUser, statusCode: number }>('/auth/login', {
                    email: email,
                    password: password
                })
                setUser(result.data.message)
                localStorage.setItem('token', result.data.message.token);
                if (result.status === 201) {
                    alert("Login successful!");
                }
            } catch (error: any) {
                alert("Login failed: " + error.response.data.message);
            } finally {
                setLoading(false);
            }
    }

    async function signup(email: string, password: string, firstName: string, lastName: string) {
        setLoading(true)
        try {
            const result = await api.post('/auth/signup', {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            })
            if (result.status === 201) {
                alert("Signup successful! Please login.");
            }
        } catch (error: any) {
            alert("Signup failed: " + error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        login,
        signup
    }
}