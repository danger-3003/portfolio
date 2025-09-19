import { Playfair_Display, Mrs_Sheppards, Poppins } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/components/ui/Animation/LenisWrapper";
import { MetaData } from "@/constants/Metadata";

const poppins = Playfair_Display({
  variable: "--font-poppins",
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
});

const nunito = Poppins({
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

export const metadata = MetaData["homepage"];

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/assets/icons/favicon.ico.jpg" />
        <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.jpg" sizes="180x180" type="image/png"></link>        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme-storage');
                  if (theme) {
                    const value = JSON.parse(theme).state?.theme;
                    if (value === 'dark') {
                      document.documentElement.classList.add('dark');
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${poppins?.variable} ${nunito?.variable} ${sheppards?.variable} bg-background text-text custom-transition`}>
        <LenisWrapper>
          {children}
        </LenisWrapper>
      </body>
    </html>
  );
}
