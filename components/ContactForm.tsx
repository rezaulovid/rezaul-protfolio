'use client';

import { useState } from 'react';
import { Mail, Phone, Send, AlertCircle, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

const PROJECT_TYPES = [
  'Full Stack Web Development',
  'Website Development',
  'Portfolio Website',
  'E-commerce Website',
  'UI/UX Design',
  'Other',
];

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');

    // No backend email service is connected. Simulate submission for UX,
    // then show an honest success state that no real email was delivered.
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', projectType: '', message: '' });
    setErrors({});
    setStatus('idle');
  };

  return (
    <div className="contact-form-wrapper">
      {status === 'success' ? (
        <div className="contact-success-state">
          <div className="success-icon">
            <CheckCircle size={32} className="text-emerald-600" />
          </div>
          <h3 className="success-title">Thank you for your message!</h3>
          <p className="success-description">
            I&rsquo;ll review your details and get back to you soon.
          </p>
          <p className="success-disclaimer">
            <span className="inline-flex items-center gap-1 text-xs text-stone-400">
              <AlertCircle size={12} />
              This is a frontend demo &mdash; connect a backend email service
              (e.g., EmailJS, Resend, or Formspree) to receive real submissions.
            </span>
          </p>
          <button
            type="button"
            onClick={resetForm}
            className="mt-6 px-6 py-2.5 text-sm font-medium text-stone-600 hover:text-stone-800 transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-stone-700 mb-1.5"
              >
                Name <span className="text-stone-500 font-normal text-xs">(required)</span>
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your full name"
                className={`w-full px-4 py-3 rounded-xl border text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 outline-none transition-all bg-stone-50 ${
                  errors.name ? 'border-red-500 ring-1 ring-red-500/20' : 'border-stone-300'
                }`}
                aria-invalid={!!errors.name}
                aria-errormessage={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-stone-700 mb-1.5"
              >
                E-mail <span className="text-stone-500 font-normal text-xs">(required)</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-xl border text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 outline-none transition-all bg-stone-50 ${
                  errors.email ? 'border-red-500 ring-1 ring-red-500/20' : 'border-stone-300'
                }`}
                aria-invalid={!!errors.email}
                aria-errormessage={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="block text-sm font-medium text-stone-700 mb-1.5"
              >
                Project Type <span className="text-stone-500 font-normal text-xs">(required)</span>
              </label>
              <select
                id="projectType"
                autoComplete="off"
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-xl border text-stone-900 focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 outline-none transition-all bg-stone-50 appearance-none ${
                  errors.projectType ? 'border-red-500 ring-1 ring-red-500/20' : 'border-stone-300'
                }`}
                aria-invalid={!!errors.projectType}
                aria-errormessage={errors.projectType ? 'project-error' : undefined}
              >
                <option value="">Select a project type</option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p id="project-error" className="mt-1.5 text-xs text-red-600">
                  {errors.projectType}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-stone-700 mb-1.5"
              >
                Message <span className="text-stone-500 font-normal text-xs">(required)</span>
              </label>
              <textarea
                id="message"
                rows={5}
                autoComplete="off"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project, goals, and requirements..."
                className={`w-full px-4 py-3 rounded-xl border text-stone-900 placeholder-stone-400 focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 outline-none transition-all resize-none bg-stone-50 ${
                  errors.message ? 'border-red-500 ring-1 ring-red-500/20' : 'border-stone-300'
                }`}
                aria-invalid={!!errors.message}
                aria-errormessage={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-600">
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all ${
              status === 'submitting'
                ? 'bg-stone-400 cursor-not-allowed'
                : 'bg-stone-900 hover:bg-stone-800 focus:ring-2 focus:ring-stone-900/30 focus:outline-none'
            }`}
          >
            <Send size={16} />
            {status === 'submitting' ? 'Sending&hellip;' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
