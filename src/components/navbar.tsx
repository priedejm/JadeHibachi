import React from "react";
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/cart-context";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  
  const { totalItems, subtotal } = useCart();
  
  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Order Online", href: "#order" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show floating navbar as soon as we scroll past the original navbar
      // Assuming the navbar height is around 80px, show floating version after that
      if (currentScrollY > 80) {
        setIsScrolled(true);
        setIsVisible(true);
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Original navbar - always present but may be scrolled out of view */}
      <HeroUINavbar 
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className="bg-background/80 backdrop-blur-md border-b border-divider"
        maxWidth="xl"
        isBordered
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="#" color="foreground" className="font-bold text-inherit flex items-center gap-2">
              <Icon icon="lucide:utensils" className="text-primary" width={24} height={24} />
              <p className="font-semibold text-lg">Jade Hibachi</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item.name}-${index}`}>
              <Link 
                color="foreground" 
                href={item.href}
                className="text-sm font-medium"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        
        <NavbarContent justify="end">
          <NavbarItem>
            <Button 
              as={Link} 
              color="primary" 
              href="#order" 
              variant="solid"
              startContent={<Icon icon="lucide:shopping-bag" />}
              className="font-medium"
              endContent={totalItems > 0 && (
                <span className="ml-1 bg-white text-primary rounded-full px-1.5 py-0.5 text-xs font-bold">
                  {totalItems}
                </span>
              )}
            >
              {totalItems > 0 ? `$${subtotal.toFixed(2)}` : "Order Now"}
            </Button>
          </NavbarItem>
        </NavbarContent>
        
        <NavbarMenu className="pt-6 pb-6">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`} className="py-2">
              <Link
                color="foreground"
                className="w-full py-2 text-lg"
                href={item.href}
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </HeroUINavbar>

      {/* Floating navbar - appears when scrolled */}
      <AnimatePresence>
        {isScrolled && isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50"
          >
            <HeroUINavbar 
              onMenuOpenChange={setIsMenuOpen}
              isMenuOpen={isMenuOpen}
              className="bg-background/95 backdrop-blur-lg border-b border-divider shadow-lg"
              maxWidth="xl"
              isBordered
            >
              <NavbarContent>
                <NavbarMenuToggle
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  className="sm:hidden"
                />
                <NavbarBrand>
                  <Link href="#" color="foreground" className="font-bold text-inherit flex items-center gap-2">
                    <Icon icon="lucide:utensils" className="text-primary" width={20} height={20} />
                    <p className="font-semibold text-base">Jade Hibachi</p>
                  </Link>
                </NavbarBrand>
              </NavbarContent>

              <NavbarContent className="hidden sm:flex gap-3" justify="center">
                {menuItems.map((item, index) => (
                  <NavbarItem key={`floating-${item.name}-${index}`}>
                    <Link 
                      color="foreground" 
                      href={item.href}
                      className="text-xs font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </NavbarItem>
                ))}
              </NavbarContent>
              
              <NavbarContent justify="end">
                <NavbarItem>
                  <Button 
                    as={Link} 
                    color="primary" 
                    href="#order" 
                    variant="solid"
                    size="sm"
                    startContent={<Icon icon="lucide:shopping-bag" width={16} height={16} />}
                    className="font-medium"
                    endContent={totalItems > 0 && (
                      <motion.span 
                        key={totalItems}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        className="ml-1 bg-white text-primary rounded-full px-1.5 py-0.5 text-xs font-bold"
                      >
                        {totalItems}
                      </motion.span>
                    )}
                  >
                    {totalItems > 0 ? `$${subtotal.toFixed(2)}` : "Order"}
                  </Button>
                </NavbarItem>
              </NavbarContent>
              
              <NavbarMenu className="pt-6 pb-6">
                {menuItems.map((item, index) => (
                  <NavbarMenuItem key={`floating-menu-${item.name}-${index}`} className="py-2">
                    <Link
                      color="foreground"
                      className="w-full py-2 text-lg"
                      href={item.href}
                      size="lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </NavbarMenuItem>
                ))}
              </NavbarMenu>
            </HeroUINavbar>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};