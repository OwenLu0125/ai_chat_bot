import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ai_chatbot",
  description: "ai chatbot developed by Owen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
