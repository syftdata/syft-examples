import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

declare global {
  interface Window {
    syft: {
      enable: () => void;
      signup: (email: string, options: Record<string, string | number | null | undefined>) => void;
      identify: (email: string, options: Record<string, string | number | null | undefined>) => void;
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* passed enabled: false to the syft script */}
        <Script
          id="syft_script_with_consent"
          dangerouslySetInnerHTML={{
            __html: `!function(t){if(window.syftc=t,window.syft)return;window.syft=[],["identify","track","page","signup"].forEach(function(t){window.syft[t]=function(){var s=[].slice.call(arguments);s.unshift(t),window.syft.push(s)}});var s=document.createElement("script");s.async=!0,s.setAttribute("src","https://cdn.syftdata.com/syftnext/syft.umd.js"),(document.body||document.head).appendChild(s)}({sourceId: "<api-key>", enabled: false});`,
          }}
        />
      </body>
    </html>
  );
}
