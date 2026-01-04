import { MessageCircle } from 'lucide-react';

export default function WhatsAppIcon() {
    return (
        <>
            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/917982133795?text=Hello%20Wholsera%20Team!%20I%20need%20help%20with%20bulk%20orders."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50"
            >
                {/* <div className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"> */}
                <div className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse">
                    <MessageCircle className="text-white" size={28} />
                </div>
            </a>
        </>
    )
}