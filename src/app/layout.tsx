import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "DevHeavenX",
  description: "DevHeavenX",
};

export const swissFont = localFont({
  src: "../assets/fonts/Swiss 721 Roman.otf",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${swissFont.className} antialiased`}>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
