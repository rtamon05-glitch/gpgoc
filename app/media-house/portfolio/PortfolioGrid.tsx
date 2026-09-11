'use client';

import { useState } from 'react';
import type { PortfolioItem } from '@/content/types';

/**
 * Filterable portfolio grid.
 *
 * Every item is rendered server-side and hidden with `hidden` rather than
 * removed from the DOM, so the full portfolio is in the HTML for crawlers even
 * though the visible set is filtered client-side.
 */
export function PortfolioGrid({
  items,
  categories,
}: {
  items: PortfolioItem[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>('All');
  const filters = ['All', ...categories];

  return (
    <div>
      {/*
        The cards are <h3>, so the grid needs an <h2> above them or the heading
        order skips a level. Visible rather than screen-reader-only: the filter
        row reads better with something to label it.
      */}
      <h2 className="text-h3">Browse the work</h2>
      <span className="gp-rule mt-4 mb-8" />
      <div role="group" aria-label="Filter portfolio by category" className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const selected = filter === active;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                selected
                  ? 'border-accent bg-accent-soft font-medium text-navy-900'
                  : 'border-line text-ink-600 hover:border-accent'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.id}
            hidden={active !== 'All' && item.category !== active}
            className="flex flex-col rounded-sm border border-line bg-white"
          >
            {/*
              Placeholder frame. Real thumbnails come from the `portfolioItems`
              collection once the client clears the credits — see README.
            */}
            <div
              aria-hidden="true"
              className="aspect-video w-full rounded-t-sm"
              style={{
                background:
                  'linear-gradient(135deg, var(--gp-navy-900) 0%, var(--gp-navy-700) 55%, var(--gp-accent) 220%)',
              }}
            />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-ink">
                {item.category}
              </p>
              <h3 className="mt-2 text-h3">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm text-ink-600">{item.description}</p>
              <p className="mt-4 border-t border-line pt-3 text-xs text-ink-400">{item.client}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
