// import React from 'react';
// import AuthService from '../../service/AuthService';
// import { UserRegister } from '../../entity/Request';
// import { useNavigate } from 'react-router-dom';
// const authService = new AuthService()

const Register = () => {
    // const navigate = useNavigate();

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.currentTarget);
    //     const data = Object.fromEntries(formData.entries()) as unknown as UserRegister;
    //     authService.register(data).then(() => {
    //         navigate("/login");
    //     }).catch((error)=>{
    //         throw error
    //     })
    // };
    // const closeMenu = () => {
    //     WA.player.state.saveVariable("openLogin", false)

    // }
    // return (
    //     <div className="min-h-screen flex items-start justify-center">
    //         <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md mt-4">
    //             <button
    //                 className=" bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
    //                 onClick={closeMenu}
    //             >
    //                 X
    //             </button>
    //             <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Đăng ký</h1>
    //             <form onSubmit={handleSubmit}>
    //                 {/* Display Name */}
    //                 <div className="mb-4">
    //                     <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">
    //                         Tên hiển thị
    //                     </label>
    //                     <input
    //                         type="text"
    //                         id="displayName"
    //                         name="displayName"
    //                         placeholder="Enter your display name"
    //                         required
    //                         className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    //                     />
    //                 </div>
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
    //                 {/* Phone */}
    //                 <div className="mb-4">
    //                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
    //                         Số điện thoại
    //                     </label>
    //                     <input
    //                         type="tel"
    //                         id="phone"
    //                         name="phone"
    //                         placeholder="Enter your phone number"
    //                         required
    //                         className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    //                     />
    //                 </div>
    //                 {/* Password */}
    //                 <div className="mb-4">
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
    //                 {/* Confirm Password */}
    //                 <div className="mb-6">
    //                     <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
    //                         Nhập lại mật khẩu
    //                     </label>
    //                     <input
    //                         type="password"
    //                         id="confirmPassword"
    //                         name="confirmPassword"
    //                         placeholder="Confirm your password"
    //                         required
    //                         className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    //                     />
    //                 </div>
    //                 {/* Submit Button */}
    //                 <div className="flex items-center justify-between">
    //                     <button
    //                         type="submit"
    //                         className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
    //                     >
    //                         Đăng ký
    //                     </button>
    //                     <a
    //                         href="/login"
    //                         className="text-sm text-blue-500 hover:underline"
    //                     >
    //                         Đăng nhập
    //                     </a>
    //                 </div>
    //             </form>
    //         </div>
    //     </div>
    // );
};

export default Register;
