import { Poppins, Nunito, Mrs_Sheppards } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/components/ui/Animation/LenisWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});

const sheppards = Mrs_Sheppards({
  variable: "--font-sheppards",
  subsets: ["latin"],
  weight: ['400']
});

// const bitcount = Bitcount_Grid_Double({
//   variable: "--font-bitcount",
//   subsets: ["latin"],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800']
// })

export const metadata = {
  title: "Hima Varsha Barla | Portfolio",
  description: "Hima Varsha Barla | Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins?.variable} ${nunito?.variable} ${sheppards?.variable} bg-background text-text`}>
        <LenisWrapper>
          {children}
        </LenisWrapper>
      </body>
    </html>
  );
}
