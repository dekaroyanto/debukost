'use client';

import { useState } from 'react';
import { Menu, X, Home, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Beranda', href: '#', icon: <Home className="w-4 h-4" /> },
        { name: 'Kamar', href: '#rooms' },
        { name: 'Fasilitas', href: '#gallery' },
    ];

    const handleWhatsApp = () => {
        const phoneNumber = '62882006487100';
        const message = 'Halo Debu Kost, saya ingin menanyakan informasi tentang kamar yang tersedia.';
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                                <Home className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="text-xl font-bold text-gray-800">Debu</span>
                                <span className="text-xl font-bold text-blue-600">Kost</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-2"
                            >
                                {item.icon && item.icon}
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Kontak Button */}
                    <div className="flex items-center space-x-4">
                        <Button
                            onClick={handleWhatsApp}
                            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 flex items-center gap-2"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="hidden md:inline">Kontak Kami</span>
                            <span className="md:hidden">Kontak</span>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-blue-600"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-3 space-y-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className="flex items-center gap-3">
                                    {item.icon && item.icon}
                                    {item.name}
                                </div>
                            </a>
                        ))}
                        <div className="pt-4">
                            <Button
                                onClick={() => {
                                    handleWhatsApp();
                                    setIsMenuOpen(false);
                                }}
                                className="w-full justify-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                Kontak WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;