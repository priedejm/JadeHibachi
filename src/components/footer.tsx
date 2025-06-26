import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:utensils" className="text-primary" width={24} height={24} />
              <h3 className="font-bold text-lg text-white">Jade Hibachi</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Casual eatery dishing up hibachi-style fare such as chicken and shrimp combos, teriyaki, and steak.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook">
                <Icon icon="logos:facebook" width={20} height={20} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Icon icon="logos:instagram-icon" width={20} height={20} />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Icon icon="logos:twitter" width={20} height={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" color="foreground" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" color="foreground" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#menu" color="foreground" className="text-gray-400 hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#order" color="foreground" className="text-gray-400 hover:text-primary transition-colors">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="#contact" color="foreground" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon icon="lucide:map-pin" className="text-primary mt-1" width={18} height={18} />
                <div>
                  <p className="text-gray-400">271 Ashley Ave</p>
                  <p className="text-gray-400">Charleston, SC 29403</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:phone" className="text-primary mt-1" width={18} height={18} />
                <span className="text-gray-400">(854) 999-3943</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:mail" className="text-primary mt-1" width={18} height={18} />
                <span className="text-gray-400">info@jadehibachi.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Wednesday</span>
                <span className="text-white">6–10 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Thursday</span>
                <span className="text-white">5–10 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Friday</span>
                <span className="text-white">5–10 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Saturday</span>
                <span className="text-white">5–10 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="text-white">5–10 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Monday</span>
                <span className="text-white">Closed</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Tuesday</span>
                <span className="text-white">5–10 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <p className="text-gray-500 text-sm text-center">
            &copy; {currentYear} Jade Hibachi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};