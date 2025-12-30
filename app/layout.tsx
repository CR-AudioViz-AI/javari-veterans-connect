import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Veterans Connect Hub | CR AudioViz AI',
  description: 'Comprehensive support platform for veterans - career transition, mental health resources, benefits navigation, and community connection.',
  keywords: 'veterans, military, career transition, VA benefits, mental health, PTSD support, veteran jobs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
