// import React from 'react';
// import AuthService from '../../service/AuthService';
// import { UserLogin } from '../../entity/Request';
// const authService = new AuthService()
const Login = () => {
    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.currentTarget);
    //     const data = Object.fromEntries(formData.entries()) as unknown as UserLogin;
    //     authService.login(data).then((response) => {

    //         WA.player.state.DIGIFORCE_TOKEN = response.data.token

    //         WA.player.state.saveVariable("openLogin", false)
    //     })
    // };
    // const closeMenu = () => {
    //     WA.player.state.saveVariable("openLogin", false)

    // }
    // return (
    //     <div className="min-h-screen flex items-center justify-center ">

    //         <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
    //             <button
    //                 className=" bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
    //                 onClick={closeMenu}
    //             >
    //                 X
    //             </button>
    //             <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Đăng nhập</h1>

    //             <form onSubmit={handleSubmit}>
    //                 {/* Email */}
    //                 <div className="mb-4">
    //                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">
    //                         Email
    //                     </label>
    //                     <input
    //                         type="email"
    //                         id="email"
    //                         name="email"
    //                         placeholder="Enter your email"
    //                         required
    //                         className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    //                     />
    //                 </div>
    //                 {/* Password */}
    //                 <div className="mb-6">
    //                     <label htmlFor="password" className="block text-sm font-medium text-gray-700">
    //                         Mật khẩu
    //                     </label>
    //                     <input
    //                         type="password"
    //                         id="password"
    //                         name="password"
    //                         placeholder="Enter your password"
    //                         required
    //                         className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    //                     />
    //                 </div>
    //                 {/* Submit Button */}
    //                 <div className="flex items-center justify-between">
    //                     <button
    //                         type="submit"
    //                         className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //                     >
    //                         Đăng nhập
    //                     </button>
    //                     <a
    //                         href="/register"
    //                         className="text-sm text-blue-500 hover:underline"
    //                     >
    //                         Đăng ký
    //                     </a>
    //                 </div>
    //             </form>
    //         </div>
    //     </div>
    // );
};

export default Login;
