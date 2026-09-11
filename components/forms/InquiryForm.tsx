'use client';

import { useId, useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { track } from '@/lib/analytics';
import { GROUP } from '@/content/group';
import type { InquiryType } from '@/content/types';

/**
 * The one form component behind every enquiry on the site.
 *
 * Each page supplies its own `fields` and `type`; the transport, validation
 * display, accessibility wiring and analytics are shared, so a new form is a
 * data change rather than a new component.
 */

export type ExtraField = {
  name: string;
  label: string;
  type?: 'text' | 'number' | 'date' | 'select' | 'textarea';
  options?: string[];
  required?: boolean;
  help?: string;
  placeholder?: string;
};

export type InquiryFormProps = {
  type: InquiryType;
  companyId: string | null;
  /** Notification mailbox shown when the backend is not connected. */
  fallbackEmail?: string;
  submitLabel?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  /** Collected into `details` on the Firestore document. */
  extraFields?: ExtraField[];
  showOrganisation?: boolean;
  intro?: string;
};

type Status =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'success' }
  | { kind: 'error'; message: string }
  | { kind: 'invalid'; errors: Record<string, string> };

const inputClass =
  'w-full rounded-sm border border-line bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-400 focus:border-accent';

export function InquiryForm({
  type,
  companyId,
  fallbackEmail = GROUP.email,
  submitLabel = 'Send enquiry',
  messageLabel = 'How can we help?',
  messagePlaceholder,
  extraFields = [],
  showOrganisation = false,
  intro,
}: InquiryFormProps) {
  const formId = useId();
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const [touched, setTouched] = useState(false);

  const fieldError = (name: string) =>
    status.kind === 'invalid' ? status.errors[name] : undefined;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const details: Record<string, string> = {};
    for (const field of extraFields) {
      const value = data.get(field.name);
      if (typeof value === 'string' && value.trim()) details[field.label] = value.trim();
    }

    const payload = {
      type,
      companyId,
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      organisation: showOrganisation ? data.get('organisation') : undefined,
      message: data.get('message'),
      company_website: data.get('company_website'),
      details,
    };

    setStatus({ kind: 'submitting' });
    track('inquiry_submit', { inquiry_type: type, company: companyId ?? 'group' });

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = (await response.json().catch(() => ({}))) as {
        errors?: Record<string, string>;
        error?: string;
      };

      if (response.ok) {
        setStatus({ kind: 'success' });
        form.reset();
        return;
      }
      if (response.status === 422 && json.errors) {
        setStatus({ kind: 'invalid', errors: json.errors });
        track('inquiry_error', { inquiry_type: type, reason: 'validation' });
        return;
      }
      setStatus({
        kind: 'error',
        message: json.error ?? 'Something went wrong. Please try again.',
      });
      track('inquiry_error', { inquiry_type: type, reason: String(response.status) });
    } catch {
      setStatus({
        kind: 'error',
        message: 'We could not reach the server. Please check your connection and try again.',
      });
      track('inquiry_error', { inquiry_type: type, reason: 'network' });
    }
  }

  if (status.kind === 'success') {
    return (
      <div role="status" className="rounded-sm border border-accent bg-accent-soft p-8">
        <h3 className="text-h3">Thank you — we have your enquiry.</h3>
        <p className="mt-3 text-ink-600">
          A member of the team will be in touch. If it is urgent, email us at{' '}
          <a className="underline underline-offset-4" href={`mailto:${fallbackEmail}`}>
            {fallbackEmail}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {intro ? <p className="text-ink-600">{intro}</p> : null}

      {status.kind === 'error' ? (
        <div role="alert" className="rounded-sm border border-red-300 bg-red-50 p-4 text-sm text-red-900">
          <p>{status.message}</p>
          <p className="mt-2">
            You can reach us directly at{' '}
            <a className="underline underline-offset-4" href={`mailto:${fallbackEmail}`}>
              {fallbackEmail}
            </a>
            .
          </p>
        </div>
      ) : null}

      {status.kind === 'invalid' ? (
        <div role="alert" className="rounded-sm border border-red-300 bg-red-50 p-4 text-sm text-red-900">
          Please correct the highlighted fields and try again.
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          name="name"
          label="Full name"
          required
          error={fieldError('name')}
          autoComplete="name"
        />
        <Field
          id={`${formId}-email`}
          name="email"
          label="Email address"
          type="email"
          required
          error={fieldError('email')}
          autoComplete="email"
        />
        <Field
          id={`${formId}-phone`}
          name="phone"
          label="Phone"
          type="tel"
          error={fieldError('phone')}
          autoComplete="tel"
          optional
        />
        {showOrganisation ? (
          <Field
            id={`${formId}-organisation`}
            name="organisation"
            label="Organisation"
            error={fieldError('organisation')}
            autoComplete="organization"
            optional
          />
        ) : null}
      </div>

      {extraFields.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2">
          {extraFields.map((field) => {
            const id = `${formId}-${field.name}`;
            const helpId = field.help ? `${id}-help` : undefined;
            return (
              <div
                key={field.name}
                className={field.type === 'textarea' ? 'sm:col-span-2' : undefined}
              >
                <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink-900">
                  {field.label}
                  {!field.required ? <span className="text-ink-400"> (optional)</span> : null}
                </label>
                {field.type === 'select' ? (
                  <select
                    id={id}
                    name={field.name}
                    required={field.required}
                    aria-describedby={helpId}
                    className={inputClass}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Please choose…
                    </option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea
                    id={id}
                    name={field.name}
                    rows={3}
                    required={field.required}
                    aria-describedby={helpId}
                    placeholder={field.placeholder}
                    className={inputClass}
                  />
                ) : (
                  <input
                    id={id}
                    name={field.name}
                    type={field.type ?? 'text'}
                    required={field.required}
                    aria-describedby={helpId}
                    placeholder={field.placeholder}
                    className={inputClass}
                  />
                )}
                {field.help ? (
                  <p id={helpId} className="mt-2 text-xs text-ink-400">
                    {field.help}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}

      <Field
        id={`${formId}-message`}
        name="message"
        label={messageLabel}
        as="textarea"
        required
        error={fieldError('message')}
        placeholder={messagePlaceholder}
        onFocus={() => {
          if (!touched) {
            setTouched(true);
            track('inquiry_start', { inquiry_type: type, company: companyId ?? 'group' });
          }
        }}
      />

      {/* Honeypot — visually and programmatically hidden from real users. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor={`${formId}-company_website`}>Leave this field empty</label>
        <input id={`${formId}-company_website`} name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status.kind === 'submitting'}>
          {status.kind === 'submitting' ? 'Sending…' : submitLabel}
        </Button>
        <p className="text-xs text-ink-400">
          We use your details only to respond to this enquiry. See our{' '}
          <a href="/legal/privacy" className="underline underline-offset-4">
            privacy notice
          </a>
          .
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = 'text',
  as,
  required = false,
  optional = false,
  error,
  placeholder,
  autoComplete,
  onFocus,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  as?: 'textarea';
  required?: boolean;
  optional?: boolean;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
  onFocus?: () => void;
}) {
  const errorId = error ? `${id}-error` : undefined;
  const shared = {
    id,
    name,
    required,
    placeholder,
    autoComplete,
    onFocus,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': errorId,
    className: `${inputClass} ${error ? 'border-red-500' : ''}`,
  } as const;

  return (
    <div className={as === 'textarea' ? 'sm:col-span-2' : undefined}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink-900">
        {label}
        {optional && !required ? <span className="text-ink-400"> (optional)</span> : null}
      </label>
      {as === 'textarea' ? <textarea rows={6} {...shared} /> : <input type={type} {...shared} />}
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
