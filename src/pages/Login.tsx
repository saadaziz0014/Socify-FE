import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex justify-center align-middle mt-5">
            <div className="px-3 pb-5 border-2 shadow-lg rounded-lg flex flex-col gap-5">
                <h1 className="text-2xl font-medium text-center">Login</h1>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-lg">Email</label>
                        <input type="email" id="email" placeholder="uJHkz@example.com" className="border-2 p-2 rounded-lg shadow-md" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-lg">Password</label>
                        <input type="password" id="password" placeholder="********" className="border-2 p-2 rounded-lg shadow-md" />
                    </div>
                    <div className="flex justify-center mt-3">
                        <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Login</button>
                    </div>
                    <div className="flex justify-end">
                        <Link to="/signup"><p className="text-indigo-500">Sign Up</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}