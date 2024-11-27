import { Link } from "react-router-dom"

function NotFound(){
    return(
        <div className="w-[100vw] h-[100vh] bg-[#1a2d31] flex items-center justify-center flex-col gap-5 text-white">
            <h1 className="text-4xl font-bold">404 Not Found</h1>
            <Link to={'/'}> <button className="text-black bg-white px-5 py-2 rounded"> Go back to Home Page</button> </Link>
        </div>
    )
}

export default NotFound