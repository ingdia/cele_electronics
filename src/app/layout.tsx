import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/context/StoreContext';
import { ToastContainer } from '@/components/ui/Toast';

export const metadata: Metadata = {
  title: 'Cele Electronics | Modern Premium Tech Store',
  description: 'Design a modern, premium e-commerce website for Cele Electronics - specializing in electronic devices and gadgets.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StoreProvider>
          {children}
          <ToastContainer />
        </StoreProvider>
      </body>
    </html>
  );
}
