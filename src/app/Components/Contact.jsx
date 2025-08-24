"use client";

import { useState } from "react";
import { FaUserAlt, FaEnvelope, FaSpinner, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();

            if (result.success) {
                setStatus('✅ Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus(`❌ Failed to send: ${result.error}`);
            }
        } catch (err) {
            setStatus(`❌ Error: ${err.message}`);
        }
    };

    return (
        <section
            id="contact"
            className="py-20 px-4 bg-gradient-to-br-black text-white"
        >
            <div className="max-w-xl mx-auto space-y-12">
                <h2 className="text-4xl font-bold text-center mb-12">
                    <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                        Get In Touch
                    </span>
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-800 p-8 rounded-xl shadow-xl space-y-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div>
                        <label htmlFor="name" className="block mb-1 font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0f1e24] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-100 text-white"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0f1e24] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-100 text-white"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-1 font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0f1e24] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-100 text-white"
                            placeholder="Type your message..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-cyan-300 hover:bg-cyan-500 py-3 rounded-md font-serif text-black transition duration-300"
                        data-aos="zoom-out"
                        data-aos-delay="400"
                    >
                        Send Message
                    </button>

                    {status && <p className="text-sm mt-2">{status}</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
