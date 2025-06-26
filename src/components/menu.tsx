import React from "react";
import { Tabs, Tab, Card, CardBody, CardFooter, Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useCart } from "../context/cart-context";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const Menu: React.FC = () => {
  const [selected, setSelected] = React.useState("featured");
  const [showCartNotification, setShowCartNotification] = React.useState(false);
  const [lastAddedItem, setLastAddedItem] = React.useState("");
  const [showAllItems, setShowAllItems] = React.useState(false);
  
  const { items: cartItems, addItem, totalItems } = useCart();
  
  const menuItems: MenuItem[] = [
    {
      id: "1",
      name: "Chicken & Shrimp Combo",
      description: "Grilled chicken and shrimp with vegetables, served with rice and signature sauce",
      price: 16.99,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=3",
      category: "hibachi"
    },
    {
      id: "2",
      name: "Steak Hibachi",
      description: "Premium steak grilled with vegetables, served with rice and signature sauce",
      price: 18.99,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=4",
      category: "hibachi"
    },
    {
      id: "3",
      name: "Vegetable Hibachi",
      description: "Assorted fresh vegetables grilled hibachi style, served with rice",
      price: 13.99,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=5",
      category: "hibachi"
    },
    {
      id: "4",
      name: "Teriyaki Chicken",
      description: "Grilled chicken glazed with teriyaki sauce, served with rice and vegetables",
      price: 15.99,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=6",
      category: "teriyaki"
    },
    {
      id: "5",
      name: "Teriyaki Salmon",
      description: "Grilled salmon glazed with teriyaki sauce, served with rice and vegetables",
      price: 19.99,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=7",
      category: "teriyaki"
    },
    {
      id: "6",
      name: "Vegetable Spring Rolls",
      description: "Crispy spring rolls filled with vegetables, served with dipping sauce",
      price: 6.99,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=8",
      category: "appetizers"
    },
    {
      id: "7",
      name: "Lumpia",
      description: "Filipino-style spring rolls filled with meat and vegetables",
      price: 7.99,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=9",
      category: "appetizers"
    },
    {
      id: "8",
      name: "Mochi Ice Cream",
      description: "Japanese rice cake filled with ice cream in various flavors",
      price: 5.99,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=10",
      category: "desserts"
    },
    {
      id: "f1",
      name: "Chicken Bowl",
      description: "Grilled chicken served over rice with vegetables",
      price: 9.00,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=21",
      category: "featured"
    },
    {
      id: "f2",
      name: "Shrimp Entree",
      description: "Grilled shrimp served with vegetables and rice",
      price: 14.00,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=22",
      category: "featured"
    },
    {
      id: "f3",
      name: "Steak Bowl",
      description: "Grilled steak served over rice with vegetables",
      price: 11.00,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=23",
      category: "featured"
    },
    {
      id: "f4",
      name: "Vegetable Entree",
      description: "Assorted grilled vegetables served with rice",
      price: 14.00,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=24",
      category: "featured"
    },
    {
      id: "f5",
      name: "Gyoza (5)",
      description: "Japanese dumplings filled with meat and vegetables",
      price: 7.00,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=25",
      category: "featured"
    },
    {
      id: "f6",
      name: "Cream Cheese Rangoons",
      description: "Crispy wontons filled with cream cheese",
      price: 8.00,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=26",
      category: "featured"
    },
    {
      id: "f7",
      name: "Veggie Bowl",
      description: "Mixed vegetables served over rice",
      price: 9.00,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=27",
      category: "featured"
    },
    {
      id: "f8",
      name: "Spring Roll (5)",
      description: "Crispy spring rolls filled with vegetables",
      price: 10.00,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=28",
      category: "featured"
    },
    {
      id: "f9",
      name: "Spring Roll (2)",
      description: "Crispy spring rolls filled with vegetables",
      price: 4.50,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=29",
      category: "featured"
    },
    {
      id: "f10",
      name: "Side Of Veg",
      description: "Side portion of mixed vegetables",
      price: 6.00,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=30",
      category: "featured"
    },
    {
      id: "f11",
      name: "Side Of Rice",
      description: "Side portion of steamed rice",
      price: 3.50,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=31",
      category: "featured"
    },
    {
      id: "f12",
      name: "Side Of Shrimp",
      description: "Side portion of grilled shrimp",
      price: 8.00,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=32",
      category: "featured"
    },
    {
      id: "f13",
      name: "Side Of Steak",
      description: "Side portion of grilled steak",
      price: 9.00,
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=33",
      category: "featured"
    }
  ];
  
  const filteredItems = menuItems.filter(item => item.category === selected);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleAddToCart = (menuItem: MenuItem) => {
    addItem({
      id: menuItem.id,
      name: menuItem.name,
      price: menuItem.price
    });
    
    setLastAddedItem(menuItem.name);
    setShowCartNotification(true);
    
    setTimeout(() => {
      setShowCartNotification(false);
    }, 3000);
  };

  return (
    <section id="menu" className="py-16 md:py-20 bg-content2 mobile-section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Menu</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto px-1">
            Explore our delicious hibachi-style dishes prepared with fresh ingredients and authentic flavors
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <Tabs 
          aria-label="Menu Categories" 
          selectedKey={selected} 
          onSelectionChange={setSelected as any}
          color="primary"
          variant="underlined"
          classNames={{
            tabList: "mx-auto max-w-fit mb-6 md:mb-8 flex-nowrap overflow-x-auto justify-center",
            cursor: "bg-primary",
            tab: "px-3 md:px-8 whitespace-nowrap text-sm md:text-base"
          }}
        >
          <Tab key="featured" title="Featured Items" />
          <Tab key="hibachi" title="Hibachi" />
          <Tab key="teriyaki" title="Teriyaki" />
          <Tab key="appetizers" title="Appetizers" />
          <Tab key="desserts" title="Desserts" />
        </Tabs>
        
        {showCartNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-4 bg-primary text-white p-4 rounded-medium shadow-lg z-50 flex items-center gap-2"
          >
            <Icon icon="lucide:check-circle" />
            <span>{lastAddedItem} added to cart</span>
          </motion.div>
        )}
        
        <motion.div 
          key={selected} // Add key to force re-render when tab changes
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
        >
          {(showAllItems ? filteredItems : filteredItems.slice(0, 6)).map((menuItem) => {
            const cartItem = cartItems.find(i => i.id === menuItem.id);
            const quantity = cartItem?.quantity || 0;
            
            return (
              <motion.div key={menuItem.id} variants={item} className="menu-item-hover mobile-menu-item">
                <Card className="border border-divider">
                  <CardBody className="p-0">
                    <Image
                      removeWrapper
                      alt={menuItem.name}
                      className="w-full h-40 md:h-48 object-cover"
                      src={menuItem.image}
                    />
                    <div className="p-3 md:p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-base md:text-lg font-semibold">{menuItem.name}</h3>
                        <span className="text-primary font-semibold">${menuItem.price.toFixed(2)}</span>
                      </div>
                      <p className="text-foreground-600 text-xs md:text-sm">{menuItem.description}</p>
                      
                      {quantity > 0 && (
                        <div className="mt-2 flex items-center gap-2 text-sm text-primary">
                          <Icon icon="lucide:shopping-cart" size={14} />
                          <span>{quantity} in cart</span>
                        </div>
                      )}
                    </div>
                  </CardBody>
                  <CardFooter className="flex justify-end py-2 px-3 md:py-3 md:px-4">
                    <Button
                      color="primary" 
                      variant="solid" 
                      startContent={quantity > 0 ? <Icon icon="lucide:check" /> : <Icon icon="lucide:plus" />}
                      size="sm"
                      onPress={() => handleAddToCart(menuItem)}
                    >
                      {quantity > 0 ? "Added" : "Add to Order"}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* View More button moved to bottom and only shown when needed */}
        {filteredItems.length > 6 && (
          <div className="text-center mt-8">
            <Button 
              color="primary" 
              variant="flat" 
              onPress={() => setShowAllItems(!showAllItems)}
              startContent={<Icon icon={showAllItems ? "lucide:chevron-up" : "lucide:chevron-down"} />}
            >
              {showAllItems ? "Show Less" : `View More (${filteredItems.length - 6} items)`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};