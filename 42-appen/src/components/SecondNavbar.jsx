// import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";

// function SecondNavbar() {
//   return (
//     <nav className="bg-blue-700">
//       <div className="mx-auto sm:px-6">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex flex-shrink-0 items-center">
//               <img
//                 className="h-8 w-auto"
//                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                 alt="Your Company"
//               />
//             </div>
//           </div>
//           <div className="flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="space-x-0">
//                 <a
//                   href="#"
//                   className="px-4 text-sm font-nunito font-medium text-gray-300"
//                   aria-current="page"
//                 >
//                   Dashboard
//                 </a>
//                 <a
//                   href="#"
//                   className="px-4 text-sm font-nunito font-medium text-gray-300"
//                   aria-current="page"
//                 >
//                   Card Type
//                 </a>
//                 <a
//                   href="#"
//                   className="px-4 text-sm font-nunito font-medium text-gray-300"
//                   aria-current="page"
//                 >
//                   Cards
//                 </a>
//                 <a
//                   href="#"
//                   className="px-4 text-sm font-nunito font-medium text-gray-300"
//                   aria-current="page"
//                 >
//                   Providers
//                 </a>
//                 <a
//                   href="#"
//                   className="text-sm font-nunito font-medium text-white border-b-2 "
//                 >
//                   Deals
//                 </a>
//                 <a
//                   href="#"
//                   className="px-4 text-sm font-nunito font-medium text-gray-300"
//                 >
//                   Users
//                 </a>
//                 <a
//                   href="#"
//                   className="px-4 text-sm font-nunito font-medium text-gray-300"
//                 >
//                   Content
//                 </a>
//               </div>
//             </div>{" "}
//             <div className="relative ml-6">
//               <div>
//                 <button
//                   type="button"
//                   className="relative flex items-center justify-center p-1 border-2 rounded-xl border-dotted border-white text-white "
//                   id="user-menu-button"
//                   aria-expanded="false"
//                   aria-haspopup="true"
//                 >
//                   <ArrowRightEndOnRectangleIcon className="h-6 w-6" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="sm:hidden" id="mobile-menu">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           <a
//             href="#"
//             className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
//             aria-current="page"
//           >
//             Dashboard
//           </a>
//           <a
//             href="#"
//             className="block rounded-md px-3 py-2 text-base font-medium text-gray-300"
//           >
//             Team
//           </a>
//           <a
//             href="#"
//             className="block rounded-md px-3 py-2 text-base font-medium text-gray-300"
//           >
//             Projects
//           </a>
//           <a
//             href="#"
//             className="block rounded-md px-3 py-2 text-base font-medium text-gray-300"
//           >
//             Calendar
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default SecondNavbar;

import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";

function SecondNavbar() {
  return (
    <nav className="bg-blue-700">
      <div className="mx-auto sm:px-6">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
          </div>
          <div className="flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="space-x-0">
                {[
                  "Dashboard",
                  "Card Type",
                  "Cards",
                  "Providers",
                  "Deals",
                  "Users",
                  "Content",
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`px-4 text-sm font-nunito font-medium ${item === "Deals" ? "text-white border-b-2" : "text-gray-300"}`}
                    aria-current={item === "Deals" ? "page" : undefined}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative ml-6">
              <div>
                <button
                  type="button"
                  className="relative flex items-center justify-center p-1 border-2 rounded-xl border-dotted border-white text-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <ArrowRightEndOnRectangleIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {["Dashboard", "Team", "Projects", "Calendar"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default SecondNavbar;
