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
