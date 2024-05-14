import { Link } from "react-router-dom";


const Home = () => {
    return(
        <div className="flex flex-col items-center justify-center p-5 space-y-4 bg-white shadow-md rounded-lg">
            <div className="p-3 w-fit border rounded border-gray-300">
                <div className="text-center text-gray-500">Logo</div>
            </div>
            <div className="p-3 w-fit border rounded border-gray-300">
                <div className="text-center">
                    <label className="text-red-500">FMT ISOLATION</label>
                </div>
            </div>
            <div className="p-3 w-full  rounded">
                <div className="text-center">
                    <button className="border">
                          <Link to="newclient">Client</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home; 