import React from "react";
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useCart } from "../context/cart-context";
import { Badge } from "@heroui/react";

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
      className="bg-background/95 backdrop-blur-md border-b border-divider fixed top-0 left-0 right-0 z-50"
      maxWidth="xl"
      isBordered
      shouldHideOnScroll={false}
      position="sticky"
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
        <NavbarItem className="hidden sm:flex">
          <Button 
            as={Link} 
            color="primary" 
            href="#order" 
            variant="solid"
            startContent={
              totalItems > 0 ? (
                <Badge content={totalItems} color="danger" size="sm">
                  <Icon icon="lucide:shopping-bag" />
                </Badge>
              ) : (
                <Icon icon="lucide:shopping-bag" />
              )
            }
            className="font-medium"
          >
            {totalItems > 0 ? `$${subtotal.toFixed(2)}` : "Order Now"}
          </Button>
        </NavbarItem>
        <NavbarItem className="sm:hidden">
          <Button
            as={Link} 
            color="primary" 
            href="#order" 
            variant="solid"
            startContent={
              totalItems > 0 ? (
                <Badge content={totalItems} color="danger" size="sm">
                  <Icon icon="lucide:shopping-bag" />
                </Badge>
              ) : (
                <Icon icon="lucide:shopping-bag" />
              )
            }
            size="sm"
            className="font-medium text-xs px-3"
          >
            {totalItems > 0 ? `$${subtotal.toFixed(2)}` : "Order"}
          </Button>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
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
        <NavbarMenuItem>
          <Button 
            as={Link} 
            color="primary" 
            href="#order" 
            variant="solid"
            startContent={
              totalItems > 0 ? (
                <Badge content={totalItems} color="danger" size="sm">
                  <Icon icon="lucide:shopping-bag" />
                </Badge>
              ) : (
                <Icon icon="lucide:shopping-bag" />
              )
            }
            className="font-medium mt-4 w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            {totalItems > 0 ? `View Cart ($${subtotal.toFixed(2)})` : "Order Now"}
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroUINavbar>
  );
};