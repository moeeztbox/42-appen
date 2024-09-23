import Details from "../components/Details";
import Info from "../components/Info";
import SecondNavbar from "../components/SecondNavbar";
function MainPage() {
  return (
    <>
      <SecondNavbar />
      <Info />
      <div className="flex-row">
        <Details />
      </div>
    </>
  );
}

export default MainPage;
