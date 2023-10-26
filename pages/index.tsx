import Head from 'next/head';
import type { Metadata } from 'next';
import Image from 'next/image';

import '@/app/globals.css';

import SphereAnimation from '@/components/SphereAnimation';

interface ComponentObj {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'oneete | Studio',
  description: "To Imagine, To Build. We're on it!",
};

export default function Layout({ children }: ComponentObj) {
  return (
    <div className="app-container">
      <Head>
        <title>oneete | Studio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>

      <main>
        {/* {children} */}

        <div className="fixed inset-0 z-10">
          <Image
            src="http://oneete.com/letter-animation.gif"
            width={1000}
            height={500}
            alt="animation"
            style={{
              width: '100vw',
              minWidth: '1000px',
              height: '100vh',
              minHeight: '500px',
              opacity: 0.3,
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="relative z-20 w-screen h-screen grid grid-cols-4 grid-rows-6">
          <div className="col-span-4 md:col-start-2 md:col-span-2 row-start-2 row-end-5 self-center">
            <SphereAnimation />
          </div>
          <div className="col-span-4 row-start-6 flex justify-center items-center text-center">
            <div className="pt-20">
              we imagine, we build. we&apos;re oneete!
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
