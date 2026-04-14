import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          to_email: 'emailkamu@gmail.com',
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="min-h-screen bg-primary/30 py-16 xl:py-24 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col xl:w-[300px] flex-shrink-0"
          >
            <h2 className="h2 text-center xl:text-left">
              Get in <span className="text-accent">touch.</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed text-center xl:text-left max-w-[380px] mx-auto xl:mx-0">
              Have a project in mind or just want to say hello? Fill out the
              form and I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex-1 min-w-0 w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="input"
              />

              <textarea
                name="message"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                required
                className="textarea"
              />

              {/* Status message */}
              {status === 'success' && (
                <p className="text-green-400 text-sm">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm">Failed to send. Please try again.</p>
              )}

              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[180px] px-8
                  flex items-center justify-center gap-x-2 mx-auto xl:mx-0
                  hover:border-accent hover:text-accent transition-all duration-300 group"
              >
                <span>Send it</span>
                <BsArrowRight className="text-xl group-hover:translate-x-1 transition-all duration-300" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;