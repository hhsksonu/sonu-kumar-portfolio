import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_84wvmpo",
        "template_fprlybl",
        form.current,
        "D0RA5vjWnjdloNBTJ"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        () => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#060c18]"
    >

      <ToastContainer />

      {/* Section Title */}
      <div className="relative text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white tracking-wider">
          CONTACT
        </h2>
        <div className="w-32 h-1 bg-[#00ff88] mx-auto mt-4 shadow-[0_0_18px_#00ff88]" />
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          Have an idea, opportunity, or question? Let’s talk.
        </p>
      </div>

      {/* Contact Form */}
      <div className="relative w-full max-w-md bg-[#050414] p-6 rounded-xl border border-[#00ff88]/40 shadow-[0_0_35px_#00ff8833]">
        <h3 className="text-xl font-bold text-white text-center mb-4">
          Connect With Me 
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-black text-white border border-[#00ff88]/30 focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_10px_#00ff88]"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-black text-white border border-[#00ff88]/30 focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_10px_#00ff88]"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-black text-white border border-[#00ff88]/30 focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_10px_#00ff88]"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-black text-white border border-[#00ff88]/30 focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_10px_#00ff88]"
          />

          <button
            type="submit"
            className="w-full bg-[#00ff88] text-black font-bold py-3 rounded-md hover:shadow-[0_0_25px_#00ff88] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
