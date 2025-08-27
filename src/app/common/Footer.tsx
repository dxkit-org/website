"use client";
import { SocialMedia } from "@helpers/constants";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuCopyright } from "react-icons/lu";

export function Footer() {
    const projectLinks = [
        {
            title: "DXKit CLI",
            href: "https://github.com/dxkit-org/dxkit"
        },
        {
            title: "Developer Tools",
            href: "https://github.com/dxkit-org"
        },
    ];

    const communityLinks = [
        {
            title: "GitHub",
            href: SocialMedia.github
        },
        {
            title: "Discord",
            href: SocialMedia.discord
        },
        {
            title: "Contribute",
            href: "#contribute"
        },
    ];

    return (
        <>
            <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                                DXKit
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Open source organization creating innovative tools for developers.
                                Join our community and shape the future of development.
                            </p>
                            <div className="flex gap-4 text-2xl">
                                <a
                                    href={SocialMedia.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href={SocialMedia.discord}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                                >
                                    <FaDiscord />
                                </a>
                                <a
                                    href={SocialMedia.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                                >
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-4">Projects</h3>
                            <ul className="space-y-2">
                                {projectLinks.map((link) => (
                                    <li key={link.title}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-4">Community</h3>
                            <ul className="space-y-2">
                                {communityLinks.map((link) => (
                                    <li key={link.title}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <p className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                Copyright <LuCopyright className="mx-1" /> 2024 DXKit. All rights reserved.
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                                Made with ❤️ by the open source community
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}