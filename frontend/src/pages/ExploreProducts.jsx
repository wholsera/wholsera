import { useState, useEffect } from "react";
import axios from "axios";
import { Filter, X } from "lucide-react";
import ProductCard from '../components/ProductCard';
import LoadingScreen from "../components/LoadingScreen";

export default function ExploreProducts() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [cart, setCart] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [loading, setLoading] = useState(false);


    // Fetch products
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/product", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("wholseraToken")}`
                }
            });
            setProducts(response.data.products);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchProductsByCategory = async (categoryId) => {
        try {
            setLoading(true);
            const response = await axios.get(`/product/category/${categoryId}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("wholseraToken")}`
                }
            });
            setProducts(response.data.products);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch categories
    const fetchCategories = async () => {
        try {
            const response = await axios.get("/admin/categories", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("wholseraToken")}`
                }
            });
            setCategories(response.data.categories);
        } catch (error) {
            console.error("Failed to fetch categories:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchCategories();
        window.scrollTo(0, 0);
    }, []);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        fetchProductsByCategory(category);
        setIsFilterOpen(false);
    };

    const FilterContent = () => (
        <div className="space-y-2">
            <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Categories
            </h3>
            <button
                className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${selectedCategory === "All"
                    ? "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/30"
                    : "bg-gradient-to-br from-gray-800 to-gray-700 text-gray-300 hover:from-gray-700 hover:to-gray-600 border border-gray-700/50"
                    }`}
                onClick={() => fetchProducts()}
            >
                All Products
            </button>
            {categories.map((cat, i) => (
                <button
                    key={i}
                    className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${selectedCategory === cat.name
                        ? "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/30"
                        : "bg-gradient-to-br from-gray-800 to-gray-700 text-gray-300 hover:from-gray-700 hover:to-gray-600 border border-gray-700/50"
                        }`}
                    onClick={() => handleCategorySelect(cat._id)}
                >
                    {cat.name}
                </button>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-10">
            {/* Mobile Filter Overlay */}
            {isFilterOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                    onClick={() => setIsFilterOpen(false)}
                />
            )}

            {/* Mobile Filter Sidebar */}
            <div
                className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-l border-purple-500/20 z-50 transform transition-transform duration-300 ease-in-out ${isFilterOpen ? "translate-x-0" : "translate-x-full"
                    } overflow-y-auto`}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                            Filters
                        </h2>
                        <button
                            onClick={() => setIsFilterOpen(false)}
                            className="text-gray-400 hover:text-white hover:bg-gray-700/50 p-2 rounded-full transition-all"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <FilterContent />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex">
                {/* Desktop Filter Sidebar */}
                <div className="hidden lg:block w-64 min-h-screen bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 sticky top-20 rounded-tr-3xl rounded-br-3xl h-screen overflow-y-auto border-r border-gray-700/30">
                    <FilterContent />
                </div>

                {/* Products Section */}
                <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex items-center justify-between px-4 py-2 mb-4">
                        <h1 className="text-xl lg:text-3xl font-black bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                            Explore Products
                        </h1>
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:shadow-lg hover:shadow-purple-500/50 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                            >
                                <Filter size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Loading or Products */}
                    {loading ? (
                        <LoadingScreen />
                    ) : (
                        <ProductCard freshProducts={products} />
                    )}
                </div>
            </div>

            {/* Cart Summary */}
            {cart.length > 0 && (
                <div className="fixed bottom-4 right-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-purple-500/30 p-6 rounded-3xl shadow-2xl shadow-purple-500/20 max-w-xs z-30">
                    <h4 className="font-bold text-lg mb-3 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                        Cart ({cart.length})
                    </h4>
                    <ul className="text-sm max-h-48 overflow-y-auto space-y-2">
                        {cart.map((item, i) => (
                            <li key={i} className="flex justify-between py-2 px-3 bg-gray-800/50 rounded-lg border border-gray-700/30">
                                <span className="truncate mr-2 text-gray-300">{item.productName}</span>
                                <span className="whitespace-nowrap font-semibold text-purple-400">₹{item.unitPrice}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}