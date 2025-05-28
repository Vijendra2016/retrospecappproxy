import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <Image
          className="dark:invert"
          src="https://cdn.shopify.com/s/files/1/2423/6599/files/logolockup_sticker.png?v=1712243869"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
    
      <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start">
        
        <div className="w-full">
           <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mt-8 mb-4">
  Helpjuice Old URL Redirection App
</h1>

      <Image
        src="https://cdn.shopify.com/s/files/1/2423/6599/files/Desktop_28.jpg"
        alt="Retrospec Promo Banner"
        width={1920}
        height={500}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
        
<h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mt-8 mb-4">
  Helpjuice Old URL Redirection App
</h1>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            This app is use for the helpjuice old url redirection
          </li>
          <li className="tracking-[-.01em]">
            Its use for the old help center url to 301 <div className=""></div>
          </li>
        </ol>

        <div className="flex gap-13 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://retrospec.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Visit Main Website
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
           Visit New Help center
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
        <p className="tracking-[-.01em]">
            Custom App develop by Retrospec Tech team
          </p>
        
      </footer>
    </div>
  );
}
