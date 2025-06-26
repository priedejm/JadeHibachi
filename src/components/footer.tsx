import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-content3 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:utensils" className="text-primary" width={24} height={24} />
              <h3 className="font-bold text-lg">Jade Hibachi Grill</h3>
            </div>
            <p className="text-foreground-600 mb-4">
              Casual eatery dishing up hibachi-style fare such as chicken and shrimp combos, teriyaki, and steak.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook">
                <Icon icon="lucide:facebook" className="text-foreground-500 hover:text-primary transition-colors" width={20} height={20} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Icon icon="lucide:instagram" className="text-foreground-500 hover:text-primary transition-colors" width={20} height={20} />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Icon icon="lucide:twitter" className="text-foreground-500 hover:text-primary transition-colors" width={20} height={20} />
              </Link>
              <Link href="#" aria-label="Yelp">
                <Icon icon="lucide:star" className="text-foreground-500 hover:text-primary transition-colors" width={20} height={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" color="foreground" className="text-foreground-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" color="foreground" className="text-foreground-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#menu" color="foreground" className="text-foreground-600 hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#order" color="foreground" className="text-foreground-600 hover:text-primary transition-colors">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="#reviews" color="foreground" className="text-foreground-600 hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#contact" color="foreground" className="text-foreground-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon icon="lucide:map-pin" className="text-primary mt-1" width={18} height={18} />
                <span className="text-foreground-600">271 Ashley Ave, Charleston, SC 29403</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:phone" className="text-primary mt-1" width={18} height={18} />
                <span className="text-foreground-600">(854) 999-3943</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:mail" className="text-primary mt-1" width={18} height={18} />
                <span className="text-foreground-600">contact@jadehibachi.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon="lucide:clock" className="text-primary mt-1" width={18} height={18} />
                <span className="text-foreground-600">Tue-Sun: 5:00 PM - 10:00 PM<br />Monday: Closed</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-foreground-600 mb-4">
              Subscribe to our newsletter for special deals and updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-medium border border-divider focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-r-medium hover:bg-primary-600 transition-colors">
                <Icon icon="lucide:send" width={18} height={18} />
              </button>
            </div>
            <p className="text-xs text-foreground-500 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <Divider className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground-600 text-sm">
            &copy; {currentYear} Jade Hibachi Grill. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" color="foreground" className="text-foreground-600 text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" color="foreground" className="text-foreground-600 text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" color="foreground" className="text-foreground-600 text-sm hover:text-primary transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};