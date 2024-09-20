import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Importing the X icon from Heroicons v2

export default function Example({ opens, setOpens }) {
  return (
    <Dialog
      open={opens}
      onClose={() => setOpens(false)}
      className="fixed inset-0 z-10 overflow-y-auto"
    >
      <div className="flex min-h-screen items-center justify-center p-4">
        <DialogPanel className="relative bg-white rounded-lg shadow-xl max-w-md w-full">
          <div className="flex border-b-2 justify-between items-center">
            <div className="text-lg font-bold text-gray-900">
              Check your e-mail
            </div>
            <button
              onClick={() => setOpens(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-2 text-sm text-gray-500 text-center">
            We have sent you an e-mail with instructions on how to change your
            password.
          </div>

          <div className="mt-4 flex justify-end border-t-2">
            <button
              onClick={() => setOpens(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
