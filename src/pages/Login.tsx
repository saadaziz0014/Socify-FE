import { Link, useNavigate } from "react-router-dom";
import {useForm, SubmitHandler} from 'react-hook-form';
import User from "../interfaces/User";
import { loginSchema } from "../schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import axiosClient from "../apiFun/axiosClient";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();
    const [submitError, setSubmitError] = useState("");
    const {register, handleSubmit, formState: {errors,isSubmitting}, reset} = useForm<User>({resolver: zodResolver(loginSchema), shouldUnregister: false});
    const onSubmit:SubmitHandler<User> = async(data)=>{
        try {
            const resp = await axiosClient.post("/auth/login", data);
            if(resp.status == 201){
                navigate("/");
            }
        } catch (error:any) {
            setSubmitError(error.response.data.message);
        }
        finally{
            reset();
        }
    }
    return (
        <div className="flex justify-center align-middle mt-5">
            <div className="px-3 pb-5 border-2 shadow-lg rounded-lg flex flex-col gap-5">
                <h1 className="text-2xl font-medium text-center">Login</h1>
                <form action="" onSubmit={handleSubmit(onSubmit)} className="w-[500px]">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-lg">Email</label>
                        <input type="email" id="email" {...register("email")} placeholder="uJHkz@example.com" className="border-2 p-2 rounded-lg shadow-md" />
                        <span className="text-red-500">{errors.email && errors.email.message}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-lg">Password</label>
                        <input type="password" id="password" {...register("password")} placeholder="********" className="border-2 p-2 rounded-lg shadow-md" />
                        <span className="text-red-500">{errors.password && errors.password.message}</span>
                    </div>
                    <div className="flex justify-center mt-3">
                        <button type="submit" disabled={isSubmitting} className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Login</button>
                    </div>
                    <div className="flex justify-end">
                        <Link to="/signup"><p className="text-indigo-500">Sign Up</p></Link>
                    </div>
                </div>
                </form>
                <p className="text-red-500">{submitError}</p>
            </div>
        </div>
    )
}