
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
} from "react-icons/fa";

const SERVICE_ID = "service_ptebtui";
const TEMPLATE_ID = "template_qg2mxmd";
const PUBLIC_KEY = "z6uIUYQLL33UKz3eg";

const initialForm = {
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (sending) return;

    setSending(true);

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          subject: form.subject,
          message: form.message,
          to_email: "fasihanaeem33@gmail.com",
          reply_to: form.from_email,
        },
        { publicKey: PUBLIC_KEY }
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setForm(initialForm);
      } else {
        toast.error("Message could not be sent. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error(
        error?.text || "Failed to send message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full min-w-0 rounded-xl border border-slate-700 bg-slate-950 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20";

  return (
    <section id="contact" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="font-semibold uppercase tracking-[3px] text-cyan-400">
            Get In Touch
          </p>
          <h2 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
            Contact Me
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Have an internship opportunity or a project in mind?
            Send me a message. I would love to hear from you.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7 md:p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-400">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-bold text-white">Email Me</h3>
              <a
                href="mailto:fasihanaeem33@gmail.com"
                className="mt-3 block break-all text-slate-400 transition hover:text-cyan-400"
              >
                fasihanaeem33@gmail.com
              </a>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7 md:p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-400">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-bold text-white">Location</h3>
              <p className="mt-3 text-slate-400">Karachi, Pakistan</p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="min-w-0 rounded-3xl border border-slate-800 bg-slate-900 p-6 md:p-9 lg:col-span-3"
          >
            <div className="mb-7 flex items-center gap-3">
              <FaUser className="text-xl text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">
                Send a Message
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="min-w-0">
                <label htmlFor="from_name" className="mb-2 block text-sm font-medium text-slate-300">
                  Your Name
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  className={inputClass}
                />
              </div>

              <div className="min-w-0">
                <label htmlFor="from_email" className="mb-2 block text-sm font-medium text-slate-300">
                  Your Email
                </label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  value={form.from_email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-300">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                required
                maxLength={150}
                className={inputClass}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={6}
                required
                maxLength={5000}
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 font-bold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FaPaperPlane />
              {sending ? "Sending Message..." : "Send Message"}
            </button>

            <p className="mt-4 text-center text-sm text-slate-500">
              Your message will be sent directly to my email.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
