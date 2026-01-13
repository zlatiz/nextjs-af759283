"use client";
import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`glass p-4 rounded-md shadow-md ${className}`}>
      {children}
    </div>
  );
}
