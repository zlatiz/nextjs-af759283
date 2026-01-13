"use client";
import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, href, onClick, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-transform';
  const classes = `${base} gradient-cta ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
