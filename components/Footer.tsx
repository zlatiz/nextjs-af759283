import Link from 'next/link';
import React from 'react';

const FOOTER_NAV = {
  "Explore": [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/html/about' },
    { label: 'Discography', href: '/html/discography' }
  ],
  "Services": [
    { label: 'Recording Services', href: '/html/recordingservices' },
    { label: 'Equipment', href: '/html/equipment' },
    { label: 'Client List', href: '/html/clientlist' }
  ],
  "Connect": [
    { label: 'Music Clips', href: '/html/clips' },
    { label: 'Photos', href: '/html/photos' },
    { label: 'Contact', href: '/html/contact' }
  ]
};

export default function Footer(): JSX.Element {
  return (
    <footer className="mt-12 border-t border-bordercolor bg-secondary/30">
      <div className="container py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {Object.entries(FOOTER_NAV).map(([section, links]) => (
          <div key={section}>
            <h4 className="font-semibold">{section}</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {(Array.isArray(links) ? links : []).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted-foreground hover:text-foreground">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-bordercolor py-4">
        <div className="container text-sm text-muted-foreground">Copyright 2011, johnkeanestudios.com</div>
      </div>
    </footer>
  );
}
