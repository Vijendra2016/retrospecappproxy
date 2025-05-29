import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pathOnly = url.pathname.replace(/^\/api\/proxy/, '');

  const fullPath = decodeURIComponent(pathOnly).startsWith('/')
    ? decodeURIComponent(pathOnly)
    : '/' + decodeURIComponent(pathOnly);

  const redirects: Record<string, string> = {
    '/en_US/financing/what-are-your-financing-options':
      'https://retrospec-ivrgjdsmxon.gorgias.help/en-US/articles/what-should-i-do-if-i-put-the-wrong-shipping-address-603386',
      
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
