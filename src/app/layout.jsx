import { Playfair_Display, Mrs_Sheppards, Poppins } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/components/ui/Animation/LenisWrapper";
import { MetaData } from "@/constants/Metadata";
import ClickSpark from "@/components/ui/ClickSpark";
import Script from "next/script";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Hima Varsha Barla",
  "url": process.env.NEXT_PUBLIC_BASE_URL,
  "jobTitle": "UI/UX Designer",
  "description": "UI/UX Designer portfolio of Hima Varsha Barla, showcasing creative digital design projects.",
  "sameAs": [
    "https://www.linkedin.com/in/hima-varsha-barla/",
    "https://www.behance.net/himavarsha7/",
  ]
};

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
        <Script
          id="ld-json-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
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
          <ClickSpark
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            {children}
          </ClickSpark>
        </LenisWrapper>
      </body>
    </html>
  );
}
