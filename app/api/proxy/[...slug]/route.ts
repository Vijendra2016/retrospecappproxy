import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pathOnly = url.pathname.replace(/^\/api\/proxy/, '');

  const fullPath = decodeURIComponent(pathOnly).startsWith('/')
    ? decodeURIComponent(pathOnly)
    : '/' + decodeURIComponent(pathOnly);

  const redirects: Record<string, string> = {
    
      '/en_US/faq-orders':
      'https://help.retrospec.com/en-US/articles/order-and-shipping-160009',


      '/en_US/order-update-information/what-should-i-do-if-i-put-the-wrong-shipping-address':
      'https://help.retrospec.com/en-US/what-should-i-do-if-i-put-the-wrong-shipping-address-603386',


      '/en_US/order-update-information/can-i-change-my-payment-method-for-an-order-ive-already-placed':
      'https://help.retrospec.com/en-US/can-i-change-my-payment-method-for-an-order-ive-already-placed-603485',

      
      '/en_US/order-cancellation/how-do-i-cancel-my-order':
      'https://help.retrospec.com/en-US/how-do-i-cancel-my-order-603486',

      '/en_US/order-cancellation/how-do-i-cancel-my-order-if-its-already-been-shipped':
      'https://help.retrospec.com/en-US/how-do-i-cancel-my-order-if-its-already-been-shipped-603487',

      'en_US/order-cancellation/can-i-cancel-my-order-if-i-havent-received-a-tracking-number-yet':
      'https://help.retrospec.com/en-US/can-i-cancel-my-order-if-i-havent-received-a-tracking-number-yet-603488',
       
      '/en_US/order-cancellation/i-just-placed-my-order-and-according-to-the-tracking-number-it-hasnt-been-shipped-yet-am-i-able-to-cancel-it':
      'https://help.retrospec.com/en-US/i-just-placed-my-order-and-according-to-the-tracking-number-it-hasnt-been-shipped-yet-am-i-able-to-cancel-it-651587',
       
      '/en_US/order-general/the-product-i-want-is-out-of-stock-what-do-i-do':
      'https://help.retrospec.com/en-US/the-product-i-want-is-out-of-stock-what-do-i-do-651588',
       
  '/en_US/financing': 'https://help.retrospec.com/en-US/articles/payments-and-financing-160027',
  '/en_US/financing/what-are-your-financing-options': 'https://help.retrospec.com/en-US/what-are-your-financing-options-603579',
  '/en_US/refunds/what-payment-methods-do-you-accept': 'https://help.retrospec.com/en-US/what-payment-methods-do-you-accept-651551',
  '/en_US/refunds/when-can-i-expect-my-refund': 'https://help.retrospec.com/en-US/when-can-i-expect-my-refund-651580',
  '/en_US/discounts-coupons/do-you-have-any-discount-codes-or-coupons': 'https://help.retrospec.com/en-US/do-you-have-any-discount-codes-or-coupons-651582',
  '/en_US/discounts-coupons/do-you-have-any-military-discounts': 'https://help.retrospec.com/en-US/do-you-have-any-military-discounts-651583',
  '/en_US/gift-cards/how-do-i-send-a-gift-card': 'https://help.retrospec.com/en-US/how-do-i-send-a-gift-card-651584',
  '/en_US/gift-cards/do-you-have-gift-cards': 'https://help.retrospec.com/en-US/do-you-have-gift-cards-651585'

  };

  const destination = redirects[fullPath];

  if (destination) {
    return NextResponse.redirect(destination, 301);
  }

  return new NextResponse(
    `❌ Redirect not found for: ${fullPath}`,
    { status: 404 }
  );
}
