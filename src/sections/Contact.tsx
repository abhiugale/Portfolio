import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import type { ContactFormData } from '@/types';
import { SOCIAL_LINKS } from '@/data';
import SectionHeader from '@/components/ui/SectionHeader';
import GlowOrb from '@/components/ui/GlowOrb';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const contactDetails = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: SOCIAL_LINKS.email,
    href: `mailto:${SOCIAL_LINKS.email}`,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'abhishek-ugale',
    href: SOCIAL_LINKS.linkedin,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'abhiugale',
    href: SOCIAL_LINKS.github,
  },
];

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');

    try {
      await emailjs.send(
        'service_0mtbqqc',
        'template_0yyw6pj',
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        'NRfU7WEBIujykBcTA'
      );
      setSubmitState('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitState('error');
    }

    setTimeout(() => setSubmitState('idle'), 4000);
  };

  const inputClass = `
    w-full px-4 py-3.5 rounded-xl text-sm text-white
    bg-white/[0.04] border border-white/10
    placeholder:text-white/25
    focus:outline-none focus:border-primary-500/60 focus:bg-white/[0.06]
    transition-all duration-300
  `;

  const labelClass = 'block text-sm font-medium text-white/55 mb-2';

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <GlowOrb color="primary" size={450} opacity={0.08} className="-left-20 top-1/2 -translate-y-1/2" />
      <GlowOrb color="accent" size={350} opacity={0.06} className="right-0 bottom-20" />

      <div className="section-container">
        <SectionHeader
          tag="CONTACT"
          title="Let's Connect"
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left panel */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6 space-y-6">
              <h3 className="font-display font-bold text-lg text-white">Get in Touch</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                I'm currently open to new opportunities. Whether you have a question, a project,
                or just want to connect — my inbox is always open!
              </p>

              <div className="space-y-4">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary-500/10
                                    border border-primary-500/20 text-primary-400 group-hover:bg-primary-500/20
                                    group-hover:text-primary-300 transition-all duration-300 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-white/35 mb-0.5">{item.label}</p>
                      <p className="text-sm text-white/75 group-hover:text-white transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={SOCIAL_LINKS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full justify-center text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelClass}>Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Abhishek Ugale"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Abhishek, I'd love to discuss..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Status messages */}
              {submitState === 'success' && (
                <motion.div
                  className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/25 text-green-400 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Message sent! I'll get back to you shortly.
                </motion.div>
              )}
              {submitState === 'error' && (
                <motion.div
                  className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  Failed to send. Please email me directly at {SOCIAL_LINKS.email}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={submitState === 'loading'}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                id="contact-submit-btn"
              >
                {submitState === 'loading' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25"/><path fill="currentColor" d="M4 12a8 8 0 018-8v8z" className="opacity-75"/></svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
