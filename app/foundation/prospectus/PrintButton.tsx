'use client';

import { Button } from '@/components/ui/Button';
import { track } from '@/lib/analytics';

/** Prints the prospectus (or saves it as a PDF via the browser's print dialog). */
export function PrintButton() {
  return (
    <Button
      size="lg"
      onClick={() => {
        track('prospectus_download', { company: 'foundation' });
        window.print();
      }}
    >
      Print or save as PDF
    </Button>
  );
}
