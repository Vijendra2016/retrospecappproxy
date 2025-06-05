import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pathOnly = url.pathname.replace(/^\/api\/proxy/, '');

  const fullPath = decodeURIComponent(pathOnly).startsWith('/')
    ? decodeURIComponent(pathOnly)
    : '/' + decodeURIComponent(pathOnly);

  const redirects: Record<string, string> = {
    

     '/':
      'https://help.retrospec.com/en-US',
 
     
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

      '/en_US/order-cancellation/can-i-cancel-my-order-if-i-havent-received-a-tracking-number-yet':
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


  '/en_US/shipping-general/how-long-will-it-take-to-receive-my-order': 'https://help.retrospec.com/en-US/how-long-will-it-take-to-receive-my-order-651589',
  '/en_US/shipping-general/how-do-i-receive-free-shipping': 'https://help.retrospec.com/en-US/how-do-i-receive-free-shipping-651591',
  '/en_US/shipping-general/what-happens-if-i-refuse-delivery': 'https://help.retrospec.com/en-US/what-happens-if-i-refuse-delivery-651592',
  '/en_US/shipping-tracking/where-is-my-tracking-number': 'https://help.retrospec.com/en-US/where-is-my-tracking-number-651593',
  '/en_US/shipping-tracking/my-tracking-number-isnt-working-': 'https://help.retrospec.com/en-US/my-tracking-number-isnt-working-651594',
  '/en_US/shipping-general/where-do-you-ship-to': 'https://help.retrospec.com/en-US/where-do-you-ship-to-651590',


  '/en_US/faq-returns': 'https://help.retrospec.com/en-US/articles/returns-and-exchanges-160026',
  '/en_US/return-policy/what-is-your-return-policy': 'https://help.retrospec.com/en-US/what-is-your-return-policy-621182',
  '/en_US/returns-/how-do-i-start-a-return': 'https://help.retrospec.com/en-US/how-do-i-start-a-return-651595',
  '/en_US/exchanges/do-you-offer-exchanges': 'https://help.retrospec.com/en-US/do-you-offer-exchanges-651597',
  '/en_US/exchanges/my-bike-isnt-the-right-size-can-i-exchange-it-for-a-new-one': 'https://help.retrospec.com/en-US/my-bike-isnt-the-right-size-can-i-exchange-it-for-a-new-one-651598',
  '/en_US/damaged-product/my-order-arrived-damaged-what-do-i-do': 'https://help.retrospec.com/en-US/my-order-arrived-damaged-what-do-i-do-1724433',
  '/en_US/faq-general/warranty-policy': 'https://help.retrospec.com/en-US/articles/returns-and-exchanges-160026',
  '/en_US/faq-general/if-a-bike-component-gets-stolen-or-doesnt-function-properly-will-retrospec-replace-that-part': 'https://retrospec.com/pages/contact-us',

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
  '/en_US/bike-sizing-weight/should-i-size-up-or-down-if-i-am-inbetween-bike-sizes': 'https://help.retrospec.com/en-US/should-i-size-up-or-down-if-i-am-inbetween-bike-sizes-629432',

  '/en_US/e-bike-general': 'https://help.retrospec.com/en-US/articles/product-help-ebikes-160839',
  '/en_US/e-bike-general/where-are-your-e-bikes-made': 'https://help.retrospec.com/en-US/where-are-your-ebikes-made-629433',
  '/en_US/e-bike-general/what%E2%80%99s-the-difference-between-a-step-over-and-step-through': 'https://help.retrospec.com/en-US/what%E2%80%99s-the-difference-between-a-step-over-and-step-through-629434',
  '/en_US/e-bike-general/where-can-i-find-a-dealer-to-look-at-your-bikes-in-person': 'https://help.retrospec.com/en-US/where-can-i-find-a-dealer-to-look-at-your-bikes-in-person-629435',
  '/en_US/e-bike-general/is-there-a-minimum-age-requirement-on-your-e-bikes': 'https://help.retrospec.com/en-US/is-there-a-minimum-age-requirement-on-your-ebikes-629436',
  '/en_US/e-bike-general/what-is-the-difference-between-class-1-2-and-3-e-bikes': 'https://help.retrospec.com/en-US/what-is-the-difference-between-class-1-2-and-3-ebikes-629437',
  '/en_US/e-bike-general/can-you-ride-your-bikes-at-night': 'https://help.retrospec.com/en-US/can-you-ride-your-bikes-at-night-629438',
  '/en_US/e-bike-general/can-you-ride-retrospec-e-bikes-in-the-rain-are-your-bikes-waterproof': 'https://help.retrospec.com/en-US/can-you-ride-retrospec-ebikes-in-the-rain-are-your-bikes-waterproof-629439',
  '/en_US/e-bike-general/do-your-e-bikes-require-maintenance': 'https://help.retrospec.com/en-US/do-your-ebikes-require-maintenance-629451',
  '/en_US/e-bike-general/do-your-e-bikes-come-in-male-and-female-versions': 'https://help.retrospec.com/en-US/do-your-ebikes-come-in-male-and-female-versions-629452',
  '/en_US/e-bike-general/are-your-electric-bikes-waterproof': 'https://help.retrospec.com/en-US/are-your-electric-bikes-waterproof-629454',
  '/en_US/e-bike-assembly/can-i-assemble-my-e-bike-by-myself': 'https://help.retrospec.com/en-US/can-i-assemble-my-ebike-by-myself-629497',
  '/en_US/e-bike-assembly/will-you-assemble-my-e-bike': 'https://help.retrospec.com/en-US/will-you-assemble-my-ebike-629509',
  '/en_US/e-bike-specs-components/what-is-the-max-tire-size-i-can-put-on-a-e-bike': 'https://help.retrospec.com/en-US/what-is-the-max-tire-size-i-can-put-on-an-ebike-629511',
  '/en_US/e-bike-specs-components/how-long-does-a-charge-last-on-a-retrospec-e-bike': 'https://help.retrospec.com/en-US/how-long-does-a-charge-last-on-a-retrospec-ebike-629512',
  '/en_US/e-bike-specs-components/how-long-does-it-take-to-charge-the-battery-on-a-retrospec-e-bike': 'https://help.retrospec.com/en-US/how-long-does-it-take-to-charge-the-battery-on-a-retrospec-ebike-629513',
  '/en_US/e-bike-specs-components/do-your-e-bikes-have-gears': 'https://help.retrospec.com/en-US/do-your-ebikes-have-gears-629515',
  '/en_US/e-bike-specs-components/what-is-the-top-speed-on-your-e-bikes': 'https://help.retrospec.com/en-US/what-is-the-top-speed-on-your-ebikes-629516',
  '/en_US/e-bike-specs-components/how-long-do-the-batteries-last': 'https://help.retrospec.com/en-US/how-long-do-the-batteries-last-629517',
  '/en_US/e-bike-specs-components/what-does-class-2-mean': 'https://help.retrospec.com/en-US/what-does-%22class-2%22-mean-629518',
  '/en_US/e-bike-specs-components/what-is-the-number-of-charging-cycles-for-your-batterybatteries': 'https://help.retrospec.com/en-US/what-is-the-number-of-charging-cycles-for-your-batterybatteries-629579',
  '/en_US/e-bike-specs-components/can-i-use-the-throttle-the-whole-time-without-pedaling': 'https://help.retrospec.com/en-US/can-i-use-the-throttle-the-whole-time-without-pedaling-629580',
  '/en_US/e-bike-specs-components/what-is-voltage-why-should-i-choose-more-or-less-voltage': 'https://help.retrospec.com/en-US/what-is-voltage-why-should-i-choose-more-or-less-voltage-629607',
  '/en_US/e-bike-specs-components/what-are-watts-is-a-higher-wattage-important': 'https://help.retrospec.com/en-US/what-are-watts-is-a-higher-wattage-important-629608',
  '/en_US/e-bike-specs-components/how-many-watts-should-i-get': 'https://help.retrospec.com/en-US/how-many-watts-should-i-get-629609',
  '/en_US/e-bike-specs-components/can-i-order-my-e-bike-with-a-right-hand-throttle': 'https://help.retrospec.com/en-US/can-i-order-my-ebike-with-a-right-hand-throttle-629610',
  '/en_US/e-bike-accessory-compatibility/are-all-retrospec-trailers-compatible-with-retrospec-e-bikes': 'https://help.retrospec.com/en-US/are-all-retrospec-trailers-compatible-with-retrospec-ebikes-629611',
  '/en_US/e-bike-accessory-compatibility/are-all-retrospec-baskets-compatible-with-retrospec-e-bikes': 'https://help.retrospec.com/en-US/are-all-retrospec-baskets-compatible-with-retrospec-ebikes-629612',
  '/en_US/e-bike-accessory-compatibility/are-retrospec-car-racks-compatible-with-retrospec-e-bikes': 'https://help.retrospec.com/en-US/are-retrospec-car-racks-compatible-with-retrospec-ebikes-629613',
  '/en_US/e-bike-accessory-compatibility/do-you-sell-accessories-for-your-e-bikes': 'https://help.retrospec.com/en-US/do-you-sell-accessories-for-your-ebikes-629614',
  '/en_US/e-bike-sizing-weight/is-there-a-weight-limit-for-your-e-bikes': 'https://help.retrospec.com/en-US/is-there-a-weight-limit-for-your-ebikes-629615',
  '/en_US/e-bike-sizing-weight/how-heavy-are-your-e-bikes': 'https://help.retrospec.com/en-US/how-heavy-are-your-ebikes-629616',
  '/en_US/e-bike-sizing-weight/are-your-bikes-single-passenger': 'https://help.retrospec.com/en-US/are-your-bikes-single-passenger-629617',
  '/en_US/e-bike-sizing-weight/do-your-e-bikes-come-in-multiple-sizes': 'https://help.retrospec.com/en-US/do-your-ebikes-come-in-multiple-sizes-629618',

  '/en_US/bike-parts-accessories': 'https://help.retrospec.com/en-US/articles/product-help-bike-gear-160844',
  '/en_US/bike-parts-accessories-general/are-your-helmets-safe': 'https://help.retrospec.com/en-US/are-your-helmets-safe-629619',
  '/en_US/bike-parts-accessories-general/what-does-cpsc-tested-mean': 'https://help.retrospec.com/en-US/what-does-cpsc-mean-629620',
  '/en_US/bike-parts-accessories-general/are-cpsc-tested-helmets-safer-than-other-helmets': 'https://help.retrospec.com/en-US/are-cpsc-helmets-safer-than-other-helmets-629625',
  '/en_US/bike-parts-accessories-general/are-your-helmets-safe-to-use-after-theyve-been-involved-in-an-accident-': 'https://help.retrospec.com/en-US/are-your-helmets-safe-to-use-after-theyve-been-involved-in-an-accident-629626',
  '/en_US/bike-parts-accessories-general/can-i-use-one-of-your-helmets-when-riding-a-motor-vehicle-': 'https://help.retrospec.com/en-US/can-i-use-one-of-your-helmets-when-riding-a-motor-vehicle-629636',
  '/en_US/bike-parts-accessories-specs-components/what-is-an-ergoknob': 'https://help.retrospec.com/en-US/what-is-an-%22ergoknob%22-629637',
  '/en_US/bike-parts-accessories-specs-components/are-your-bike-baskets-compatible-with-all-of-your-bikes': 'https://help.retrospec.com/en-US/are-your-bike-baskets-compatible-with-all-of-your-bikes-629657',
  '/en_US/bike-parts-accessories-sizing-weight/how-do-i-find-my-helmet-size': 'https://help.retrospec.com/en-US/how-do-i-find-my-helmet-size-629665',
 
  '/en_US/water-general': 'https://help.retrospec.com/en-US/articles/product-help-paddle-160840',
  '/en_US/water-general/what-paddle-board-is-best-for-beginners': 'https://help.retrospec.com/en-US/what-paddle-board-is-best-for-beginners-629814',
  '/en_US/water-general/will-i-need-mounts-on-my-car-to-transport-my-paddle-board': 'https://help.retrospec.com/en-US/will-i-need-mounts-on-my-car-to-transport-my-paddle-board-629815',
  '/en_US/water-general/are-inflatable-paddle-boards-sturdy': 'https://help.retrospec.com/en-US/are-inflatable-paddle-boards-sturdy-629816',
  '/en_US/water-general/can-i-take-a-retrospec-paddle-board-on-a-river-with-class-1-to-3-rapids': 'https://help.retrospec.com/en-US/can-i-take-a-retrospec-paddle-board-on-a-river-with-class-1-to-3-rapids-629817',
  '/en_US/water-general/do-you-test-the-boards-for-leaking-prior-to-delivery': 'https://help.retrospec.com/en-US/do-you-test-the-boards-for-leaking-prior-to-delivery-629818',
  '/en_US/water-general/what-is-the-difference-between-and-isup-and-a-regular-paddle-board': 'https://help.retrospec.com/en-US/what-is-the-difference-between-an-isup-and-a-regular-paddle-board-629819',
  '/en_US/water-accessory-compatibility/is-the-weekender-electric-pump-compatible-with-all-isups-and-platforms': 'https://help.retrospec.com/en-US/is-the-weekender-electric-pump-compatible-with-all-isups-and-platforms-629822',
  '/en_US/water-accessory-compatibility/is-the-weekender-electric-pump-compatible-with-the-coaster-inflatable-kayak': 'https://help.retrospec.com/en-US/is-the-weekender-electric-pump-compatible-with-the-coaster-inflatable-kayak-629823',
  '/en_US/water-accessory-compatibility/which-replacement-fins-are-compatible-with-what-isups': 'https://help.retrospec.com/en-US/which-replacement-fins-are-compatible-with-what-isups-629824',
  '/en_US/water-accessory-compatibility/which-paddle-boards-will-fit-in-the-isup-backpack': 'https://help.retrospec.com/en-US/which-paddle-boards-will-fit-in-the-isup-backpack-629825',
  '/en_US/water-sizing-weight/what-size-paddle-board-should-i-get': 'https://help.retrospec.com/en-US/what-size-paddle-board-should-i-get-629826',
  '/en_US/water-sizing-weight/how-much-do-retrospec-paddle-boardsplatforms-weigh': 'https://help.retrospec.com/en-US/how-much-do-retrospec-paddle-boardsplatforms-weigh-629827',
  '/en_US/water-sizing-weight/what-is-the-weight-limit-for-retrospec-paddle-boards-platforms': 'https://help.retrospec.com/en-US/what-is-the-weight-limit-for-retrospec-paddle-boards-and-platforms-629828',
  '/en_US/water-sizing-weight/how-much-do-retrospec-kayaks-weigh': 'https://help.retrospec.com/en-US/how-much-do-retrospec-kayaks-weigh-629829',
  '/en_US/water-sizing-weight/what-is-the-weight-limit-for-retrospec-kayaks': 'https://help.retrospec.com/en-US/what-is-the-weight-limit-for-retrospec-kayaks-629830',
  '/en_US/care-maintenance/how-do-i-take-care-of-my-paddle-board': 'https://help.retrospec.com/en-US/how-do-i-take-care-of-my-paddle-board-629831',

  '/en_US/skate-product-center': 'https://help.retrospec.com/en-US/articles/product-help-skate-160841',
  '/en_US/skate-general/what-is-the-difference-between-a-longboard-and-a-skateboard': 'https://help.retrospec.com/en-US/what-is-the-difference-between-a-longboard-and-a-skateboard-629832',
  '/en_US/skate-assembly/do-your-boards-come-fully-assembled': 'https://help.retrospec.com/en-US/do-your-boards-come-fully-assembled-629833',
  '/en_US/skate-specs-components/what-is-the-difference-between-reverse-kingpin-and-traditional-trucks': 'https://help.retrospec.com/en-US/what-is-the-difference-between-%22reverse-kingpin%22-and-%22traditional%22-trucks-629834',
  '/en_US/skate-specs-components/what-does-wheel-hardness-mean': 'https://help.retrospec.com/en-US/what-does-%22wheel-hardness%22-mean-629835',
  '/en_US/skate-sizing-weight/do-your-boards-have-a-weight-limit': 'https://help.retrospec.com/en-US/do-your-longboardsskateboards-have-a-weight-limit-629836',
  '/en_US/skate-sizing-weight/how-heavy-are-the-boards-': 'https://help.retrospec.com/en-US/how-heavy-are-your-longboardsskateboards-629837',
  '/en_US/skate-sizing-weight/what-board-is-best-for-me-': 'https://help.retrospec.com/en-US/what-longboardskateboard-is-best-for-me-629838',

  '/en_US/snow-product-center': 'https://help.retrospec.com/en-US/articles/product-help-snow-160842',
  '/en_US/snow-general/what-does-cpsc-tested-mean': 'https://help.retrospec.com/en-US/what-does-cpsc-tested-mean-629839',
  '/en_US/snow-general/are-cpsc-tested-helmets-safer-than-other-helmets': 'https://help.retrospec.com/en-US/are-cpsc-tested-helmets-safer-than-other-helmets-629840',
  '/en_US/snow-assembly/do-retrospec-helmets-require-any-assembly': 'https://help.retrospec.com/en-US/do-retrospec-snow-helmets-require-any-assembly-629841',
  '/en_US/snow-specs-components/what-is-an-ergoknob-': 'https://help.retrospec.com/en-US/what-is-an-%22ergoknob%22-629842',
  '/en_US/snow-sizing-weight/are-all-retrospec-snow-helmets-adjustable': 'https://help.retrospec.com/en-US/are-all-retrospec-snow-helmets-adjustable-629843',
  '/en_US/snow-sizing-weight/are-all-retrospec-snow-goggles-adjustable': 'https://help.retrospec.com/en-US/are-all-retrospec-snow-goggles-adjustable-629844',

  '/en_US/exercise-product-center': 'https://help.retrospec.com/en-US/articles/product-help-exercise-160845',
  '/en_US/exercise-general/which-yoga-mat-is-best-for-me': 'https://help.retrospec.com/en-US/which-yoga-mat-is-best-for-me-629845',
  '/en_US/exercise-general/what-is-the-difference-between-a-yoga-mat-and-an-exercise-mat': 'https://help.retrospec.com/en-US/what-is-the-difference-between-a-yoga-mat-and-an-exercise-mat-629846',
  '/en_US/exercise-general/what-is-the-best-thickness-for-a-yoga-mat': 'https://help.retrospec.com/en-US/what-is-the-best-thickness-for-a-yoga-mat-629847',
  '/en_US/exercise-assembly/do-retrospec-leap-plyo-boxes-require-any-assemble': 'https://help.retrospec.com/en-US/do-retrospec-leap-plyo-boxes-require-any-assembly-629848',
  '/en_US/exercise-sizing-weight/which-yoga-ball-size-is-best-for-me': 'https://help.retrospec.com/en-US/which-yoga-ball-size-is-best-for-me-629849',
  
  '/en_US/owners-center': 'https://help.retrospec.com/en-US/articles',
  '/en_US/bike-owners-center': 'https://help.retrospec.com/en-US/articles/product-help-bikes-160028',
  '/en_US/bike-owners_general/my-bike-was-stolen-': 'https://help.retrospec.com/en-US/my-bike-was-stolen-629856',
  '/en_US/bike-owners_general/how-do-i-register-my-bike': 'https://help.retrospec.com/en-US/how-do-i-register-my-bike-629857',
  '/en_US/bike-owners-assembly-fit/how-high-should-i-make-the-seat-post': 'https://help.retrospec.com/en-US/how-high-should-i-make-the-seat-post-629858',
  '/en_US/bike-owners-assembly-fit/which-way-should-the-fork-go': 'https://help.retrospec.com/en-US/which-way-should-the-fork-go-629859',
  '/en_US/bike-owners-assembly-fit/which-valve-mouths-are-compatible-with-your-bikes-tires': 'https://help.retrospec.com/en-US/which-valve-mouths-are-compatible-with-your-bikes-tires-629860',
  '/en_US/bike-owners-assembly-fit/can-i-adjust-the-height-of-my-bikes-handlebar': 'https://help.retrospec.com/en-US/can-i-adjust-the-height-of-my-bikes-handlebar-629861',
  '/en_US/bike-owners-assembly-fit/how-can-i-remove-my-bikes-tires': 'https://help.retrospec.com/en-US/how-can-i-remove-my-bikes-tires-629862',
  '/en_US/bike-owners-safety/should-i-wear-a-helmet-while-biking': 'https://help.retrospec.com/en-US/should-i-wear-a-helmet-while-biking-629863',
  '/en_US/bike-owners-care-maintenance/how-often-should-i-tune-my-bike': 'https://help.retrospec.com/en-US/how-often-should-i-tune-my-bike-629864',
  '/en_US/bike-owners-care-maintenance/how-do-i-take-care-of-my-bike': 'https://help.retrospec.com/en-US/how-do-i-take-care-of-my-bike-629865',
  '/en_US/bike-owners-care-maintenance/how-do-you-prevent-bike-rust': 'https://help.retrospec.com/en-US/how-do-you-prevent-bike-rust-629867',
  '/en_US/bike-owners-care-maintenance/where-can-i-get-touch-up-paint-for-my-bike': 'https://help.retrospec.com/en-US/where-can-i-get-touch-up-paint-for-my-bike-629869',
  '/en_US/bike-owners-troubleshooting/why-is-the-pedal-hitting-the-front-wheel-of-my-bike': 'https://help.retrospec.com/en-US/why-is-the-pedal-hitting-the-front-wheel-of-my-bike-629870',
  '/en_US/bike-owners-troubleshooting/my-tires-are-flat-and-wont-fill-with-air': 'https://help.retrospec.com/en-US/my-tires-are-flat-and-wont-fill-with-air-629881',
  '/en_US/bike-owners-warranty/what-is-your-warranty-policy-for-bikes': 'https://retrospec.com/pages/warranty-policy',
  '/en_US/bike-owners-warranty/how-do-i-make-a-warranty-claim': 'https://retrospec.com/pages/warranty-policy',
  
  '/en_US/ebike-owners-center': 'https://retrospec.com/apps/help/en_US/ebike-owners-center',
  '/en_US/ebike-owners-general/where-can-i-find-my-serial-number': 'https://help.retrospec.com/en-US/where-can-i-find-my-serial-number-629891',
  '/en_US/ebike-owners-assembly-fit/how-do-i-adjust-my-disc-brakes-': 'https://help.retrospec.com/en-US/how-do-i-adjust-my-disc-brakes-629892',
  '/en_US/ebike-owners-assembly-fit/what-psi-do-i-need-in-my-tires': 'https://help.retrospec.com/en-US/what-psi-do-i-need-in-my-tires-629893',
  '/en_US/ebike-owners-assembly-fit/my-front-fender-won%E2%80%99t-reach-or-doesn%E2%80%99t-fit-properly-what-should-i-do': 'https://help.retrospec.com/en-US/my-front-fender-won%E2%80%99t-reach-or-doesn%E2%80%99t-fit-properly-what-should-i-do-629894',
  '/en_US/ebike-owners-assembly-fit/does-my-bike-need-to-be-adjusted-when-it-arrives': 'https://help.retrospec.com/en-US/does-my-bike-need-to-be-adjusted-when-it-arrives-629895',
  '/en_US/ebike-owners-assembly-fit/what-type-of-batteries-does-the-headlight-take-valen-rev-': 'https://help.retrospec.com/en-US/what-type-of-batteries-does-the-headlight-take-(valen-rev)-629896',
  '/en_US/ebike-owners-assembly-fit/1510952-can-i-remove-the-battery-from-my-e-bike': 'https://help.retrospec.com/en-US/can-i-remove-the-battery-from-my-ebike-629897',
  '/en_US/ebike-owners-accessorize/do-you-sell-accessories-for-your-e-bikes': 'https://help.retrospec.com/en-US/do-you-sell-accessories-for-your-ebikes-629614',
  '/en_US/safety/can-i-stand-up-on-my-e-bikes-rear-pegs': 'https://help.retrospec.com/en-US/can-i-stand-up-on-my-ebikes-rear-pegs-629899',
  '/en_US/safety/can-my-friend-ride-on-the-rear-rack-while-im-pedaling': 'https://help.retrospec.com/en-US/can-my-friend-ride-on-the-rear-rack-while-im-pedaling-629900',
  '/en_US/care-and-maintenance/how-should-i-store-my-e-bikebattery-long-term': 'https://help.retrospec.com/en-US/how-should-i-store-my-ebikebattery-long-term-629901',
  '/en_US/care-and-maintenance/how-do-i-wash-my-e-bike': 'https://help.retrospec.com/en-US/how-do-i-wash-my-ebike-629902',
  '/en_US/care-and-maintenance/can-i-ride-in-the-rain': 'https://help.retrospec.com/en-US/can-i-ride-in-the-rain-629903',
  '/en_US/care-and-maintenance/do-your-e-bikes-require-maintenance': 'https://help.retrospec.com/en-US/do-your-ebikes-require-maintenance-629451',
  '/en_US/care-and-maintenance/how-do-i-ensure-that-the-battery-on-my-bike-does-not-get-stolen': 'https://help.retrospec.com/en-US/how-do-i-ensure-that-the-battery-on-my-bike-does-not-get-stolen-629905',
  '/en_US/troubleshooting/how-do-i-reduce-the-pedal-assist-on-the-jax-valen-or-koa': 'https://help.retrospec.com/en-US/how-do-i-adjust-the-pedal-assist-on-the-jax-valen-or-koa-629906',
  '/en_US/troubleshooting/my-tires-are-flat-and-wont-hold-air': 'https://help.retrospec.com/en-US/my-tires-are-flat-and-wont-hold-air-629907',
  '/en_US/troubleshooting/what-does-error-code-21-mean': 'https://help.retrospec.com/en-US/what-does-error-21-mean-how-do-i-fix-it-629908',
  '/en_US/troubleshooting/what-does-error-22-mean-how-do-i-fix-it-': 'https://help.retrospec.com/en-US/what-does-error-22-mean-how-do-i-fix-it-629909',
  '/en_US/troubleshooting/what-does-error-23-mean-how-do-i-fix-it-': 'https://help.retrospec.com/en-US/what-does-error-23-mean-how-do-i-fix-it-629910',
  '/en_US/troubleshooting/what-does-error-24-mean-how-do-i-fix-it': 'https://help.retrospec.com/en-US/what-does-error-24-mean-how-do-i-fix-it-629911',
  '/en_US/troubleshooting/what-does-error-25-mean-how-do-i-fix-it-': 'https://help.retrospec.com/en-US/what-does-error-25-mean-how-do-i-fix-it-629913',
  '/en_US/troubleshooting/what-does-error-30-mean-how-do-i-fix-it-': 'https://help.retrospec.com/en-US/what-does-error-30-mean-how-do-i-fix-it-629915',
  '/en_US/troubleshooting/my-e-bike-wont-turn-on-what-do-i-do-': 'https://help.retrospec.com/en-US/my-ebike-wont-turn-on-what-do-i-do-629916',
  '/en_US/warranty/what-is-your-warranty-on-batteries': 'https://retrospec.com/pages/warranty-policy',
  '/en_US/warranty/do-you-sell-replacement-parts': 'https://help.retrospec.com/en-US/do-you-sell-replacement-parts-629919',
  '/en_US/warranty/bike-arrived-with-bent-fenders-can-i-get-a-replacement-': 'https://help.retrospec.com/en-US/bike-arrived-with-bent-fenders-can-i-get-a-replacement-629920',
  '/en_US/warranty/what-is-your-warranty-on-e-bikes': 'https://retrospec.com/pages/warranty-policy',

  '/en_US/bike-parts-accessories-owners-center': 'https://help.retrospec.com/en-US/articles/product-help-bike-gear-160844',
  '/en_US/bike-parts-accessories-owners-assembly-fit/how-do-i-get-my-helmet-to-fit-correctly': 'https://help.retrospec.com/en-US/how-do-i-get-my-helmet-to-fit-correctly-629925',
  '/en_US/bike-parts-accessories-owners-assembly-fit/how-can-i-convert-my-ski-helmet-into-a-bike-helmet': 'https://help.retrospec.com/en-US/how-can-i-convert-my-ski-helmet-into-a-bike-helmet-629926',
  '/en_US/bike-parts-accessories-owners-assembly-fit/flip-flop-hub-instructions-': 'https://help.retrospec.com/en-US/flip-flop-hub-instructions-629928',
  '/en_US/bike-parts-accessories-owners-safety/is-it-illegal-to-not-wear-a-helmet': 'https://help.retrospec.com/en-US/is-it-illegal-to-not-wear-a-helmet-629929',
  '/en_US/bike-parts-accessories-owners-care-maintenance/how-should-i-store-my-helmet': 'https://help.retrospec.com/en-US/how-should-i-store-my-helmet-629930',
  '/en_US/bike-parts-accessories-owners-warranty/bike-trailer-warranty': 'https://retrospec.com/pages/warranty-policy',


  '/en_US/water-owners-center': 'https://help.retrospec.com/en-US/articles/product-help-paddle-160840',
  '/en_US/water-owners-general/i-lost-my-fins-what-do-i-do': 'https://help.retrospec.com/en-US/i-lost-my-fins-what-do-i-do-629956',
  '/en_US/water-owners-general/where-can-i-get-replacement-parts-for-my-inflatable-paddle-board-or-kayak': 'https://help.retrospec.com/en-US/where-can-i-get-replacement-parts-for-my-inflatable-paddle-board-or-kayak-629957',
  '/en_US/water-owners-assembly-fit/my-fins-wont-install-properly-help': 'https://help.retrospec.com/en-US/my-fins-wont-install-properly-help-629958',
  '/en_US/water-owners-safety/should-i-wear-a-paddle-leash': 'https://help.retrospec.com/en-US/should-i-wear-a-paddle-leash-629959',
  '/en_US/water-owners-safety/should-i-wear-a-lifejacket': 'https://help.retrospec.com/en-US/should-i-wear-a-lifejacket-629997',
  '/en_US/water-owners-care-maintenance/is-it-normal-for-the-air-valve-to-have-some-minor-leaking-after-some-usage': 'https://help.retrospec.com/en-US/is-it-normal-for-the-air-valve-to-have-some-minor-leaking-after-some-usage-630008',
  '/en_US/water-owners-troubleshooting/why-are-there-air-bubbles-on-the-deck-pad-of-my-board': 'https://help.retrospec.com/en-US/why-are-there-air-bubbles-on-the-deck-pad-of-my-board-630010',
  '/en_US/water-owners-troubleshooting/what-happens-if-my-board-is-over-inflated': 'https://help.retrospec.com/en-US/what-happens-if-my-board-is-over-inflated-630011',
  '/en_US/water-owners-troubleshooting/my-pump-gauge-isnt-working': 'https://help.retrospec.com/en-US/my-pump-gauge-isnt-working-630012',
  '/en_US/water-owners-warranty/what-is-your-warranty-policy-for-paddle-boards': 'https://retrospec.com/pages/warranty-policy',

  '/en_US/skate-owners-center': 'https://help.retrospec.com/en-US/articles/product-help-skate-160841',
  '/en_US/skate-owners-care-maintenance/how-do-i-eliminate-squeaking-while-im-riding': 'https://help.retrospec.com/en-US/how-do-i-eliminate-squeaking-while-im-riding-630062',
  '/en_US/skate-owners-troubleshooting/why-does-my-board-wobble-when-i-accelerate': 'https://help.retrospec.com/en-US/why-does-my-board-wobble-when-i-accelerate-630065',
  '/en_US/skate-owners-troubleshooting/my-board-keeps-squeaking-whenever-i-turn-how-do-i-fix-this': 'https://help.retrospec.com/en-US/my-board-keeps-squeaking-whenever-i-turn-how-do-i-fix-this-630066',
  '/en_US/skate-owners-warranty/what-is-your-warranty-policy-for-skateboards-longboards': 'https://retrospec.com/pages/warranty-policy',

  '/en_US/snow-owners-center': 'https://help.retrospec.com/en-US/articles/product-help-snow-160842',
  '/en_US/snow-owners-assembly-fit/how-do-i-tighten-my-snowshoes': 'https://help.retrospec.com/en-US/how-do-i-tighten-my-snowshoes-630069',
  '/en_US/snow-owners-assembly-fit/how-can-i-convert-my-ski-helmet-into-a-bike-helmet': 'https://help.retrospec.com/en-US/how-can-i-convert-my-ski-helmet-into-a-bike-helmet-630070',
  '/en_US/snow-owners-care-maintenance/how-should-i-store-my-snow-helmet': 'https://help.retrospec.com/en-US/how-should-i-store-my-snow-helmet-630071',
  '/en_US/snow-owners-warranty/snow-warranty': 'https://retrospec.com/pages/warranty-policy',


  '/en_US/assembly-owners-manuals': 'https://help.retrospec.com/en-US/articles/assembly-and-owners-manuals-164472',
  '/en_US/all/bike-assembly-owners-manuals': 'https://help.retrospec.com/en-US/bike-assembly-and-owners-manuals-630074',
  '/en_US/all/e-bike-assembly-owners-manuals': 'https://help.retrospec.com/en-US/ebike-assembly-and-owners-manuals-630075',
  '/en_US/all/water-assembly-owners-manuals': 'https://help.retrospec.com/en-US/water-assembly-and-owners-manuals-630076',
  '/en_US/all/bike-parts-accessories-assembly-owners-manuals': 'https://help.retrospec.com/en-US/bike-parts-and-accessories-assembly-and-owners-manuals-630078',
  '/en_US/all/e-bike-parts-accessories-assembly-owners-manuals': 'https://help.retrospec.com/en-US/ebike-accessories-assembly-and-owners-manuals-630079',
  '/en_US/all/1395661-exercise-assembly-owner-s-manuals': 'https://help.retrospec.com/en-US/exercise-assembly-and-owners-manuals-630081',
  '/en_US/all/1395662-scooters-assembly-owner-s-manuals': 'https://help.retrospec.com/en-US/scooters-assembly-and-owners-manuals-630082',
  '/en_US/all/1395663-outdoors-assembly-owner-s-manuals': 'https://help.retrospec.com/en-US/camp-assembly-and-owners-manuals-630083',
  '/en_US/all/snow-assembly-owners-manuals': 'https://help.retrospec.com/en-US/snow-assembly-and-owners-manuals-630084',
  
  '/en_US/the-outdoor-journal': 'https://retrospec.com/blogs/gear-guides',
  '/en_US/bikes-gear-guides/city-bikes-buyers-guide': 'https://retrospec.com/blogs/gear-guides/city-bikes-the-ultimate-buyers-guide',
  '/en_US/bikes-gear-guides/beach-cruiser-bikes-the-ultimate-buyers-guide': 'https://retrospec.com/blogs/gear-guides/beach-cruiser-bikes-the-ultimate-buyers-guide',
  '/en_US/bikes-gear-guides/commuter-bikes-buyers-guide': 'https://retrospec.com/blogs/gear-guides/commuter-bikes-the-ultimate-buyer-s-guide',
  '/en_US/bikes-gear-guides/hybrid-bikes-buyers-guide': 'https://retrospec.com/blogs/gear-guides/hybrid-bikes-the-ultimate-buyers-guide',
  '/en_US/bikes-gear-guides/what-size-bike': 'https://retrospec.com/blogs/gear-guides/what-size-bike-is-right-for-you',
  '/en_US/bikes-gear-guides/types-of-bikes': 'https://retrospec.com/blogs/gear-guides/types-of-bikes-7-of-the-most-popular-and-their-preferred-terrain',
  '/en_US/bikes-gear-guides/hybrid-bike-vs-mountain-bike': 'https://retrospec.com/blogs/gear-guides/hybrid-bikes-vs-mountain-bikes-whats-the-difference',
  '/en_US/bikes-gear-guides/what-are-the-best-bikes-for-beach-riding-': 'https://retrospec.com/blogs/gear-guides/what-are-the-best-bikes-for-beach-riding',
  '/en_US/bikes-gear-guides/10-best-womens-bikes': 'https://retrospec.com/blogs/gear-guides/10-best-womens-bikes',
  '/en_US/e-bikes/electric-bike-ultimate-buyers-guide': 'https://retrospec.com/blogs/gear-guides/electric-bike-the-ultimate-buyers-guide',
  '/en_US/e-bikes/the-best-types-of-electric-city-bikes': 'https://retrospec.com/blogs/gear-guides/the-best-types-of-electric-city-bikes',
  '/en_US/e-bikes/why-buy-an-electric-bike': 'https://retrospec.com/blogs/gear-guides/10-reasons-why-you-should-consider-buying-an-electric-bike',
  '/en_US/news/brewing-the-bike-koa-rev-plus': 'https://retrospec.com/blogs/gear-guides/brewing-the-bike-koa-rev',
  '/en_US/bike-gear-parts-accessories/how-to-remove-rust-from-your-bike-chain-': 'https://retrospec.com/blogs/gear-guides/how-to-remove-rust-from-your-bike-chain',
  '/en_US/bike-gear-parts-accessories/which-tire-to-choose-for-your-bike': 'https://retrospec.com/blogs/gear-guides/which-tire-to-choose-for-your-bike-type-buyer-s-guide',
  '/en_US/water-sports-gear-guides/inflatable-paddle-board-buyer%E2%80%99s-guide': 'https://retrospec.com/blogs/gear-guides/the-ultimate-inflatable-paddle-board-buyer-s-guide',
  '/en_US/water-sports-gear-guides/inflatable-paddle-boards-vs-solid-why-inflatable-wins-every-time': 'https://retrospec.com/blogs/gear-guides/inflatable-paddle-boards-vs-solid-why-inflatable-wins-every-time',
  '/en_US/water-sports-gear-guides/what-is-a-sup': 'https://retrospec.com/blogs/gear-guides/what-is-a-sup-stand-up-paddle-boarding-explained',
  '/en_US/news/the-isup-made-for-life-on-water': 'https://retrospec.com/blogs/gear-guides/the-inflatable-stand-up-paddle-board-made-for-life-on-water-weekender',
  '/en_US/gear-guide-skate/the-pros-and-cons-of-longboards-vs-skateboards': 'https://retrospec.com/blogs/gear-guides/the-pros-and-cons-of-longboards-vs-skateboards',
  '/en_US/gear-guide-skate/7-types-of-skateboards-and-their-benefits': 'https://retrospec.com/blogs/gear-guides/7-types-of-skateboards-and-their-benefits',
  '/en_US/gear-guide-skate/longboard-shapes-their-benefits': 'https://retrospec.com/blogs/gear-guides/longboard-shapes-their-benefits-buyer-s-guide',
  '/en_US/snow-sports/budget-friendly-snow-goggles': 'https://retrospec.com/blogs/gear-guides/how-to-find-budget-friendly-ski-and-snowboard-goggles',
  '/en_US/snow-sports/how-to-choose-a-ski-snowboard-helmet': 'https://retrospec.com/blogs/gear-guides/how-to-choose-the-right-ski-snowboard-helmet',
  
  '/en_US/blog-bike/how-to-ride-a-bike': 'https://retrospec.com/blogs/gear-guides/how-to-ride-a-bike-3-steps',
  '/en_US/blog-bike/what-are-the-health-benefits-of-cycling': 'https://retrospec.com/blogs/gear-guides/what-are-the-health-benefits-of-cycling',
  '/en_US/blog-snow-sports/skiing-vs-snowboarding': 'https://retrospec.com/blogs/gear-guides/skiing-vs-snowboarding-which-is-better-for-beginners',
  '/en_US/blog-snow-sports/what-to-wear-skiing': 'https://retrospec.com/blogs/gear-guides/what-to-wear-skiing-how-to-keep-warm-on-the-ski-slopes',
  '/en_US/blog-snow-sports/snowboard-trip-packing-list': 'https://retrospec.com/blogs/gear-guides/snowboard-trip-packing-list-12-things-not-to-forget',
  '/en_US/blog-snow-sports/what-is-all-mountain-snowboarding': 'https://retrospec.com/blogs/gear-guides/what-is-all-mountain-snowboarding',
  '/en_US/blog-snow-sports/how-to-snowboard-ultimate-beginners-guide': 'https://retrospec.com/blogs/gear-guides/how-to-snowboard-ultimate-beginners-guide',
  '/en_US/blog-skate/how-to-skateboard': 'https://retrospec.com/blogs/gear-guides/how-to-skateboard-5-steps-for-beginners',
  '/en_US/blog-skate/how-to-longboard-tips-and-tricks': 'https://retrospec.com/blogs/gear-guides/how-to-longboard-for-beginners-tips-and-tricks',
  '/en_US/adventure/1500211-7-adventures-to-take-before-summer-ends': 'https://retrospec.com/blogs/news/7-adventures-to-take-before-summer-ends',
  '/en_US/adventure/4-ways-to-cultivate-your-kid%E2%80%99s-love-for-the-outdoors': 'https://retrospec.com/blogs/news/4-ways-to-cultivate-your-kid-s-love-for-the-outdoors',
  '/en_US/adventure/how-to-get-back-in-shape-holidays': 'https://retrospec.com/blogs/news/8-post-holiday-recovery-outdoor-essentials',
  '/en_US/adventure/23-best-outdoor-adventures-in-2023': 'https://retrospec.com/blogs/news/the-23-best-outdoor-adventures-in-2023-new-year-new-adventures',
  
  '/en_US/gift-guides': 'https://retrospec.com/blogs/gift-guides',
  '/en_US/gift-guides-all/back-to-school-outdoor-gift-guide': 'https://retrospec.com/blogs/gift-guides/17-gifts-for-back-to-school',
  '/en_US/gift-guides-all/outdoor-gift-guide-summer-2022': 'https://retrospec.com/blogs/gift-guides/20-ultimate-outdoor-gifts-for-summer-2022',
  '/en_US/gift-guides-all/outdoor-gift-guide-2022': 'https://retrospec.com/blogs/gift-guides/editor-approved-outdoor-gift-ideas',
  '/en_US/gift-guides-all/best-outdoor-gifts-for-families': 'https://retrospec.com/blogs/gift-guides/21-outdoor-gift-ideas-for-parents-kids-partners-and-grandparents',
  '/en_US/gift-guides-all/gift-ideas-for-the-outdoor-enthusiast': 'https://retrospec.com/blogs/gift-guides/18-gift-ideas-for-the-outdoor-adventurer-in-your-life-including-gear-for-beach-lovers-city-dwellers-and-alpine-enthusiasts',
  '/en_US/gift-guides-all/outdoor-gifts-for-zodiac-signs': 'https://retrospec.com/blogs/gift-guides/12-outdoor-gifts-for-each-zodiac-sign',
  '/en_US/gift-guides-all/best-outdoor-gear-for-2023': 'https://retrospec.com/blogs/gift-guides/the-7-best-outdoor-products-for-2023',
  '/en_US/gift-guides-all/how-to-build-high-quality-home-gym': 'https://retrospec.com/blogs/gift-guides/9-ways-to-create-a-high-quality-home-gym-for-any-space',

  '/en_US/news': 'https://retrospec.com/blogs/news',
  '/en_US/news/introducing-omega-retrospecs-10-year-anniversary-bike': 'https://retrospec.com/blogs/news/omega',
  '/en_US/news/why-did-bicycles-become-more-expensive-during-covid': 'https://retrospec.com/blogs/news/why-did-bicycles-become-more-expensive-during-covid',
  '/en_US/news/a-letter-from-retrospec%E2%80%99s-ceo': 'https://retrospec.com/blogs/news/a-letter-from-retrospec-s-founder-ceo-ely-khakshouri',
  '/en_US/news/how-much-does-an-electric-bike-cost': 'https://retrospec.com/blogs/news/how-much-does-an-electric-bike-cost',
  '/en_US/news/brewing-the-bike-chatham-rev-2': 'https://retrospec.com/blogs/news/brewing-the-bike-chatham-rev-2',
  '/en_US/news/sup-kayak-weekender-plus-2-does-it-all': 'https://retrospec.com/blogs/news/sup-kayak-weekender-plus-2-does-it-all',
  '/en_US/news/important-update-how-new-tariffs-will-affect-bicycle-and-ebike-prices': 'https://retrospec.com/blogs/news/important-update-how-new-tariffs-will-affect-bicycle-and-ebike-prices',





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
