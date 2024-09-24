// function Info() {
//   return (
//     <>
//       <div className="mx-auto p-6">
//         <div className="mb-6">
//           <a href="#" className="text-indigo-600 flex items-center space-x-2">
//             <span className="text-xl font-nunito text-gray-400">&lt;</span>
//             <span className="text-sm text-gray-400 font-nunito">
//               Go back to{" "}
//               <span className="text-black font-nunito font-bold">Deals</span>
//             </span>
//           </a>
//         </div>

//         <h2 className="text-2xl font-nunito font-bold text-gray-800 mb-4">
//           10% discount on fresh meat every Friday after 18:00
//         </h2>

//         <div className="flex border-b border-gray-300 font-nunito space-x-6 text-sm text-gray-700">
//           <a
//             href="#"
//             className="link-term border-b-2 border-transparent focus:text-black focus:border-black active:text-black active:border-black focus:outline-none"
//           >
//             Info
//           </a>
//           <a
//             href="#"
//             className="link-term font-nunito border-b-2 border-transparent focus:text-black focus:border-black active:text-black active:border-black focus:outline-none"
//           >
//             Terms
//           </a>
//           <a
//             href="#"
//             className="link-term font-nunito border-b-2 border-transparent focus:text-black focus:border-black active:text-black active:border-black focus:outline-none"
//           >
//             How to Redeem
//           </a>
//           <a
//             href="#"
//             className="link-term border-b-2 font-nunito border-transparent focus:text-black focus:border-black active:text-black active:border-black focus:outline-none"
//           >
//             Locations
//           </a>
//           <a
//             href="#"
//             className="link-term border-b-2 font-nunito border-transparent focus:text-black focus:border-black active:text-black active:border-black focus:outline-none"
//           >
//             Cards Usage
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Info;

function Info() {
  return (
    <div className="mx-auto p-6">
      <div className="mb-6">
        <a href="#" className="text-indigo-600 flex items-center space-x-2">
          <span className="text-xl font-nunito text-gray-400">&lt;</span>
          <span className="text-sm text-gray-400 font-nunito">
            Go back to{" "}
            <span className="text-black font-nunito font-bold">Deals</span>
          </span>
        </a>
      </div>

      <h2 className="text-2xl font-nunito font-bold text-gray-800 mb-4">
        10% discount on fresh meat every Friday after 18:00
      </h2>

      <div className="flex border-b border-gray-300 font-nunito space-x-6 text-sm text-gray-700 flex-wrap">
        {["Info", "Terms", "How to Redeem", "Locations", "Cards Usage"].map(
          (term, index) => (
            <a
              key={index}
              href="#"
              className="link-term border-b-2 border-transparent focus:text-black focus:border-black active:text-black active:border-black focus:outline-none"
            >
              {term}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Info;
