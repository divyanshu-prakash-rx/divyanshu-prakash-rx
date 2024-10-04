import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; // Using Lucide Icons, you can use FontAwesome or any other icon set.
import { motion } from 'framer-motion';

const Contact= ({ mode }) => {
  return (
    <motion.div 
      className={`min-h-screen ${mode === 'light' ? 'bg-white' : 'bg-gray-900'} py-12 px-4`} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            className={`text-4xl md:text-5xl font-bold ${mode === 'light' ? 'text-gray-900' : 'text-white'}`}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Get In Touch
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            We’d love to hear from you. Send us a message using the form below, or connect with us via social media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 dark:text-gray-300 text-sm font-medium">Your Name</label>
                <input type="text" className="w-full p-3 mt-1 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-gray-600 dark:text-gray-300 text-sm font-medium">Email Address</label>
                <input type="email" className="w-full p-3 mt-1 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-gray-600 dark:text-gray-300 text-sm font-medium">Message</label>
                <textarea className="w-full p-3 mt-1 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="5" placeholder="Type your message..."></textarea>
              </div>
              <div>
                <button type="submit" className="w-full p-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-lg transition-all duration-300">Send Message</button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="flex flex-col space-y-8"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center">
              <div className="p-4 bg-indigo-600 rounded-full">
                <Mail className="text-white w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-400">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="p-4 bg-indigo-600 rounded-full">
                <Phone className="text-white w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-400">+1 (123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="p-4 bg-indigo-600 rounded-full">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Visit Us</h3>
                <p className="text-gray-600 dark:text-gray-400">1234 Main Street, Anytown, USA</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-all">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-all">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-all">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-all">
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
