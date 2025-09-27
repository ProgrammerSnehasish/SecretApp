import { useEffect, useState } from "react";
import usePostApi from "../../../../../api/post/usePostApi";
import Loading from "../../../../../components/Loading";
import Pagination from "../../../../../components/Pagination";
import type { SecretResponse } from "../../../../../api/post/post.types";
import { useSecretStore } from "../../../../../store/secretStore";

export function SecretList() {
    const { getSecrets, loading } = usePostApi();
    const secretList = useSecretStore((store) => store.secretList)
    const [page, setPage] = useState(1);
    const take = 10; // items per page

    useEffect(() => {
        getSecrets(page, take);
    }, [page]);

    return (
        <>
            <div style={{ paddingTop: 12 }}>
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
    const setSelectedSecret = useSecretStore((store) => store.setSecret)
    const selectedSecretId = useSecretStore((store) => store.selectedSecretId)
    return (
        <div key={item.id} onClick={() => setSelectedSecret(item.id)} style={{ marginBottom: 12, padding: 8, border: selectedSecretId === item.id ? '3px solid' : '1px solid', backgroundColor: selectedSecretId === item.id ? '#13abf1ff' : '#ffffffff', cursor: 'pointer' }}>
            <p>Title: {item.title}</p>
            <p>Secret: {item.Value}</p>
        </div>
    );
}