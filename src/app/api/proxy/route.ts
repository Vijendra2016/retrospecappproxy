import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const fullPath = url.pathname.replace(/^\/api\/proxy/, '');

  const redirects: Record<string, string> = {
    '/en_US/financing/what-are-your-financing-options':
      'https://retrospec-ivrgjdsmxon.gorgias.help/en-US/articles/what-should-i-do-if-i-put-the-wrong-shipping-address-603386',
  };

  const destination = redirects[decodeURIComponent(fullPath)];

  if (destination) {
    return NextResponse.redirect(destination, 301);
  } else {
    return new NextResponse('Redirect not found', { status: 404 });
  }
}
