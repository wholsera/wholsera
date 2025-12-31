import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import LoadingScreen from "../components/LoadingScreen";
import { Search } from "lucide-react";

export default function SearchProducts() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q");

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchSearchedProducts = async () => {
        if (!query) return;

        try {
            setLoading(true);
            const response = await axios.get(
                `/product/search?q=${encodeURIComponent(query)}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("wholseraToken")}`,
                    },
                }
            );
            setProducts(response.data.products || []);
        } catch (error) {
            console.error("Search failed:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSearchedProducts();
        window.scrollTo(0, 0);
    }, [query]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 lg:px-10 py-20">
            {/* Page Header */}
            <div className="mb-8">
                <p className="mt-2 text-gray-400 flex items-center gap-2">
                    <Search size={18} />
                    Showing results for
                    <span className="text-white font-semibold">“{query}”</span>
                </p>
            </div>

            {/* Content */}
            {loading ? (
                <LoadingScreen />
            ) : products.length > 0 ? (
                <ProductCard freshProducts={products} />
            ) : (
                <div className="flex flex-col items-center justify-center mt-20 text-center">
                    <img
                        src="/no-product-found.png"
                        alt="No results"
                        className="w-100 opacity-80"
                    />
                    <p className="text-gray-500">
                        Try searching with a different keyword
                    </p>
                </div>
            )}
        </div>
    );
}