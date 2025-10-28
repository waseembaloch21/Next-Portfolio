"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);
    const formRef = useRef(null);
    const buttonRef = useRef(null);
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus("❌ Please fill in all fields.");
            return;
        }

        try {
            const response = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // ✅ Correct variable
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // ✅ Correct variable
                formRef.current, // ✅ Form reference
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // ✅ Correct public key
            );

            if (response.status === 200) {
                setStatus("✅ Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("❌ Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("❌ Failed to send message. Please try again.");
        }

        setTimeout(() => setStatus(null), 3000);
    };

    return (
        <section
            id="contact"
            className="py-20 px-4 bg-black text-white font-sans "
        >
            <div className="max-w-xl mx-auto space-y-12">
                <h2 className="text-4xl font-bold text-center mb-12">
                    <span className="bg-cyan-500 bg-clip-text text-transparent">
                        Get In Touch
                    </span>
                </h2>

                <form
                 ref={formRef}
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
                            name="name"
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
                            name="email"
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
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0f1e24] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-100 text-white"
                            placeholder="Type your message..."
                            required
                        />
                    </div>

                    <button
                       ref={buttonRef}
                        className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 py-3 rounded-md font-serif text-black transition duration-300 shadow-lg hover:shadow-cyan-500/50 "
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

