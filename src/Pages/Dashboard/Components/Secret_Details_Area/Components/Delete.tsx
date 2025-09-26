import usePostApi from "../../../../../api/post/usePostApi"
import { useSecretStore } from "../../../../../store/secretStore";

export default function DeleteSecret({id}: {id: string}) {
    const {deleteSecret} = usePostApi();
    const handleDelete = async () => {
        await deleteSecret(id);
        useSecretStore.setState({ selectedSecretId: undefined });
    }
    return (
        <>
            <button onClick={handleDelete} style={{ cursor: 'pointer'}}>
                Delete
            </button>
        </>
    )
}