'use client';

import { InquiryForm } from './InquiryForm';

/** Media House booking / quote request. */
export function BookingForm() {
  return (
    <InquiryForm
      type="book"
      companyId="media-house"
      submitLabel="Request a quote"
      messageLabel="Tell us about the project"
      messagePlaceholder="Audience, deliverables, locations, anything already agreed with a client…"
      intro="Give us the outline and we will come back with a scoped quote, a crew list and available dates. Rates depend on crew, kit and days, so we quote rather than publish a price list."
      showOrganisation
      extraFields={[
        {
          name: 'service',
          label: 'What do you need?',
          type: 'select',
          required: true,
          options: [
            'Video production',
            'Photography',
            'Livestreaming',
            'TV / film production',
            'Event production',
            'Mobile stage',
            'Equipment rental only',
            'Something else',
          ],
        },
        { name: 'eventDate', label: 'Date (or first date)', type: 'date' },
        { name: 'location', label: 'Location', placeholder: 'City, venue or region' },
        {
          name: 'budget',
          label: 'Indicative budget',
          placeholder: 'Optional, but it helps us scope realistically',
        },
      ]}
    />
  );
}
