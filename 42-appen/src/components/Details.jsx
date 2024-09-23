function Details() {
  return (
    <form className="space-y-6 max-w-2xl mx-auto">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <div className="mt-2">
          <input
            id="title"
            name="title"
            type="text"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
        >
          <option>Select Category</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="provider"
          className="block text-sm font-medium text-gray-700"
        >
          Provider
        </label>
        <select
          id="provider"
          name="provider"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
        >
          <option>Aldi</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Offer description
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          className="mt-1 block w-full p-2.5 text-base text-gray-900 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 resize-none"
        ></textarea>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label
            htmlFor="start-date"
            className="block text-sm font-medium text-gray-700"
          >
            Start date
          </label>
          <input
            type="date"
            id="start-date"
            name="start-date"
            className="mt-1 block w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="w-1/2">
          <label
            htmlFor="end-date"
            className="block text-sm font-medium text-gray-700"
          >
            End date (optional)
          </label>
          <input
            type="date"
            id="end-date"
            name="end-date"
            className="mt-1 block w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="deal-url"
          className="block text-sm font-medium text-gray-700"
        >
          Deal details URL (optional)
        </label>
        <div className="mt-2">
          <input
            id="deal-url"
            name="deal-url"
            type="url"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Status
        </label>

        <div className="flex items-center mb-4">
          <input
            id="live"
            name="status"
            type="radio"
            value="Live"
            checked
            className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          />
          <label
            htmlFor="live"
            className="ml-2 block text-sm font-medium text-gray-700"
          >
            Live
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            id="inactive"
            name="status"
            type="radio"
            value="Inactive"
            className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          />
          <label
            htmlFor="inactive"
            className="ml-2 block text-sm font-medium text-gray-700"
          >
            Inactive
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="expired"
            name="status"
            type="radio"
            value="Expired"
            className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          />
          <label
            htmlFor="expired"
            className="ml-2 block text-sm font-medium text-gray-700"
          >
            Expired
          </label>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Save changes
        </button>
      </div>
    </form>
  );
}

export default Details;
