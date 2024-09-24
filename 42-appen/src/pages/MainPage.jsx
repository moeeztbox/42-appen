// import Card from "../components/Card";
// import Details from "../components/Details";
// import Info from "../components/Info";
// import SecondNavbar from "../components/SecondNavbar";
// import Button from "../components/Button";

// function MainPage() {
//   return (
//     <>
//       <SecondNavbar />
//       <Info />
//       <div className="flex p-6">
//         <Details />
//         <Card />
//         <Button />
//       </div>
//     </>
//   );
// }

// export default MainPage;

import Card from "../components/Card";
import Details from "../components/Details";
import Info from "../components/Info";
import SecondNavbar from "../components/SecondNavbar";
import Button from "../components/Button";

function MainPage() {
  return (
    <>
      <SecondNavbar />
      <Info />
      <div className="flex flex-col sm:flex-row p-6 space-y-4 sm:space-y-0 md:flex-col lg:flex-row xl:flex-row">
        <Details />
        <div className="flex flex-col md:flex-row items-start space-x-4 mt-4 md:mt-6 lg:flex-col lg:h-full xl:flex-row ">
          <Card />
          <Button />
        </div>
      </div>
    </>
  );
}

export default MainPage;
