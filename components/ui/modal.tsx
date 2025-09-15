"use client"


import { ReactElement } from "react"
import { Dialog, DialogContent } from "./dialog"
import { X } from "lucide-react"

interface ModalProps {
    isOpen?: boolean
    onClose?: () => void
    body?: ReactElement
    footer?: ReactElement
    totalSteps?: number
    step?: number
}

const Modal = ({ body, isOpen, onClose, footer, step, totalSteps }: ModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className=" p-1">
                <div className="flex items-center gap-6">
                    <button onClick={onClose} className='p-1 border-0 text-white hover:opacity-70 transition w-fit '>
                        <X size={28} />
                    </button>
                    {step && totalSteps && (
                        <div className="text-xl font-bold">
                            Step {step} of {totalSteps}
                        </div>
                    )}
                </div>
                <div>
                    {body}
                </div>
                {footer && <div>{footer}</div>}
            </DialogContent>
        </Dialog>
    )
}

export default Modal