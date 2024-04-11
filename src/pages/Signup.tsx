import { Link, useNavigate } from "react-router-dom";
import {useForm, SubmitHandler} from 'react-hook-form';
import User from "../interfaces/User";
import { signupSchema } from "../schemas/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import axiosClient from "../apiFun/axiosClient";
import { useState } from "react";

export default function Signup() {
    const navigate = useNavigate();
    const [submitError, setSubmitError] = useState("");
    const {register, handleSubmit, formState: {errors, isSubmitting}, reset} = useForm<User>({resolver: zodResolver(signupSchema), shouldUnregister: false});
    const onSubmit:SubmitHandler<User> = async(data)=>{
        try {
            const resp = await axiosClient.post("/auth/register", data);
            if(resp.status == 201){
                navigate("/login");
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
            <div className="px-3 pb-5 border-2 shadow-lg rounded-lg flex flex-col gap-5 w-[500px]">
                <h1 className="text-2xl font-medium text-center">Sign Up</h1>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-lg">Username</label>
                        <input type="text" {...register("name")} id="name" placeholder="abc56T" className="border-2 p-2 rounded-lg shadow-md" />
                        <span className="text-red-500">{errors.name && errors.name.message}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-lg">Email</label>
                        <input type="email" {...register("email")} id="email" placeholder="uJHkz@example.com" className="border-2 p-2 rounded-lg shadow-md" />
                        <span className="text-red-500">{errors.email && errors.email.message}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-lg">Password</label>
                        <input type="password" {...register("password")} id="password" placeholder="********" className="border-2 p-2 rounded-lg shadow-md" />
                        <span className="text-red-500">{errors.password && errors.password.message}</span>
                    </div>
                    <div className="flex justify-center mt-3">
                        <button type="submit" disabled={isSubmitting} className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">SignUp</button>
                    </div>
                    <div className="flex justify-end">
                        <Link to="/login"><p className="text-indigo-500">Login</p></Link>
                    </div>
                </div>
                <span className="text-red-500">{submitError}</span>
                </form>
            </div>
        </div>
    )
}