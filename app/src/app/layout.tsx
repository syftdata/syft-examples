import "../styles/styles.css";
import React, { PropsWithChildren } from "react";
import { PageLayout } from "@/components/page-layout";
import { siteMetadata } from "@/components/page-head";
import { PreloadResources } from "@/app/preload-resources";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Script from "next/script";

export const metadata = siteMetadata;

declare global {
  interface Window {
    syft: {
      enable: () => void;
      signup: (email: string, options: Record<string, string | number | null | undefined>) => void;
      identify: (email: string, options: Record<string, string | number | null | undefined>) => void;
    }
  }
}

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <PreloadResources />
      <body>        
        <UserProvider>
          <PageLayout>{children}</PageLayout>
        </UserProvider>
        <Script
          id="syft_script"
          dangerouslySetInnerHTML={{
            __html: `!function(t){if(window.syftc=t,window.syft)return;window.syft=[],["identify","track","page","signup"].forEach(function(t){window.syft[t]=function(){var s=[].slice.call(arguments);s.unshift(t),window.syft.push(s)}});var s=document.createElement("script");s.async=!0,s.setAttribute("src","https://cdn.syftdata.com/syftnext/syft.umd.js"),(document.body||document.head).appendChild(s)}({sourceId:"<api_key>"});`,
          }}
        />        
      </body>
    </html>
  );
};

export default RootLayout;
