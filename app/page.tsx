import Image from 'next/image';
import React from 'react';

const STUDIO_BANNER = 'https://johnkeanestudios.com/Images/StudioBanner.png';
const JKEANE = 'https://johnkeanestudios.com/Images/j.keane2.jpg';
const CONSOLE = 'https://johnkeanestudios.com/Images/console.JPG';

export default function Page(): JSX.Element {
  const studioSrc = encodeURI(STUDIO_BANNER);
  const jkeaneSrc = encodeURI(JKEANE);
  const consoleSrc = encodeURI(CONSOLE);

  return (
    <section className="container py-10">
      <header className="relative w-full rounded-md overflow-hidden glass shadow-md">
        <div className="relative h-64 sm:h-80 md:h-96 w-full">
          <Image src={studioSrc} alt="John Keane Studios banner" fill sizes="100vw" style={{ objectFit: 'cover' }} unoptimized />
        </div>
        <div className="absolute inset-0 flex items-end p-6">
          <div className="bg-black/40 p-4 rounded-md">
            <h1 className="text-2xl md:text-4xl font-bold">Welcome to John Keane Studios</h1>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <aside className="glass p-4 rounded-md">
          <div className="w-full h-48 relative rounded-md overflow-hidden">
            <Image src={jkeaneSrc} alt="John Keane" unoptimized width={800} height={600} style={{ objectFit: 'cover' }} />
          </div>
        </aside>

        <section className="md:col-span-2 glass p-6 rounded-md">
          <h2 className="text-xl font-semibold">Selected Discography</h2>
          <p className="mt-3 text-muted-foreground">Selected Discography</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass p-4 rounded-md">
              <div className="w-full h-36 relative overflow-hidden rounded-md">
                <Image src={consoleSrc} alt="Studio console" unoptimized width={1200} height={800} style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className="glass p-4 rounded-md">
              <p className="text-sm text-muted-foreground">Music Clips</p>
              <p className="mt-4 text-sm text-muted-foreground">Photos</p>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-10 glass p-6 rounded-md">
        <h3 className="font-semibold">Recording Services</h3>
        <p className="mt-2 text-muted-foreground">Recording Services</p>
      </section>

      <div className="mt-8" />

    </section>
  );
}
