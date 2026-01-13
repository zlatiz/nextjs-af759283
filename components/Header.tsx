import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/html/about' },
  { label: 'Discography', href: '/html/discography' },
  { label: 'Recording Services', href: '/html/recordingservices' },
  { label: 'Client List', href: '/html/clientlist' },
  { label: 'Equipment', href: '/html/equipment' },
  { label: 'Music Clips', href: '/html/clips' },
  { label: 'Photos', href: '/html/photos' },
  { label: 'Contact', href: '/html/contact' }
];

export default function Header(): JSX.Element {
  const brand = 'John Keane';
  const banner = 'https://johnkeanestudios.com/Images/StudioBanner.png';
  const safeBanner = encodeURI(banner);

  return (
    <header className="w-full sticky top-0 z-40 bg-secondary/60 backdrop-blur-sm border-b border-bordercolor">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="w-36 h-10 relative">
            <Image src={safeBanner} alt="John Keane Studios.com" unoptimized fill sizes="144px" style={{ objectFit: 'contain' }} />
          </div>
          <div className="sr-only">{brand}</div>
        </div>

        <nav>
          <ul className="flex gap-4 items-center text-sm">
            {(Array.isArray(NAV_ITEMS) ? NAV_ITEMS : []).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="px-3 py-2 rounded-md hover:bg-primary/40 transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
