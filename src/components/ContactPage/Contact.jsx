import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#011d1d] to-[#022c2b] text-white px-6 py-16">
      
      {/* Section Heading */}
      <h2 className="text-3xl md:text-3xl font-bold mb-12 text-center">
        Contact <span className="stroke-text">Me</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl w-full">
        
        {/* Left: Form */}
        <div className="bg-transparent border border-gray-600 rounded-xl p-8 w-full max-w-md shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 focus:border-cyan-400 outline-none text-white placeholder-gray-400"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 focus:border-cyan-400 outline-none text-white placeholder-gray-400"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 focus:border-cyan-400 outline-none text-white placeholder-gray-400 resize-none"
              required
            />

            {/* Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-teal-900 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition"
            >
              <span>➤</span> Send Message
            </button>
          </form>
        </div>

        {/* Right: Heading */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold">Say hello.</h1>
        </div>
      </div>
    </section>
  );
}
