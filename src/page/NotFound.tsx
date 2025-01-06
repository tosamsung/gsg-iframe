import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    useEffect(()=>{
        

    },[])

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <p className="mt-4 text-lg text-gray-700">Oops! The page you're looking for doesn't exist.</p>
                <Link to="/" className="mt-6 inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
