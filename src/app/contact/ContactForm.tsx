'use client';

import { useMemo, useState, type FormEvent } from 'react';

import { Button } from '@/components/Button';
import { siteConfig } from '@/data/siteConfig';
import { WHATSAPP_NUMBER } from '@/data/whatsapp';

type FormState = {
  name: string;
  email: string;
  phone: string;
  topic: 'Product inquiry' | 'Bulk order' | 'Yakra Glamp (early access)' | 'Other';
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  topic: 'Product inquiry',
  message: ''
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const mailto = useMemo(() => {
    const subject = `Yakra.lk — ${form.topic}`;
    const bodyLines = [
      `Name: ${form.name || '-'}`,
      `Email: ${form.email || '-'}`,
      `Phone: ${form.phone || '-'}`,
      '',
      form.message || '(No message)'
    ];

    const body = bodyLines.join('\n');

    return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body
    )}`;
  }, [form]);

  const whatsappUrl = useMemo(() => {
    const text = [
      `Hi Yakra,`,
      `Topic: ${form.topic}`,
      form.name ? `Name: ${form.name}` : null,
      form.phone ? `Phone: ${form.phone}` : null,
      form.message ? `Message: ${form.message}` : null
    ]
      .filter(Boolean)
      .join('\n');

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    window.location.href = mailto;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-medium text-forest-100/70" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className="mt-2 w-full rounded-md border border-white/10 bg-forest-950/60 px-3 py-2 text-sm text-forest-100 placeholder:text-forest-100/40 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-forest-100/70" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className="mt-2 w-full rounded-md border border-white/10 bg-forest-950/60 px-3 py-2 text-sm text-forest-100 placeholder:text-forest-100/40 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
            placeholder="name@example.com"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-medium text-forest-100/70" htmlFor="phone">
            Phone (optional)
          </label>
          <input
            id="phone"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className="mt-2 w-full rounded-md border border-white/10 bg-forest-950/60 px-3 py-2 text-sm text-forest-100 placeholder:text-forest-100/40 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
            placeholder="+94 ..."
          />
        </div>

        <div>
          <label className="text-xs font-medium text-forest-100/70" htmlFor="topic">
            Topic
          </label>
          <select
            id="topic"
            value={form.topic}
            onChange={(e) => update('topic', e.target.value as FormState['topic'])}
            className="mt-2 w-full rounded-md border border-white/10 bg-forest-950/60 px-3 py-2 text-sm text-forest-100 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
          >
            <option>Product inquiry</option>
            <option>Bulk order</option>
            <option>Yakra Glamp (early access)</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-forest-100/70" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          rows={5}
          className="mt-2 w-full rounded-md border border-white/10 bg-forest-950/60 px-3 py-2 text-sm text-forest-100 placeholder:text-forest-100/40 focus:outline-none focus:ring-2 focus:ring-accent-500/50"
          placeholder="Tell us what you’d like to order or ask about..."
          required
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit">Send inquiry (Email)</Button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-white/5 px-4 py-2 text-sm font-medium text-forest-100 ring-1 ring-white/10 hover:bg-white/10"
        >
          Send via WhatsApp
        </a>
      </div>

      {submitted ? (
        <p className="text-xs text-forest-100/60">
          If your email app didn’t open, you can copy our email: <span className="text-forest-100">{siteConfig.contact.email}</span>
        </p>
      ) : null}
    </form>
  );
}
