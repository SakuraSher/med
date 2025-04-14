import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/main.css';

// Import all pages from the index file
import {
  FullBodyCheckup,
  BloodTests,
  HomeCollection,
  SpecializedPanels,
  Tests,
  Packages,
  Cities,
  Offers,
  AboutUs
} from './pages';

console.log('App is loading');

// Dummy data for services (replace with your actual data)
const servicesData = [
    {
        title: 'Full Body Checkup',
        description: 'Comprehensive health assessment.',
        imageUrl: 'https://www.healthians.com/images/service-images/full-body-checkup.png',
    },
    {
        title: 'Blood Tests',
        description: 'Detailed blood analysis.',
        imageUrl: 'https://www.healthians.com/images/service-images/blood-test.png',
    },
    {
        title: 'Home Collection',
        description: 'Convenient sample collection.',
        imageUrl: 'https://www.healthians.com/images/service-images/home-collection.png',
    },
    {
        title: 'Specialized Panels',
        description: 'Targeted health tests.',
        imageUrl: 'https://www.healthians.com/images/service-images/specialized-panel.png',
    },
];

const MedimaaInspiredUI = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Animation variants
    const serviceCardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeInOut' },
        },
    };

    return (
        <Router>
            <div className="bg-gray-900 min-h-screen">
                <h1 className="text-white text-3xl font-bold text-center py-10">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-Green mb-1">
                            Medimaa
                            <span className="block text-sm font-normal text-gray-400 mt-1">Your Trusted Healthcare Partner</span>
                        </h1>
                    </div>
                </h1>
               
                {/* Header */}
                <header className="bg-gray-800 sticky top-0 z-50 shadow-md">
                    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                        <div className="logo">
                            <a href="/" className="flex items-center">
                               {/* 
                                <img
                                    src="https://placehold.co/40x40?text=M"
                                    alt="Medimaa Logo"
                                    className="mr-2 h-8"
                                />
                                  */}
                                <span className="font-bold text-xl text-blue-400">Medimaa</span>
                               
                            </a>
                              
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            <Link
                                to="/tests"
                                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                            >
                                Tests
                            </Link>
                            <Link
                                to="/packages"
                                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                            >
                                Packages
                            </Link>
                            <Link
                                to="/cities"
                                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                            >
                                Cities
                            </Link>
                            <Link
                                to="/offers"
                                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                            >
                                Offers
                            </Link>
                            <Link
                                to="/about"
                                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                            >
                                About Us
                            </Link>
                        </nav>
                        <button
                            id="hamburger-btn"
                            className="md:hidden text-gray-300 focus:outline-none"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle Navigation"
                        >
                            {isMobileMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            id="mobile-menu"
                            className="md:hidden bg-gray-800 shadow-md rounded-md overflow-hidden"
                        >
                            <nav className="flex flex-col">
                                <Link
                                    to="/tests"
                                    className="block px-4 py-2 text-gray-300 hover:bg-gray-700 transition-colors duration-300"
                                    onClick={toggleMobileMenu}
                                >
                                    Tests
                                </Link>
                                <Link
                                    to="/packages"
                                    className="block px-4 py-2 text-gray-300 hover:bg-gray-700 transition-colors duration-300"
                                    onClick={toggleMobileMenu}
                                >
                                    Packages
                                </Link>
                                <Link
                                    to="/cities"
                                    className="block px-4 py-2 text-gray-300 hover:bg-gray-700 transition-colors duration-300"
                                    onClick={toggleMobileMenu}
                                >
                                    Cities
                                </Link>
                                <Link
                                    to="/offers"
                                    className="block px-4 py-2 text-gray-300 hover:bg-gray-700 transition-colors duration-300"
                                    onClick={toggleMobileMenu}
                                >
                                    Offers
                                </Link>
                                <Link
                                    to="/about"
                                    className="block px-4 py-2 text-gray-300 hover:bg-gray-700 transition-colors duration-300"
                                    onClick={toggleMobileMenu}
                                >
                                    About Us
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </header>

                <Routes>
                    <Route path="/" element={
                        <main>
                            {/* Hero Section */}
                            <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-center py-16 px-4">
                                <div className="container mx-auto">
                                    <motion.h1
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                        className="text-3xl font-bold text-white mb-4"
                                    >
                                        Your Health, Our Priority
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                                        className="text-lg text-gray-300 mb-8"
                                    >
                                        Comprehensive health checkups at your doorstep.
                                    </motion.p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-6 rounded-full transition-colors duration-300"
                                    >
                                        Book a Test
                                    </motion.button>
                                </div>
                            </section>

                            {/* Our Services Section */}
                            <section className="bg-gray-900 container mx-auto px-4 py-12">
                                <h2 className="text-2xl font-bold text-white text-center mb-8">
                                    Our Services
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                                    {servicesData.map((service, index) => (
                                        <Link to={`/${service.title.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                                            <motion.div
                                                variants={serviceCardVariants}
                                                initial="hidden"
                                                animate="visible"
                                                transition={{ delay: index * 0.1 }}
                                                className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col justify-between hover:bg-gray-700 transition-colors duration-300"
                                            >
                                                <img
                                                    src={service.imageUrl}
                                                    alt={service.title}
                                                    className="h-20 mb-4 rounded-md"
                                                />
                                                <h3 className="text-lg font-semibold text-white mb-2">
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-300 text-sm">
                                                    {service.description}
                                                </p>
                                            </motion.div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Download Our App Section */}
                            <section className="bg-gray-800 py-12 px-4">
                                <div className="container mx-auto text-center">
                                    <h2 className="text-2xl font-bold text-white mb-6">
                                        Download Our App
                                    </h2>
                                    <div className="flex justify-center space-x-4">
                                        <a href="#" className="inline-flex items-center">
                                            <img
                                                src="https://www.healthians.com/images/play-store.png"
                                                alt="Google Play Store"
                                                className="h-12"
                                            />
                                        </a>
                                        <a href="#" className="inline-flex items-center">
                                            <img
                                                src="https://www.healthians.com/images/app-store.png"
                                                alt="Apple App Store"
                                                className="h-12"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </main>
                    } />
                    <Route path="/full-body-checkup" element={<FullBodyCheckup />} />
                    <Route path="/blood-tests" element={<BloodTests />} />
                    <Route path="/home-collection" element={<HomeCollection />} />
                    <Route path="/specialized-panels" element={<SpecializedPanels />} />
                    <Route path="/tests" element={<Tests />} />
                    <Route path="/packages" element={<Packages />} />
                    <Route path="/cities" element={<Cities />} />
                    <Route path="/offers" element={<Offers />} />
                    <Route path="/about" element={<AboutUs />} />
                </Routes>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-6 px-4">
                    <div className="container mx-auto text-center">
                        <p>&copy; 2024 Medimaa Inspired. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </Router>
    );
};

// Create root and render
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MedimaaInspiredUI />);

export default MedimaaInspiredUI;
