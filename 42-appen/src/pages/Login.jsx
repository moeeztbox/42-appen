// import Navbar from "../components/Navbar";

// function Login() {
//   return (
//     <>
//       <Navbar />
//       <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             alt="Your Company"
//             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//             className="mx-auto h-10 w-auto"
//           />
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6">
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-xs font-nunito font-bold leading-3 text-gray-900"
//               >
//                 E-mail
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="pb-6">
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="block text-xs font-nunito font-bold leading-3 text-gray-900"
//                 >
//                   Password
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   autoComplete="current-password"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//                 <div className="text-sm">
//                   <a
//                     href="#"
//                     className="flex justify-end mt-2 font-nunito font-bold text-indigo-600 hover:text-indigo-500"
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-center items-center">
//               <button
//                 type="submit"
//                 className=" bg-blue-700 font-nunito hover:bg-blue-700 text-white  py-2.5 px-6 rounded-lg"
//               >
//                 Log in
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

import { useState } from "react";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";

function Login() {
  const [open, setOpen] = useState(false); // Modal state

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    setOpen(true); // Open the alert modal
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-nunito font-bold leading-3 text-gray-900"
              >
                E-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="pb-6">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-xs font-nunito font-bold leading-3 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div className="text-sm">
                  <a
                    href="#"
                    className="flex justify-end mt-2 font-nunito font-bold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className=" bg-blue-700 font-nunito hover:bg-blue-700 text-white py-2.5 px-6 rounded-lg"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
      <Alert opens={open} setOpens={setOpen} />
    </>
  );
}

export default Login;
