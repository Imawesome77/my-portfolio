import React, { useState } from "react";

const CvRequestForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Request My CV</h2>

      {!submitted ? (
        <form
          action="https://formspree.io/f/mzzaoeww" // replace with your Formspree endpoint
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:border-teal-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:border-teal-400"
          />
          <textarea
            name="message"
            placeholder="Tell me why you’d like my CV"
            rows="3"
            className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:border-teal-400"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-indigo-500 to-sky-700 rounded-full text-white hover:opacity-90 hover:scale-105 transition-transform duration-300"
          >
            Request Access
          </button>
        </form>
      ) : (
        <p className="text-green-400 mt-4">
          ✅ Thanks! Your request has been sent. I’ll reply soon.
        </p>
      )}
    </div>
  );
};

export default CvRequestForm;
