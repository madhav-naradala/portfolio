import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Madhav Naradala | Full Stack Java Developer',
  description:
    'Portfolio of Madhav Naradala, a Full Stack Java Developer specializing in Java, Spring Boot, React, cloud technologies, and enterprise applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">{children}</body>
    </html>
  );
}
