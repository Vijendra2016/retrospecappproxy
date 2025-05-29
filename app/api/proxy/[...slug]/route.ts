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
  '/en_US/gift-cards/do-you-have-gift-cards-': 'https://help.retrospec.com/en-US/do-you-have-gift-cards-651585',


  '/en_US/shipping-general/how-long-will-it-take-to-receive-my': 'https://help.retrospec.com/en-US/how-long-will-it-take-to-receive-my-order-651589',
  '/en_US/shipping-general/how-do-i-receive-free-shipping': 'https://help.retrospec.com/en-US/how-do-i-receive-free-shipping-651591',
  '/en_US/shipping-general/what-happens-if-i-refuse-delivery': 'https://help.retrospec.com/en-US/what-happens-if-i-refuse-delivery-651592',
  '/en_US/shipping-tracking/where-is-my-tracking-number': 'https://help.retrospec.com/en-US/where-is-my-tracking-number-651593',
  '/en_US/shipping-tracking/my-tracking-number-isnt-working-': 'https://help.retrospec.com/en-US/my-tracking-number-isnt-working-651594',

  '/en_US/faq-returns': 'https://help.retrospec.com/en-US/articles/returns-and-exchanges-160026',
  '/en_US/return-policy/what-is-your-return-policy': 'https://help.retrospec.com/en-US/what-is-your-return-policy-621182',
  '/en_US/returns-/how-do-i-start-a-return': 'https://help.retrospec.com/en-US/how-do-i-start-a-return-651595',
  '/en_US/exchanges/do-you-offer-exchanges': 'https://help.retrospec.com/en-US/do-you-offer-exchanges-651597',
  '/en_US/exchanges/my-bike-isnt-the-right-size-can-i-exchange-it-for-a-new-one': 'https://help.retrospec.com/en-US/my-bike-isnt-the-right-size-can-i-exchange-it-for-a-new-one-651598',

  '/en_US/faq-general': 'https://help.retrospec.com/en-US/articles/company-and-partners-160494',
  '/en_US/faq-general/where-are-you-located': 'https://help.retrospec.com/en-US/where-are-you-located-607373',
  '/en_US/faq-general/what-are-your-hours': 'https://help.retrospec.com/en-US/what-are-your-hours-607387',
  '/en_US/faq-general/how-can-i-contact-retrospec': 'https://help.retrospec.com/en-US/how-can-i-contact-retrospec-607388',
  '/en_US/faq-general/when-was-retrospec-started': 'https://help.retrospec.com/en-US/when-was-retrospec-started-607389',
  '/en_US/faq-general/does-retrospec-have-a-retail-store': 'https://help.retrospec.com/en-US/does-retrospec-have-a-retail-store-607390',
  '/en_US/faq-general/where-can-i-find-retrospec-products': 'https://help.retrospec.com/en-US/where-can-i-find-retrospec-products-607391',
  '/en_US/faq-general/do-you-have-an-ambassador-program': 'https://help.retrospec.com/en-US/do-you-have-an-ambassador-program-607392',
  '/en_US/faq-general/how-can-i-be-a-dealer-for-retrospec': 'https://help.retrospec.com/en-US/how-can-i-be-a-dealer-for-retrospec-607393',
  '/en_US/faq-general/is-retrospec-a-chinese-company': 'https://help.retrospec.com/en-US/is-retrospec-a-chinese-company-607395',
  '/en_US/faq-general/is-retrospec-a-us-company': 'https://help.retrospec.com/en-US/is-retrospec-a-us-company-607396',
  '/en_US/faq-general/is-retrospec-a-real-company': 'https://help.retrospec.com/en-US/is-retrospec-a-real-company-607397',
  '/en_US/faq-general/what-does-legacy-mean-on-our-product-pages': 'https://help.retrospec.com/en-US/what-does-%22legacy%22-mean-on-our-product-pages-607398'


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
