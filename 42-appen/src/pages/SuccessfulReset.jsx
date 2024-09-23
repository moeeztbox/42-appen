import Navbar from "../components/Navbar";

function SuccessfulReset() {
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
          <div className="pb-6">
            <div className="mt-2">
              <div className="text-sm">
                <p className="text-center mt-4 font-nunito font-bold text-black">
                  Your password has been reset
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className=" bg-blue-700 font-nunito hover:bg-blue-700 text-white py-2.5 px-6 rounded-lg"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessfulReset;
