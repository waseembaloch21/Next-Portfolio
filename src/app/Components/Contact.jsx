"use client";

import { useState } from "react";
import { FaUserAlt, FaEnvelope, FaSpinner, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const currentDate = new Date().toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
        setDate(currentDate);

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ to: email, name,  message }),
            });

            if (response.ok) {
                setStatus("Email sent successfully!");
            } else {
                const errorData = await response.json();
                setStatus(`Failed to send email: ${errorData.error}`);
            }
        } catch (error) {
            setStatus(`An error occurred: ${error.message}`);
        }
    };

    return (
        <div id='contact' className="bg-black text-white py-10 w-full px-5 sm:px-20 md:px-32">
            <h2 className="text-3xl font-bold font-serif mb-8 text-center" data-aos="fade-up">
                Contact Me
            </h2>
            <div className="flex items-center justify-between">
                <div className="hidden md:block w-1/2 pl-8">
                    <img
                        src="/contact.svg"
                        alt="Contact Illustration"
                        className="w-full h-auto rounded-lg"
                       
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <form method="POST" onSubmit={sendEmail} className="bg-[#1a2c34] p-8 rounded-xl shadow-xl space-y-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-serif text-lg mb-2">Name</label>
                            <div className="flex items-center border border-gray-500 p-2 rounded-lg">
                                <FaUserAlt className="text-blue-500 mr-2" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required

                                    className="bg-transparent font-serif text-white w-full outline-none"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block font-serif text-lg mb-2">Email</label>
                            <div className="flex items-center border border-gray-500 p-2 rounded-lg">
                                <FaEnvelope className="text-blue-500 mr-2" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-transparent font-serif text-white w-full outline-none"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block font-serif text-lg mb-2">Message</label>
                            <div className="flex items-start border border-gray-500 p-2 rounded-lg">
                                <FaPaperPlane className="text-blue-500 mr-2 mt-1" />
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="bg-transparent font-serif text-white w-full outline-none resize-none"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-cyan-300 hover:bg-cyan-600 text-black font-serif rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                            Send Email
                        </button>
                        {status && (
                            <p
                                className={`text-sm text-center mt-4 ${status.includes("successfully") ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {status}
                            </p>
                        )}
                        {date && <p className="text-sm text-center text-gray-500">Sent on: {date}</p>}
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;
