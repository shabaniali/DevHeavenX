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
  src: [
    {
      path: "../assets/fonts/Swiss 721 Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Swiss 721 Thin Italic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../assets/fonts/Swiss 721 Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Swiss 721 Light Italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/Swiss 721 Roman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Swiss 721 Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Swiss 721 Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Swiss 721 Medium Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/Swiss 721 Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Swiss 721 Bold Italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/Swiss 721 Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/Swiss 721 Heavy Italic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../assets/fonts/Swiss 721 Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/Swiss 721 Black Italic.otf",
      weight: "900",
      style: "italic",
    },
  ],
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
