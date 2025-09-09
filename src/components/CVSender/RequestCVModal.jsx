import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RequestCVModal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    try {
      const res = await fetch("https://formspree.io/f/mzzaoeww", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("✅ Request sent successfully!");
        form.reset();
        setShowModal(false);
      } else {
        toast.error("❌ Something went wrong. Try again later.");
      }
    } catch (error) {
      toast.error("⚠️ Network error. Please check your connection.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-[#022623] p-6 rounded-xl shadow-lg w-11/12 max-w-lg relative">
        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3 text-gray-300 hover:text-white text-xl"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold text-white mb-4 text-center">
          Request Access to My CV
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Write a short message"
            className="p-3 rounded bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            defaultValue="I would like to request access to Vishal Parmar's CV."
          ></textarea>

          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-700 text-white font-medium hover:opacity-90 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-indigo-700"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestCVModal;
