import { Truck, Clock, MapPin, AlertCircle, PackageCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function ShippingPolicy() {

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
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-blue-500/50 mb-6">
                        <Truck className="text-blue-400" size={18} />
                        <span className="text-sm font-semibold">Logistics & Delivery</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-black mb-4">
                        Shipping <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Policy</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Everything you need to know about deliveries at Wholsera.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto space-y-8">

                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-3">
                            <PackageCheck className="text-green-400" /> Order Processing
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Orders are processed within 1–2 business days after payment confirmation. Bulk or customized orders may require additional processing time.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-3">
                            <Clock className="text-yellow-400" /> Delivery Timeline
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Standard delivery typically takes 5–7 business days depending on your location. Express delivery options may be available in select cities.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-3">
                            <MapPin className="text-purple-400" /> Shipping Coverage
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            We currently ship across most regions in India. Delivery availability may vary for remote or restricted locations.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                        <h2 className="text-2xl font-bold mb-3">Shipping Charges</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Shipping is free on orders above ₹5,000. For orders below this value, shipping charges will be calculated at checkout.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-3">
                            <AlertCircle className="text-red-400" /> Delays & Issues
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Delays may occur due to unforeseen circumstances such as weather, logistics disruptions, or regional restrictions. Wholsera is not liable for delays beyond our control.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
                        <h2 className="text-2xl font-bold mb-3">Damaged or Missing Shipments</h2>
                        <p className="text-gray-400 leading-relaxed">
                            If your order arrives damaged or incomplete, please contact our support team within 48 hours of delivery for assistance.
                        </p>
                    </div>

                    {/* Footer CTA */}
                    <div className="text-center pt-6">
                        <p className="text-gray-400 mb-4">Need help with shipping?</p>
                        <Link to="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold hover:scale-105 transition-transform">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}