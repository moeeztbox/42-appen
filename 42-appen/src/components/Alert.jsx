import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Importing the X icon from Heroicons v2

export default function Example({ opens, setOpens }) {
  return (
    <Dialog
      open={opens}
      onClose={() => setOpens(false)}
      className="fixed inset-0 z-10 flex items-center justify-center p-4  bg-gray-800/20"
    >
      <div className="flex min-h-screen items-center justify-center">
        <DialogPanel className="relative bg-white rounded-lg shadow-xl max-w-md w-full">
          <div className="flex border-b-2 justify-between items-center p-4">
            <div className="text-lg font-nunito font-bold text-gray-900">
              Check your e-mail
            </div>
            <button
              onClick={() => setOpens(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
          </div>

          <div className="pb-8 py-4 px-5 text-sm text-black font-nunito">
            We have sent you an e-mail with instructions on how to change your
            password.
          </div>

          <div className="p-3 flex justify-end border-t-2">
            <button
              onClick={() => setOpens(false)}
              className="bg-gray-200 text-black font-nunito font-bold px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
