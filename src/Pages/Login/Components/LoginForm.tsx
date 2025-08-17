import { Controller, useForm } from "react-hook-form";
import useAuthApi from "../../../api/auth/useAuthApi";
import DisplayPassword from "../../../components/DispalyPassword";
import Loading from "../../../components/Loading";

export default function LoginForm() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
    });
    const { loading, login } = useAuthApi();

    return (
        <>
            {loading && <Loading />}
            <form style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 300, alignItems: 'center', border: '1px solid', padding: 8 }} 
            onSubmit={handleSubmit(async (data) => {
                login(data.email, data.password)
            })}>
                <h2>LOGIN</h2>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, ...rest } }) => {
                        return <input type='email' placeholder="Enter email..." onChange={(e) => onChange(e.target.value)} {...rest} />
                    }}
                    rules={{
                        required: "Email is required.",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email format."
                        }
                    }}
                />

                <Controller
                    name="password"
                    control={control}
                    render={({ field: { onChange, ...rest } }) => {
                        return (
                            <div style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <input id="password" type='password' placeholder="Enter password..." onChange={(e) => onChange(e.target.value)} {...rest} />
                                <DisplayPassword />
                            </div>
                        );
                    }}
                    rules={{
                        required: "Password is required.",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long."
                        }
                    }}
                />

                <button type="submit" style={{ cursor: 'pointer', width: 60 }}>Login</button>
            </form>
        </>
    );
}