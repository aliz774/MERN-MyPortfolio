// const Contact = () => (
//   <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
//     <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">Get in Touch</h2>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//       <div className="bg-white rounded-lg shadow-lg p-8">
//         <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Contact Information</h3>
//         <p className="mb-2"><strong>&#128231; Email:</strong> sibtain123@gmail.com</p>
//         <p className="mb-2"><strong>&#128222; Phone:</strong> +91 12345 67890</p>
//         <p><strong>&#127968; Location:</strong> Ahmedabad, Gujarat</p>
//       </div>
//       <form className="bg-white rounded-lg shadow-lg p-8 space-y-4">
//         <div>
//           <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
//           <input type="text" id="name" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
//           <input type="email" id="email" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
//         </div>
//         <div>
//           <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
//           <textarea id="message" rows="4" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
//         </div>
//         <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
//           Send
//         </button>
//       </form>
//     </div>
//   </section>
// );
// export default Contact;

import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   const res = await axios.post("http://localhost:5000/api/contact", formData);


      setStatus(res.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Error sending message");
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Contact Information</h3>
          <p className="mb-2"><strong>&#128231; Email:</strong> sibtain123@gmail.com</p>
          <p className="mb-2"><strong>&#128222; Phone:</strong> +91 12345 67890</p>
          <p><strong>&#127968; Location:</strong> Ahmedabad, Gujarat</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Send
          </button>
          {status && <p className="text-green-600">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
