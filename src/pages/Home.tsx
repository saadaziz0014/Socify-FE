import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="flex justify-center align-middle mt-52 text-2xl">
            <div className="flex flex-col gap-3">
                <h1>Social Thread App</h1>
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/login')}>Try it</button>
            </div>
        </div>
    )
}