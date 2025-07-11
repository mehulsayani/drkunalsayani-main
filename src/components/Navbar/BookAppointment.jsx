import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux/bookAppointmentSlice";

export default function BookAppointment() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.bookAppointment.isOpen);
  const modalRef = useRef(null);

  // Close modal on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") dispatch(closeModal());
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dispatch]);

  // Auto focus on modal open
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/50 bg-opacity-50 flex justify-center items-center px-4"
        
        >
          <div
            ref={modalRef}
            tabIndex={-1}
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeIn outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
         onClick={() => dispatch(closeModal())}
              className="absolute top-2 right-4  text-gray-700 hover:text-red-600 transition-all text-3xl font-bold"
              aria-label="Close"
              title="Close"
            >
              &times;
            </button>

            {/* Modal Title (Optional) */}
            <div className="text-center py-3 font-semibold text-xl text-gray-800 border-b">
              Book an Appointment
            </div>

            {/* Iframe */}
            <iframe
              src="https://kivihealth.com/iam/kunal.sayani.68p1u4blxsrm/bookslot"
              title="Book Appointment"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}
