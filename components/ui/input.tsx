"use client";
import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Input({ label, ...props }: InputProps) {
  return (
    <label className="block text-sm">
      {label && <span className="text-sm mb-1 block">{label}</span>}
      <input {...props} className="w-full px-3 py-2 rounded-md bg-secondary/20 border border-bordercolor text-foreground" />
    </label>
  );
}
