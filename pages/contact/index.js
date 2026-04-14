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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-primary/30 py-16 xl:py-24 flex items-center">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 items-start">

          {/* Left — judul & deskripsi */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full xl:w-[300px] flex-shrink-0 flex flex-col items-center xl:items-start"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center xl:text-left mb-3">
              Get in <span className="text-accent">touch.</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed text-center xl:text-left max-w-[380px]">
              Have a project in mind or just want to say hello? Fill out the
              form and I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex-1 min-w-0 w-full"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Name & Email */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="input w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="input w-full"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="input w-full"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="textarea w-full resize-none"
              />

              {/* Status message */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm text-center xl:text-left"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm text-center xl:text-left"
                >
                  Failed to send. Please try again.
                </motion.p>
              )}

              {/* Submit button */}
              <div className="flex justify-center xl:justify-start">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn rounded-full border border-white/50 px-8 py-3
                    flex items-center justify-center gap-x-2
                    hover:border-accent hover:text-accent transition-all duration-300 group
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{loading ? 'Sending...' : 'Send it'}</span>
                  {!loading && (
                    <BsArrowRight className="text-xl group-hover:translate-x-1 transition-all duration-300" />
                  )}
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;