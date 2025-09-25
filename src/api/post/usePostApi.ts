import { useState } from "react";
import { api } from "../axiosApiConfig";
import type { ApiResponse } from "../types";
import type { PaginatedSecretResponse, SecretResponse } from "./post.types";
import { toast } from "sonner";

export default function usePostApi() {
    const [loading, setLoading] = useState(false);
    const [secret, setSecret] = useState<SecretResponse>();
    const [secretList, setSecretList] = useState<PaginatedSecretResponse>();

    async function createSecret(title: string, value: string) {
        setLoading(true)
        try {
            await api.post<ApiResponse<SecretResponse>>('/secret/add', {
                title: title,
                value: value
            })
        } catch (error: any) {
            console.error("Error adding secret:", error);
            toast.error("Failed to add secret: " + error.message);
        } finally {
            setLoading(false)
        }
    }

    async function getSecretById(id: string) {
        setLoading(true)
        try {
                const res = await api.get<ApiResponse<SecretResponse>>(`/secret?id=${id}`);
                setSecret(res.data.message);
            } catch (error: any) {
                toast.error(error.message);
            } finally {
                setLoading(false)
            }
    }

    async function getSecrets(page: number, take: number) {
        setLoading(true)
        try{
            const res = await api.get<ApiResponse<PaginatedSecretResponse>>(`/secret/all?page=${page}&take=${take}`);
            setSecretList(res.data.message);
            return res.data.message;
        }catch(error: any){
            toast.error(error.message);
        }finally{
            setLoading(false)
        }
    }

    async function updateSecret(id: string, title: string, value: string) {
        setLoading(true)
        try {
            await api.post<ApiResponse<SecretResponse>>('/secret/update', {
                id: id,
                title: title,
                value: value
            })
        } catch (error: any) {
            console.error("Error updating secret:", error);
            toast.error("Failed to update secret: " + error.message);
        } finally {
            setLoading(false)
        }
    }

    async function deleteSecret(id: string) {
        setLoading(true)
        try {
            await api.delete<ApiResponse<null>>(`/secret/remove?id=${id}`);
        } catch (error: any) {
            console.error("Error deleting secret:", error);
            toast.error("Failed to delete secret: " + error.message);
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        secret,
        secretList,
        createSecret,
        getSecretById,
        getSecrets,
        updateSecret,
        deleteSecret
    }
}