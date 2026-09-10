import type { Metadata } from "next";
import { Inter, Oswald, Geist } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/context/CartContext";
import localFont from "next/font/local";


const mashle = localFont({
  src: "../fonts/Mashle-BF6aa001f87bb28.ttf",
  variable: "--font-mashle",
});

const fredoka = localFont({
  src: "../fonts/Fredoka-VariableFont_wdth,wght.ttf",
  variable: "--font-grotesque",
  weight: "200 800",
});

const grotesque = localFont({
  src: "../fonts/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf",
  variable: "--font-grotesque",
  weight: "200 800",
});

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const aime = localFont({
  src: "../fonts/Aimee-BF6847e2e52c33a.ttf",
  variable: "--font-aime",
});
const schabo = localFont({
  src: "../fonts/schabo-condensed.otf",
  variable: "--font-schabo-condensed",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cabana Wear",
  description: "Shirt Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={cn(
          "min-h-full flex flex-col",
          geist.variable,
          aime.variable,
          inter.variable,
          schabo.variable,
          mashle.variable,
          fredoka.variable,
          grotesque.variable,
          oswald.variable
        )}
      >
        <CartProvider>
          <NavBar />
          {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}