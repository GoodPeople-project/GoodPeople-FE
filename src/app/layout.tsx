import QueryProviders from '@/external/tanstack-query';
import '@/styles/global.css.ts';
import { container } from './_css/main-container.css';
import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={container}>
        <QueryProviders>
          <Header />
          {children}
          <Footer />
        </QueryProviders>
      </body>
    </html>
  );
}
