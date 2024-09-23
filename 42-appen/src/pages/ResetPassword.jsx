import Navbar from "../components/Navbar";

function ResetPassword() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-center text-2xl font-bold text-gray-900">
            Reset password
          </h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-nunito font-bold leading-3 text-gray-900"
              >
                Enter new password
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
                  Confirm new password
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
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className=" bg-blue-700 font-nunito font-bold hover:bg-blue-700 text-white py-2.5 px-6 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Alert opens={open} setOpens={setOpen} /> */}
    </>
  );
}

export default ResetPassword;
