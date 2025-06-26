import React from "react";
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useCart } from "../context/cart-context";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { totalItems, subtotal } = useCart();
  
  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Order Online", href: "#order" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
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
  );
};