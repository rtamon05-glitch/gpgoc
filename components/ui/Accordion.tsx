import type { ReactNode } from 'react';

export type AccordionItem = {
  title: string;
  body: ReactNode;
  /** Optional short label rendered to the right of the summary. */
  meta?: string;
};

/**
 * Native <details> accordion — keyboard-accessible and functional without
 * JavaScript, which keeps these sections server-rendered for SEO.
 */
export function Accordion({
  items,
  onDark = false,
}: {
  items: AccordionItem[];
  onDark?: boolean;
}) {
  return (
    <div className={`divide-y rounded-sm border ${onDark ? 'divide-white/15 border-white/15' : 'divide-line border-line'}`}>
      {items.map((item) => (
        <details key={item.title} className="group">
          <summary
            className={`flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-display text-lg ${
              onDark ? 'text-white hover:text-gold-300' : 'text-navy-900 hover:text-accent-ink'
            }`}
          >
            <span>{item.title}</span>
            <span className="flex items-center gap-3">
              {item.meta ? (
                <span className={`text-xs uppercase tracking-[0.14em] ${onDark ? 'text-white/50' : 'text-ink-400'}`}>
                  {item.meta}
                </span>
              ) : null}
              <span
                aria-hidden="true"
                className="text-accent-ink transition-transform group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>
          <div className={`px-5 pb-5 text-sm ${onDark ? 'text-white/70' : 'text-ink-600'}`}>
            {item.body}
          </div>
        </details>
      ))}
    </div>
  );
}
