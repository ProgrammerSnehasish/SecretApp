import { useEffect } from "react";
import usePostApi from "../../../../api/post/usePostApi";
import { useSecretStore } from "../../../../store/secretStore";
import Loading from "../../../../components/Loading";

export default function SecretDetails() {
    const id = useSecretStore((store) => store.selectedSecretId)
    const { getSecretById, loading, secret } = usePostApi()
    useEffect(() => {
        if (id !== undefined) {
            getSecretById(id)
        }
    }, [id])
    return (
        <>
            {loading ?
                (<div style={{ display: "flex", flex: 1, position: "relative" }}><Loading /></div>) :
                secret ? (
                    <>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
                            <h3>{secret.title}</h3>
                            <p>{secret.Value}</p>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                                
                            </div>
                        </div>
                    </>
                ) : (
                    <p>No item Selected.</p>
                )}
        </>
    )
}

