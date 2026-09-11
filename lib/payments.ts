import 'server-only';

/**
 * EmmanuelPay integration point.
 *
 * The group's chosen processor for Foundation donations and Hotels deposits.
 * Credentials and the API contract have not been supplied, so this module
 * deliberately fails loudly rather than pretending a charge succeeded. Fill in
 * `createCheckout` against the processor's documentation and set the
 * EMMANUELPAY_* variables in `.env` — nothing else on the site needs to change.
 */

export type CheckoutRequest = {
  amount: number;
  currency: string;
  reference: string;
  description: string;
  customerEmail: string;
  returnUrl: string;
};

export type CheckoutResult = { ok: true; redirectUrl: string } | { ok: false; reason: string };

export function isPaymentsConfigured(): boolean {
  return Boolean(
    process.env.EMMANUELPAY_API_BASE &&
      process.env.EMMANUELPAY_MERCHANT_ID &&
      process.env.EMMANUELPAY_API_KEY,
  );
}

export async function createCheckout(_request: CheckoutRequest): Promise<CheckoutResult> {
  if (!isPaymentsConfigured()) {
    return {
      ok: false,
      reason:
        'Online giving is not yet connected. Your details have been recorded and the Foundation will contact you with payment instructions.',
    };
  }
  // TODO: call the EmmanuelPay checkout endpoint once the API contract is supplied.
  return {
    ok: false,
    reason: 'The payment gateway is configured but the checkout call has not been implemented yet.',
  };
}
