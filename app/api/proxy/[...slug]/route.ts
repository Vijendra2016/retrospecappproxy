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
  '/en_US/faq-general/what-does-legacy-mean-on-our-product-pages': 'https://help.retrospec.com/en-US/what-does-%22legacy%22-mean-on-our-product-pages-607398',

  '/en_US/product-center': 'https://help.retrospec.com/en-US/articles',
  '/en_US/bike-product-center': 'https://help.retrospec.com/en-US/articles/product-help-bikes-160028',
  '/en_US/bike_general/can-i-order-a-customized-bike-': 'https://help.retrospec.com/en-US/can-i-order-a-customized-bike-629183',
  '/en_US/bike_general/how-can-i-test-ride-a-bike-before-buying': 'https://help.retrospec.com/en-US/how-can-i-test-ride-a-bike-before-buying-629194',
  '/en_US/bike_general/where-are-your-bikes-made': 'https://help.retrospec.com/en-US/where-are-your-bikes-made-629193',
  '/en_US/bike_general/what%E2%80%99s-the-difference-between-a-step-over-and-step-through-bike-frame': 'https://help.retrospec.com/en-US/what%E2%80%99s-the-difference-between-a-step-over-and-step-through-bike-frame-629192',
  '/en_US/bike_general/how-do-i-choose-the-right-bike-for-me': 'https://help.retrospec.com/en-US/how-do-i-choose-the-right-bike-for-me-629190',
  '/en_US/bike_assembly/can-i-assemble-my-bike-by-myself': 'https://help.retrospec.com/en-US/can-i-assemble-my-bike-by-myself-629197',
  '/en_US/bike_assembly/will-you-assemble-my-bike': 'https://help.retrospec.com/en-US/will-you-assemble-my-bike-629196',
  '/en_US/bike_assembly/how-much-of-the-bike-comes-assembled': 'https://help.retrospec.com/en-US/how-much-of-the-bike-comes-assembled-629195',
  '/en_US/bike-specs-components/does-retrospec-sell-replacement-parts': 'https://help.retrospec.com/en-US/does-retrospec-sell-replacement-parts-629417',
  '/en_US/bike-specs-components/what-is-a-coaster-brake': 'https://help.retrospec.com/en-US/what-is-a-coaster-brake-629238',
  '/en_US/bike-specs-components/what-is-a-flip-flop-hub': 'https://help.retrospec.com/en-US/what-is-a-flip-flop-hub-629237',
  '/en_US/bike-specs-components/what-is-a-sealed-cartridge-bearing-hub': 'https://help.retrospec.com/en-US/what-is-a-sealed-cartridge-bearing-hub-629236',
  '/en_US/bike-specs-components/what-is-a-suspension-fork': 'https://help.retrospec.com/en-US/what-is-a-suspension-fork-629235',
  '/en_US/bike-specs-components/what-is-internal-cable-housing': 'https://help.retrospec.com/en-US/what-is-internal-cable-housing-629233',
  '/en_US/bike-specs-components/do-your-bikes-come-with-kickstands': 'https://help.retrospec.com/en-US/do-your-bikes-come-with-kickstands-629232',
  '/en_US/bike-specs-components/what-are-the-sizes-of-your-bike-tires': 'https://help.retrospec.com/en-US/what-are-the-sizes-of-your-bike-tires-629230',
  '/en_US/bike-specs-components/are-all-wheels-compatible-with-your-bikes': 'https://help.retrospec.com/en-US/are-all-wheels-compatible-with-your-bikes-629228',
  '/en_US/bike-specs-components/which-of-your-bikes-have-aluminum-frames': 'https://help.retrospec.com/en-US/which-of-your-bikes-have-aluminum-frames-629227',
  '/en_US/bike-specs-components/what-kind-of-tire-tubes-come-with-your-bikes': 'https://help.retrospec.com/en-US/what-kind-of-tire-tubes-come-with-your-bikes-629226',
  '/en_US/bike-accessory-compatibility/are-all-your-bike-compatible-with-your-trailers': 'https://help.retrospec.com/en-US/are-all-your-bikes-compatible-with-your-trailers-629418',
  '/en_US/bike-accessory-compatibility/are-all-your-bikes-compatible-with-your-baskets-': 'https://help.retrospec.com/en-US/are-all-your-bikes-compatible-with-your-baskets-629419',
  '/en_US/bike-accessory-compatibility/are-retrospec-car-racks-compatible-with-all-retrospec-bikes': 'https://help.retrospec.com/en-US/are-retrospec-car-racks-compatible-with-all-retrospec-bikes-629420',
  '/en_US/bike-accessory-compatibility/can-i-install-a-childs-seat-to-any-of-your-bikes': 'https://help.retrospec.com/en-US/can-i-install-a-childs-seat-to-any-of-your-bikes-629421',
  '/en_US/bike-accessory-compatibility/will-alder-or-arroyo-fit-in-the-bottle-cages-on-your-bikes': 'https://help.retrospec.com/en-US/will-alder-or-arroyo-fit-in-the-bottle-cages-on-your-bikes-629422',
  '/en_US/bike-accessory-compatibility/can-i-add-a-watter-bottle-cage-to-my-bike': 'https://help.retrospec.com/en-US/can-i-add-a-watter-bottle-cage-to-my-bike-629423',
  '/en_US/bike-accessory-compatibility/which-of-your-bikes-fit-on-the-lenox-car-rack': 'https://help.retrospec.com/en-US/which-of-your-bikes-fit-on-the-lenox-car-rack-629424',
  '/en_US/bike-sizing-weight/is-there-a-weight-limit-for-your-bikes': 'https://help.retrospec.com/en-US/is-there-a-weight-limit-for-your-bikes-629430',
  '/en_US/bike-sizing-weight/how-much-do-your-bikes-weigh': 'https://help.retrospec.com/en-US/how-much-do-your-bikes-weigh-629431',
  '/en_US/bike-sizing-weight/should-i-size-up-or-down-if-i-am-inbetween-bike-sizes': 'https://help.retrospec.com/en-US/should-i-size-up-or-down-if-i-am-inbetween-bike-sizes-629432'



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
