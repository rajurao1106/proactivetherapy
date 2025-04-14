// app/layout.js or app/layout.tsx (Next.js 13+)
import './globals.css';

export const metadata = {
  title: 'Proactive Physiotherapy',
  description: 'Dard Nivaran Kendra',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
