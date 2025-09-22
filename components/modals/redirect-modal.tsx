import { Button } from "@/components/ui/button"

interface RedirectModalProps {
  isOpen: boolean
  onClose: () => void
  onProceed: () => void
  itemName?: string
}

export function RedirectModal({ isOpen, onClose, onProceed, itemName }: RedirectModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Do you want to proceed?
          </h2>
          <p className="text-gray-600 mb-8">
            You will be redirected to the webpage of the item.
          </p>
          
          <div className="flex space-x-4 justify-center">
            <Button
              onClick={onClose}
              className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-600"
            >
              No, Cancel
            </Button>
            <Button
              onClick={onProceed}
              className="px-6 py-2 bg-[#2B6CB0] text-white rounded-lg hover:bg-blue-600"
            >
              Yes, Proceed
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
