import { useEffect, useState } from "react";
import type { SecretResponse } from "../../../api/post/post.types";
import usePostApi from "../../../api/post/usePostApi";
import Progress from "../../../components/Progress";
import Pagination from "../../../components/Pagination";
import { useSecretStore} from "../../../store/secretStore";
// import { useSecretStore } from "../../../store/SecretStore";

export function SecretList() {
    // const secretList = useSecretStore((store) => store.secretList);
    const {getSecrets, loading} = usePostApi();
    const [secretList, setSecretList] = useState<SecretResponse[]>([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const take = 10; // items per page

    async function fetchSecrets(pg = page) {
        const data = await getSecrets(pg, take);
        if(data){
            setSecretList(data.data);
            setCount(data.count);
        }
    }

    useEffect(() => {
        fetchSecrets(page);
    }, [page]);

    return (
        <div style={{paddingTop: 12}}>
            {loading && <Progress />}

            {secretList.map((item) => (
                <SecretItem key={item.id} item={item} />
            ))}

            <Pagination total={count} take={take} currentPage={page} onPageChange={setPage} />
        </div>
    );
}

interface ISecretItemProps {
    item: SecretResponse;
}

function SecretItem({ item }: ISecretItemProps) {
    // const setSelectedSecret = useSecretStore((store) => store.setSelectedSecret)
    const setSelectedSecret = useSecretStore((store)=>store.setSecret)
    return (
        <div key={item.id} onClick={()=>setSelectedSecret(item.id)}style={{ marginBottom: 12, padding: 8, border: '1px solid', cursor: 'pointer' }}>
            <p>Title: {item.title}</p>
            <p>Secret: {item.Value}</p>
        </div>
    );
}
