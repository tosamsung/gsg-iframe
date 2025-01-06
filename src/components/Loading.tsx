
const Loading: React.FC = () => {

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-t-transparent border-primary border-solid rounded-full animate-spin"></div>
                <div className="absolute inset-0 border-4 border-t-transparent border-white border-solid rounded-full animate-spin delay-200"></div>
            </div>
        </div>
    );
};

export default Loading;
