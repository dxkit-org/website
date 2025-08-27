"use client";
import { SocialMedia } from "@helpers/constants";
import { FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Have questions, ideas, or want to contribute? We'd love to hear from you!
                        Here are the best ways to reach our community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Discord */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                        <div className="text-indigo-600 text-5xl mb-6 flex justify-center">
                            <FaDiscord />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Join Our Discord</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Connect with our community, get real-time support, and participate in discussions about our projects.
                        </p>
                        <a
                            href={SocialMedia.discord}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                        >
                            <FaDiscord />
                            Join Discord
                        </a>
                    </div>

                    {/* GitHub */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                        <div className="text-gray-900 dark:text-white text-5xl mb-6 flex justify-center">
                            <FaGithub />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">GitHub Issues</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Report bugs, request features, or contribute to our projects directly through GitHub.
                        </p>
                        <a
                            href={SocialMedia.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                        >
                            <FaGithub />
                            Visit GitHub
                        </a>
                    </div>

                    {/* Email */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                        <div className="text-blue-600 text-5xl mb-6 flex justify-center">
                            <FaEnvelope />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Email Us</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            For formal inquiries, partnerships, or detailed discussions about our projects.
                        </p>
                        <a
                            href="mailto:hello@dxkit.com"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            <FaEnvelope />
                            Send Email
                        </a>
                    </div>
                </div>

                {/* Contributing Section */}
                <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center">Want to Contribute?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">🚀 Getting Started</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Check out our GitHub repositories for contribution guidelines,
                                setup instructions, and open issues labeled "good first issue".
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3">💬 Community Guidelines</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We maintain a welcoming and inclusive community. Please read our
                                code of conduct before participating in discussions.
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <a
                            href="https://github.com/dxkit-org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                        >
                            View Contributing Guide →
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-8 text-center">Quick Links</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <a
                            href="#about"
                            className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
                        >
                            <div className="font-semibold">About Us</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Learn our mission</div>
                        </a>
                        <a
                            href="#projects"
                            className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
                        >
                            <div className="font-semibold">Projects</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Explore our tools</div>
                        </a>
                        <a
                            href={SocialMedia.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
                        >
                            <div className="font-semibold">Documentation</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Read the docs</div>
                        </a>
                        <a
                            href="#contribute"
                            className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
                        >
                            <div className="font-semibold">Contribute</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Join the team</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
