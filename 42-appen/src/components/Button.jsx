// function Button() {
//   return (
//     <div className="w-1/3 flex items-start justify-end space-x-4">
//       <button className="bg-white border-2 border-blue-500 text-blue-500 py-2 px-4 rounded-xl font-nunito font-bold">
//         Duplicate deal
//       </button>
//       <button className="bg-white border-2 border-red-500 text-red-500 py-2 px-4 rounded-xl font-nunito font-bold">
//         Archive deal
//       </button>
//     </div>
//   );
// }

// export default Button;

function Button() {
  return (
    <div className="w-full sm:w-1/3 flex items-start justify-end space-x-4 mt-4 sm:mt-0 md:w-full  xl:text-lg xl:w-full">
      <button className="bg-white border-2 border-blue-500 text-blue-500 py-2 px-4 rounded-xl font-nunito font-bold">
        Duplicate deal
      </button>
      <button className="bg-white border-2 border-red-500 text-red-500 py-2 px-4 rounded-xl font-nunito font-bold">
        Archive deal
      </button>
    </div>
  );
}

export default Button;
