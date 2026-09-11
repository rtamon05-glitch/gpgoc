import type { ReactNode } from 'react';

/** Consistent framing around every form: heading, supporting copy, card. */
export function FormPanel({
  title,
  description,
  aside,
  children,
}: {
  title: string;
  description?: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
      <div>
        <h2 className="text-h2">{title}</h2>
        <span className="gp-rule mt-5" />
        {description ? <p className="mt-5 max-w-2xl text-ink-600">{description}</p> : null}
        <div className="mt-9">{children}</div>
      </div>
      {aside ? <aside className="lg:pt-4">{aside}</aside> : null}
    </div>
  );
}
