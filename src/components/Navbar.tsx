import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="font-bold flex justify-center mt-3 text-3xl border-b-2 shadow-md pb-3">
            <Link to="/"><h1>Socify</h1></Link>
        </div>
    )
}