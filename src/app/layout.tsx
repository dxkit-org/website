import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import "react-photo-view/dist/react-photo-view.css";
import { Metadata } from "next";

import { MetaData } from "@helpers/constants";
import { Header } from "@common/Header";
import { Footer } from "@common/Footer";


const fontFamily = Bai_Jamjuree({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
    metadataBase: new URL("https://dxkit.com"),
    title: MetaData.title,
    description: MetaData.description,
    keywords: MetaData.keywords,

    openGraph: {
        title: MetaData.title,
        description: MetaData.description,
        type: "website",
        locale: "en_US",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning={true} lang="en">

            <body
                className={fontFamily.className + " bg-[#ffffffec] dark:bg-black dark:text-white "}
                suppressHydrationWarning={true}
            >
                <Providers>
                    <div className="flex flex-col min-h-screen justify-between  overflow-hidden">
                        <Header />

                        <div className="mb-auto">{children}</div>

                        <Footer />
                        {/* <ScrollToTop /> */}
                    </div>
                </Providers>
            </body>
        </html>
    );
}
