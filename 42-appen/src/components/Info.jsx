function Info() {
  return (
    <>
      <div class=" mx-auto  p-6">
        <div class="mb-6">
          <a href="#" class="text-indigo-600 flex items-center space-x-2">
            <span class="text-xl font-nunito text-gray-400 ">&lt;</span>
            <span class="text-sm text-gray-400 font-nunito">
              Go back to{" "}
              <span className="text-black font-nunito font-bold">Deals</span>
            </span>
          </a>
        </div>

        <h2 class="text-2xl font-nunito font-bold text-gray-800 mb-4">
          10% discount on fresh meat every Friday after 18:00
        </h2>

        <div class="flex font-nunito space-x-6 text-sm text-gray-700">
          <a
            href="#"
            class="link-term border-b-2 border-transparent focus:border-indigo-600 active:border-indigo-600 focus:outline-none"
          >
            Info
          </a>
          <a
            href="#"
            class="link-term font-nunito border-b-2 border-transparent focus:border-indigo-600 active:border-indigo-600 focus:outline-none"
          >
            Terms
          </a>
          <a
            href="#"
            class="link-term font-nunito border-b-2 border-transparent focus:border-indigo-600 active:border-indigo-600 focus:outline-none"
          >
            How to Redeem
          </a>
          <a
            href="#"
            class="link-term border-b-2 font-nunito border-transparent focus:border-indigo-600 active:border-indigo-600 focus:outline-none"
          >
            Locations
          </a>
          <a
            href="#"
            class="link-term border-b-2 font-nunito border-transparent focus:border-indigo-600 active:border-indigo-600 focus:outline-none"
          >
            Cards Usage
          </a>
        </div>

        <div class="mt-4 border-b border-gray-300"></div>
      </div>
    </>
  );
}

export default Info;
