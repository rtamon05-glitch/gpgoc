'use client';

import { InquiryForm } from './InquiryForm';

/**
 * Foundation giving.
 *
 * The EmmanuelPay gateway is not connected yet (`lib/payments.ts`), so this is
 * a pledge form, not a checkout, and says so. When the gateway is live, swap
 * the submit handler to `createCheckout` and keep the same field set.
 */
export const SPONSORSHIP_OPTIONS = [
  'Sponsor a scholarship — one student, one year',
  'Sponsor a classroom — furnishing and materials',
  'Sponsor a hospital bed — equipment and consumables',
  'Support a farmer training place',
  'General fund — let the Foundation direct it',
];

export function DonateForm({ companyId = 'foundation' }: { companyId?: string }) {
  return (
    <InquiryForm
      type="donate"
      companyId={companyId}
      submitLabel="Pledge support"
      messageLabel="Anything you would like us to know?"
      messagePlaceholder="Tell us about the cause you care about, or any conditions attached to your gift."
      intro="Tell us how you would like to give and the Foundation will contact you with payment instructions and a receipt. Online card and mobile-money giving is being connected and is not live yet."
      showOrganisation
      extraFields={[
        {
          name: 'sponsorship',
          label: 'What would you like to support?',
          type: 'select',
          options: SPONSORSHIP_OPTIONS,
          required: true,
        },
        {
          name: 'amount',
          label: 'Amount you have in mind',
          placeholder: 'e.g. 250,000 XAF or USD 500',
          help: 'An indication is enough — nothing is charged from this form.',
        },
        {
          name: 'frequency',
          label: 'Frequency',
          type: 'select',
          options: ['One-off gift', 'Monthly', 'Quarterly', 'Annually', 'Not sure yet'],
        },
        {
          name: 'recognition',
          label: 'Recognition',
          type: 'select',
          options: ['Happy to be named', 'Please keep my gift anonymous'],
        },
      ]}
    />
  );
}
