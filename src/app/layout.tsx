import '../styles/globals.scss'; // Global styles

export const metadata = {
  title: 'Netflix Clone',
  description: 'A Netflix clone built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
