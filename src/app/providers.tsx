"use client";

import { ThemeProvider } from "next-themes";

import { HeroUIProvider } from "@heroui/react";
import { PhotoProvider } from "react-photo-view";


function ProvidersBase({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
            <HeroUIProvider>
                <PhotoProvider maskOpacity={0.5}>{children}</PhotoProvider>
            </HeroUIProvider>
        </ThemeProvider>
    );
}
export const Providers = ProvidersBase;
