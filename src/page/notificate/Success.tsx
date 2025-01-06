import React from 'react';
import { searchParamUrl } from '../../util/Utils';


const Success: React.FC = () => {
    const message = searchParamUrl("message") || "This is a default warning message.";
    const onClose = () => {
        WA.player.state.saveVariable("openSuccess", false)
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
            <div className="flex items-center p-6 mb-4 text-green-500 bg-green-100 border border-green-300 rounded-lg shadow-md">
                <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m6.938-4A7.938 7.938 0 0112 19.938 7.938 7.938 0 015.062 12 7.938 7.938 0 0112 4.062 7.938 7.938 0 0118.938 12z"
                    />
                </svg>
                <span className="flex-grow">{message}</span>
                <button
                    onClick={onClose}
                    className="p-1 text-red-700 transition duration-150 ease-in-out rounded-full hover:bg-red-200 focus:outline-none"
                    aria-label="Close"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};


export default Success;
