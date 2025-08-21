import { Controller, useForm } from "react-hook-form";
import { useSecretStore } from "../../../store/SecretStore";
import type { AddSecretResponse } from "../../../api/types";
import usePostApi from "../../../api/post/usePostApi";
import Progress from "../../../components/Progress";

export default function AddSecret() {

    const { control, handleSubmit, reset } = useForm({
        values: {
            title: '',
            value: ''
        }
    });
    const {loading, createSecret} = usePostApi();

    return (
        <>
            {loading && <Progress />}
            <div style={{ height: '100%', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 12 }}>
                    <form onSubmit={handleSubmit(async (data) => {
                        createSecret(data.title, data.value)
                        reset({
                            title: '',
                            value: ''
                        });
                    })} style={{ display: 'flex', flexDirection: 'row' }}>

                        <Controller
                            name="title"
                            control={control}
                            render={({ field: { onChange, ...rest } }) => {
                                return <input placeholder="Enter a title..." onChange={(e) => onChange(e.target.value)} {...rest} />
                            }}
                            rules={{
                                required: "Title is required"
                            }}
                        />

                        <Controller
                            name="value"
                            control={control}
                            render={({ field: { onChange, ...rest } }) => {
                                return <input placeholder="Enter secret value..." onChange={(e) => onChange(e.target.value)} {...rest} />
                            }}
                            rules={{
                                required: "Secret value is required"
                            }}
                        />

                        <button type="submit" style={{ cursor: 'pointer' }}><img src="./src/assets/add-new.png" style={{ height: '14px', width: '100%' }} /></button>

                    </form>
                </div>
                <SecretList />
            </div>
        </>
    );
}

function SecretList() {
    const secretList = useSecretStore((store) => store.secretList);
    return (
        <div style={{paddingTop: 12}}>
            {secretList.map((item) => (
                <SecretItem item={item} />
            ))}
        </div>
    );
}
interface ISecretItemProps {
    item: AddSecretResponse;
}
function SecretItem({ item }: ISecretItemProps) {
    const setSelectedSecret = useSecretStore((store) => store.setSelectedSecret)
    return (
        <div key={item.id} style={{ marginBottom: 12, padding: 8, border: '1px solid', cursor: 'pointer' }} onClick={() => setSelectedSecret(item)}>
            <p>Title: {item.title}</p>
            <p>Secret: {item.Value}</p>
        </div>
    );
}