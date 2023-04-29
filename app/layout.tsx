import { Nunito } from "next/font/google";

import "./globals.css";

export const metadata = {
  title: "Air bnb",
  description: "air bnb clone app",
};

const font = Nunito({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
