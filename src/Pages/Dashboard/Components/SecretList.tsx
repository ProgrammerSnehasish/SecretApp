import { useEffect, useState } from "react";
import type { SecretResponse } from "../../../api/post/post.types";
import usePostApi from "../../../api/post/usePostApi";
import Pagination from "../../../components/Pagination";
import { useSecretStore} from "../../../store/secretStore";
import Loading from "../../../components/Loading";
import { Toaster } from "sonner";

export function SecretList() {
    const {getSecrets, secretList, loading} = usePostApi();
    const [page, setPage] = useState(1);
    const take = 10; // items per page

    useEffect(() => {
        getSecrets(page, take);
    }, [page]);

    return (
        <>
            <Toaster />
            <div style={{paddingTop: 12}}>
                {loading && <Loading />}

                {secretList?.data.map((item) => (
                    <SecretItem key={item.id} item={item} />
                ))}

                <Pagination total={secretList?.count ?? 0} take={take} currentPage={page} onPageChange={setPage} />
            </div>
        </>
    );
}

interface ISecretItemProps {
    item: SecretResponse;
}

function SecretItem({ item }: ISecretItemProps) {
    const setSelectedSecret = useSecretStore((store)=>store.setSecret)
    const selectedSecretId = useSecretStore((store)=>store.selectedSecretId)
    return (
        <div key={item.id} onClick={()=>setSelectedSecret(item.id)}style={{ marginBottom: 12, padding: 8, border: selectedSecretId===item.id ? '3px solid' : '1px solid',backgroundColor: selectedSecretId===item.id ? '#13abf1ff' : '#ffffffff', cursor: 'pointer' }}>
            <p>Title: {item.title}</p>
            <p>Secret: {item.Value}</p>
        </div>
    );
}