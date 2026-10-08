"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Button from "./Button";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const fieldClasses =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-slate-400 focus:border-industrial focus:outline-none focus:ring-2 focus:ring-industrial/30";

const labelClasses = "mb-2 block text-sm font-semibold text-ink";

/**
 * Frontend-only contact form. This is a static website — the form does NOT
 * send, store or transmit any data. Submitting shows an honest on-page notice.
 * Wire it to an email service (or a form backend) later if needed.
 */
export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      {submitted ? (
        <div role="status" className="rounded-lg border border-industrial/30 bg-industrial/5 p-6">
          <h3 className="text-lg font-bold text-ink">Thank you for reaching out.</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            This website is fully static, so this form does not send data anywhere — no message
            has been delivered or stored. Please contact AS Infra Concrete Pvt. Ltd. directly
            using the phone number or email address listed on this page, or connect this form to
            an email service later.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setForm(initialForm);
            }}
            className="mt-4 text-sm font-semibold text-industrial hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
          <div>
            <label htmlFor="name" className={labelClasses}>
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={update}
              placeholder="Your full name"
              className={fieldClasses}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={update}
              placeholder="you@company.com"
              className={fieldClasses}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={update}
              placeholder="Your phone number"
              className={fieldClasses}
            />
          </div>
          <div>
            <label htmlFor="company" className={labelClasses}>
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={update}
              placeholder="Your company name"
              className={fieldClasses}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClasses}>
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={update}
              placeholder="Tell us about your project and concrete requirements…"
              className={fieldClasses}
            />
          </div>
          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Static demo form — submissions are not sent or stored.
            </p>
            <Button type="submit" variant="primary" withArrow>
              Send Message
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
