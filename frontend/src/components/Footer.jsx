import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="relative z-10 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center mb-4">
                            <img
                                src="/WholeseraFullLogo.png"
                                alt="Wholsera Logo"
                                className="h-11 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted partner for business solutions and professional equipment.
                        </p>
                    </div>

                    {/* About Wholesera */}
                    <div>
                        <h4 className="font-semibold mb-4 tracking-wide">About Wholesera</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-white transition">Terms & Condition</a></li>
                            <li><a href="#" className="hover:text-white transition">Support</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 tracking-wide">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-white transition">Explore</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4 tracking-wide">Contact Info</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>
                                <span className="block text-gray-500 text-xs">Email</span>
                                wholsera24@gmail.com
                            </li>
                            <li>
                                <span className="block text-gray-500 text-xs">Phone</span>
                                +91 79821 33795
                            </li>
                            <li>
                                <span className="block text-gray-500 text-xs">Working Hours</span>
                                Mon–Sat: 9AM–6PM
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-10 pt-6 text-center">
                    <p className="text-gray-500 text-sm">
                        © 2026 Wholesera. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}