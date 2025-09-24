import { Controller, useForm } from "react-hook-form";
import DisplayPassword from "../../../components/DispalyPassword";
import useAuthApi from "../../../api/auth/useAuthApi";
import Loading from "../../../components/Loading";

export default function SignupForm() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        },
    });
    const {loading, signup} = useAuthApi();

    return (
        <>
            {loading && <Loading />}
            <form style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 300, alignItems: 'center', border: '1px solid', padding: 8 }} 
            onSubmit={handleSubmit(async (data) => {
                signup(data.email, data.password, data.firstName, data.lastName);
            })}>
                <h2>SIGNUP</h2>
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

                <Controller
                    name="firstName"
                    control={control}
                    render={({ field: { onChange, ...rest } }) => {
                        return <input type='text' placeholder="Enter first name..." onChange={(e) => onChange(e.target.value)} {...rest} />
                    }}
                    rules={{
                        required: "First name is required."
                    }}
                />

                <Controller
                    name="lastName"
                    control={control}
                    render={({ field: { onChange, ...rest } }) => {
                        return <input type='text' placeholder="Enter last name..." onChange={(e) => onChange(e.target.value)} {...rest} />
                    }}
                />

                <button type="submit" style={{ cursor: 'pointer' }}>Sign up</button>
            </form>
        </>
    );
}