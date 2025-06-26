import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:utensils" className="text-primary" width={24} height={24} />
              <h3 className="font-bold text-lg text-white">Jade Hibachi</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Casual eatery dishing up hibachi-style fare such as chicken and shrimp combos, teriyaki, and steak.
            </p>
            <div className="flex gap-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon icon="lucide:facebook" width={20} height={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon icon="lucide:instagram" width={20} height={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon icon="lucide:twitter" width={20} height={20} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#order" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon icon="lucide:map-pin" className="text-primary mt-1 flex-shrink-0" width={16} height={16} />
                <div className="text-gray-400 text-sm">
                  <div>271 Ashley Ave</div>
                  <div>Charleston, SC 29403</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Icon icon="lucide:phone" className="text-primary flex-shrink-0" width={16} height={16} />
                <span className="text-gray-400 text-sm">(854) 999-3943</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon icon="lucide:mail" className="text-primary flex-shrink-0" width={16} height={16} />
                <span className="text-gray-400 text-sm">info@jadehibachi.com</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6 text-white">Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Tuesday</span>
                <span className="text-white">5-10 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Wednesday</span>
                <span className="text-white">6-10 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Thursday</span>
                <span className="text-white">5-10 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Friday</span>
                <span className="text-white">5-10 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Saturday</span>
                <span className="text-white">5-10 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Sunday</span>
                <span className="text-white">5-10 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Monday</span>
                <span className="text-red-400">Closed</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <Divider className="my-8 bg-gray-800" />
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Jade Hibachi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};