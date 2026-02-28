import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm("service_84wvmpo", "template_fprlybl", form.current, "D0RA5vjWnjdloNBTJ")
      .then(() => {
        form.current.reset();
        toast.success("Message sent! I'll get back to you soon. ✅", { position: "top-right", autoClose: 3000, theme: "dark" });
      }, () => {
        toast.error("Something went wrong. Try again.", { position: "top-right", autoClose: 3000, theme: "dark" });
      })
      .finally(() => setSending(false));
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: "Email", value: "sonukumaryz463@gmail.com", href: "mailto:sonukumaryz463@gmail.com" },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "linkedin.com/in/hhsksonu", href: "https://linkedin.com/in/hhsksonu/" },
    { icon: <FaGithub />, label: "GitHub", value: "github.com/hhsksonu", href: "https://github.com/hhsksonu/" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Pune, India", href: "#" },
  ];

  return (
    <section id="contact" className="relative py-28">
      <ToastContainer />
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--em)", fontFamily: "DM Sans" }}>
            Let's Connect
          </p>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-white">Get in Touch</h2>
          <div className="w-12 h-0.5 mx-auto mt-5 rounded-full"
            style={{ background: "linear-gradient(90deg, var(--em), var(--em-light))", boxShadow: "0 0 12px rgba(16,185,129,0.5)" }} />
          <p className="mt-5 max-w-xl mx-auto text-base"
            style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>
            Have an idea, opportunity, or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all group cursor-pointer"
                style={{ background: "var(--bg-card2)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)"; e.currentTarget.style.background = "rgba(16,185,129,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "var(--bg-card2)"; }}>
                <div className="w-10 h-10 flex items-center justify-center rounded-lg text-sm flex-shrink-0 transition-all"
                  style={{ background: "rgba(16,185,129,0.1)", color: "var(--em-light)", border: "1px solid rgba(16,185,129,0.2)" }}>
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                    style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>{label}</p>
                  <p className="text-sm font-medium text-white" style={{ fontFamily: "DM Sans" }}>{value}</p>
                </div>
              </a>
            ))}

            {/* Availability */}
            <div className="p-5 rounded-xl mt-2"
              style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(245,158,11,0.05))", border: "1px solid rgba(16,185,129,0.2)" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                    style={{ background: "var(--em)" }} />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: "var(--em)" }} />
                </span>
                <p className="text-sm font-bold text-white" style={{ fontFamily: "DM Sans" }}>Available Now</p>
              </div>
              <p className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "DM Sans", lineHeight: "1.6" }}>
                Actively seeking Full-Stack / AI / Data Science roles. Open to remote or relocation.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3 glass-card p-7 sm:p-9">
            <h3 className="font-syne font-bold text-xl text-white mb-6">Send Me a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>Name</label>
                  <input type="text" name="user_name" required placeholder="Your Name" className="form-input" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>Email</label>
                  <input type="email" name="user_email" required placeholder="your@email.com" className="form-input" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>Subject</label>
                <input type="text" name="subject" required placeholder="Opportunity / Collaboration / Hello" className="form-input" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-muted)", fontFamily: "DM Sans" }}>Message</label>
                <textarea name="message" required rows="5" placeholder="Tell me about your project or opportunity..." className="form-input resize-none" />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-black transition-all hover:shadow-em-glow disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, #10b981, #34d399)", fontFamily: "DM Sans", cursor: sending ? "not-allowed" : "pointer" }}>
                {sending ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
