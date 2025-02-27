import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "DevHeavenX",
  description: "DevHeavenX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
