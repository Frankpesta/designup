import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

interface InvoiceSuccessModalProps {
  isOpen: boolean
  onClose: () => void
  advertiserId?: string
}

export function InvoiceSuccessModal({ isOpen, onClose, advertiserId }: InvoiceSuccessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Invoice Sent Successfully
          </h2>
          <p className="text-gray-600 mb-8">
            Congratulations! You have successfully sent the invoice to{" "}
            <span className="font-semibold">{advertiserId || "ADV-2041"}</span>{" "}
            and will be notified in their mail.
          </p>
          
          <Button
            onClick={onClose}
            className="px-6 py-2 bg-[#2B6CB0] text-white rounded-lg hover:bg-blue-600 flex items-center gap-2 mx-auto"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
