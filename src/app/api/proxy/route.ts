import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  // This will return: /api/proxy/en_US/financing/...
  const fullPath = url.pathname;

  // Strip the leading /api/proxy part to isolate the Shopify path
  const strippedPath = fullPath.replace(/^\/api\/proxy/, '');

  // Optional debug log
  console.log('Redirect request for path:', strippedPath);

  // Define your redirects map
  const redirects: Record<string, string> = {
    '/en_US/financing/what-are-your-financing-options':
      'https://retrospec-ivrgjdsmxon.gorgias.help/en-US/articles/what-should-i-do-if-i-put-the-wrong-shipping-address-603386',
  };

  const destination = redirects[decodeURIComponent(strippedPath)];

  if (destination) {
    return NextResponse.redirect(destination, 301);
  } else {
    return new NextResponse(`Redirect not found for: ${strippedPath}`, { status: 404 });
  }
}
