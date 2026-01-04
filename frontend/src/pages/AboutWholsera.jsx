import { Users, Target, TrendingUp, ShieldCheck, HeartHandshake, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function AboutWholsera() {

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

            {/* Hero */}
            <section className="relative z-10 pt-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/50 mb-6">
                        <Users className="text-purple-400" size={18} />
                        <span className="text-sm font-semibold">Who We Are</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black mb-4">
                        About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">Wholsera</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Wholsera is India’s fast-growing B2B wholesale marketplace, built to empower retailers, resellers, and businesses with direct access to manufacturers.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                            <Target className="text-green-400" /> Our Mission
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Our mission is to simplify wholesale buying by connecting businesses directly with trusted manufacturers, reducing costs, increasing margins, and enabling sustainable growth.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
                            <TrendingUp className="text-blue-400" /> Our Vision
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            We envision a transparent, tech-driven B2B ecosystem where every business—small or large—has equal access to quality products at the best prices.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Wholsera */}
            <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-black text-center mb-8">
                        Why Choose <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Wholsera</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                            <ShieldCheck className="text-purple-400 mb-3" size={28} />
                            <h3 className="text-xl font-bold mb-2">Trusted Suppliers</h3>
                            <p className="text-gray-400">We verify manufacturers and sellers to ensure quality, reliability, and consistency.</p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                            <DollarSign className="text-green-400 mb-3" size={28} />
                            <h3 className="text-xl font-bold mb-2">Better Margins</h3>
                            <p className="text-gray-400">Buy directly from the source and save 30–50% compared to traditional wholesale channels.</p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                            <HeartHandshake className="text-pink-400 mb-3" size={28} />
                            <h3 className="text-xl font-bold mb-2">Business Support</h3>
                            <p className="text-gray-400">From logistics to customer support, we partner with you at every step of growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-black mb-4">
                        Ready to Grow with <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Wholsera?</span>
                    </h2>
                    <p className="text-gray-400 mb-8">Join thousands of businesses scaling smarter with us.</p>
                    <Link to="/explore" className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold hover:scale-105 transition-transform">
                        Explore Products
                    </Link>
                </div>
            </section>
        </div>
    );
}