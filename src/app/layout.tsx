import QueryProviders from '@/external/tanstack-query';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <QueryProviders>{children}</QueryProviders>
      </body>
    </html>
  );
}
