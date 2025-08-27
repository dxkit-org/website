"use client";
import { SocialMedia } from "@helpers/constants";
import { FaGithub, FaDiscord, FaCode, FaUsers, FaRocket } from "react-icons/fa";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                DXKit
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                            Open source organization creating innovative tools for developers.
                            Join our community and shape the future of development.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <a
                            href={SocialMedia.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-black dark:bg-white dark:text-black text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                        >
                            <FaGithub />
                            View on GitHub
                        </a>
                        <a
                            href={SocialMedia.discord}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                        >
                            <FaDiscord />
                            Join Discord
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">Open Source</div>
                            <p className="text-gray-600 dark:text-gray-400">100% open source projects</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">Community</div>
                            <p className="text-gray-600 dark:text-gray-400">Built by developers, for developers</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">Innovation</div>
                            <p className="text-gray-600 dark:text-gray-400">Cutting-edge developer tools</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">About DXKit</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            We believe in empowering developers with the right tools to build amazing things.
                            Our mission is to create open source solutions that make development faster,
                            easier, and more enjoyable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                            <div className="text-blue-600 text-4xl mb-4">
                                <FaCode />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Developer Tools</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                We create powerful CLI tools, libraries, and frameworks that streamline
                                the development process and boost productivity.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                            <div className="text-purple-600 text-4xl mb-4">
                                <FaUsers />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Community Driven</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Every project is shaped by our community. We welcome contributions,
                                feedback, and ideas from developers around the world.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                            <div className="text-green-600 text-4xl mb-4">
                                <FaRocket />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                We're always exploring new technologies and approaches to solve
                                real-world development challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Our Projects</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Explore our growing collection of open source tools designed to enhance
                            your development workflow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-gray-200 dark:border-gray-700 p-8 rounded-lg hover:shadow-lg transition">
                            <h3 className="text-2xl font-semibold mb-4">DXKit CLI</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                A powerful command-line interface that provides developers with essential
                                tools and utilities for modern development workflows.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/dxkit-org/dxkit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                >
                                    View on GitHub →
                                </a>
                            </div>
                        </div>

                        <div className="border border-gray-200 dark:border-gray-700 p-8 rounded-lg hover:shadow-lg transition">
                            <h3 className="text-2xl font-semibold mb-4">Developer Utilities</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                A collection of small but powerful utilities that solve common
                                development problems and improve productivity.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/dxkit-org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                >
                                    Explore All Projects →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contribute Section */}
            <section id="contribute" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
                    <p className="text-xl mb-8 opacity-90">
                        We're always looking for passionate developers to join our mission.
                        Whether you're interested in contributing code, documentation, or ideas,
                        there's a place for you in the DXKit community.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">💻 Contribute Code</h3>
                            <p className="opacity-90">
                                Help us build amazing tools by contributing to our open source projects.
                                All skill levels welcome!
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">📝 Improve Documentation</h3>
                            <p className="opacity-90">
                                Help make our tools more accessible by improving documentation,
                                tutorials, and guides.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">🐛 Report Issues</h3>
                            <p className="opacity-90">
                                Found a bug or have a feature request? Your feedback helps us
                                improve our tools.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">💬 Join Discussions</h3>
                            <p className="opacity-90">
                                Connect with other developers, share ideas, and help shape the
                                future of our projects.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={SocialMedia.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                        >
                            <FaGithub />
                            Start Contributing
                        </a>
                        <a
                            href={SocialMedia.discord}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition"
                        >
                            <FaDiscord />
                            Join Discord Community
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
