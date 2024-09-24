// function Card() {
//   return (
//     <div className="w-1/3 h-full rounded-xl border-2 bg-blue-50 p-4 ml-12">
//       <div className="flex justify-between mb-2">
//         <h6 className="font-nunito font-bold">Created</h6>
//         <p className="font-nunito">14 Sep 2023 - 14:21</p>
//       </div>
//       <div className="flex justify-between mb-2">
//         <h6 className="font-nunito font-bold">Locations</h6>
//         <p className="font-nunito">11</p>
//       </div>
//       <div className="flex justify-between mb-2">
//         <h6 className="font-nunito font-bold">Cards</h6>
//         <p className="font-nunito">2</p>
//       </div>
//       <div className="flex justify-between mb-2">
//         <h6 className="font-nunito font-bold">Usage</h6>
//         <p className="font-nunito">301</p>
//       </div>
//     </div>
//   );
// }

// export default Card;

function Card() {
  return (
    <div className="w-full sm:w-1/3 md:w-full h-full rounded-xl border-2 bg-blue-50 p-4 m-2 ">
      <div className="flex justify-between mb-2">
        <h6 className="font-nunito font-bold">Created</h6>
        <p className="font-nunito">14 Sep 2023 - 14:21</p>
      </div>
      <div className="flex justify-between mb-2">
        <h6 className="font-nunito font-bold">Locations</h6>
        <p className="font-nunito">11</p>
      </div>
      <div className="flex justify-between mb-2">
        <h6 className="font-nunito font-bold">Cards</h6>
        <p className="font-nunito">2</p>
      </div>
      <div className="flex justify-between mb-2">
        <h6 className="font-nunito font-bold">Usage</h6>
        <p className="font-nunito">301</p>
      </div>
    </div>
  );
}

export default Card;
