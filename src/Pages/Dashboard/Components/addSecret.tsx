import { Controller, useForm } from "react-hook-form";
import usePostApi from "../../../api/post/usePostApi";
import Progress from "../../../components/Progress";

export default function AddSecret({onAdd}: {onAdd: ()=>void}) {

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
                    <form onSubmit={handleSubmit(async (data) => {
                        await createSecret(data.title, data.value)
                        reset({
                            title: '',
                            value: ''
                        });
                        onAdd();
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
        </>
    );
}

