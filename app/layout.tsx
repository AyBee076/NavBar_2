import type { Metadata } from "next";
import { Inter, Oswald, Geist } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/context/CartContext";
import localFont from "next/font/local";


const chubbo = localFont({
  src: "../fonts/Chubbo-Bold.ttf",
  variable: "--font-mashle",
});

const erode = localFont({
  src: "../fonts/Erode-Variable.ttf",
  variable: "--font-mashle",
});

const recia = localFont({
  src: "../fonts/Recia-Regular.ttf",
  variable: "--font-mashle",
});

const mashle = localFont({
  src: "../fonts/Mashle-BF6aa001f87bb28.ttf",
  variable: "--font-mashle",
});

const fredoka = localFont({
  src: "../fonts/Fredoka-VariableFont_wdth,wght.ttf",
  variable: "--font-fredoka",
  weight: "200 800",
});

const grotesque = localFont({
  src: "../fonts/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf",
  variable: "--font-grotesque",
  weight: "200 800",
});

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  variable: "--font-inter",
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
          inter.variable,
          mashle.variable,
          fredoka.variable,
          grotesque.variable,
          recia.variable,
          erode.variable,
          chubbo.variable,

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