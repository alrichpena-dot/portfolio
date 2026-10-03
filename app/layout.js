import { Yesteryear, Lora } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const script = Yesteryear({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

const serif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${script.variable} ${serif.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}