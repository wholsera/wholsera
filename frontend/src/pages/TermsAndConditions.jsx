import { ShieldCheck, FileText, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function TermsAndConditions() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-orange-600/20"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Header */}
            <section className="relative z-10 pt-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/50 mb-6">
                        <ShieldCheck className="text-green-400" size={18} />
                        <span className="text-sm font-semibold">Legal & Transparency</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black mb-4">
                        Terms & <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">Conditions</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Please read these terms carefully before using Wholsera.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto space-y-8">

                    {/* Section Card */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-3">
                            <FileText className="text-purple-400" /> Introduction
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Welcome to Wholsera. By accessing or using our platform, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                        <h2 className="text-2xl font-bold mb-3">Eligibility</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Wholsera is a B2B wholesale platform. You must be at least 18 years old and operating a legitimate business to place orders on our platform.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                        <h2 className="text-2xl font-bold mb-3">Account Responsibility</h2>
                        <p className="text-gray-400 leading-relaxed">
                            You are responsible for maintaining the confidentiality of your account credentials. Any activity under your account will be considered your responsibility.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                        <h2 className="text-2xl font-bold mb-3">Orders & Payments</h2>
                        <p className="text-gray-400 leading-relaxed">
                            All orders are subject to availability and confirmation. Prices may change without prior notice. Payments must be completed using approved payment methods.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                        <h2 className="text-2xl font-bold mb-3">Shipping & Returns</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Delivery timelines are estimates. Returns are accepted only for damaged or incorrect items as per our return policy.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-3">
                            <AlertTriangle className="text-yellow-400" /> Limitation of Liability
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Wholsera shall not be liable for any indirect, incidental, or consequential damages arising from the use of our platform.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                        <h2 className="text-2xl font-bold mb-3">Changes to Terms</h2>
                        <p className="text-gray-400 leading-relaxed">
                            We reserve the right to update these Terms & Conditions at any time. Continued use of the platform constitutes acceptance of the updated terms.
                        </p>
                    </div>

                    {/* Footer CTA */}
                    <div className="text-center pt-6">
                        <p className="text-gray-400 mb-4">Have questions about our terms?</p>
                        <Link to="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold hover:scale-105 transition-transform">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}