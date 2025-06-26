import React from "react";
import { Card, CardBody, Button, Input, Tabs, Tab, Checkbox, RadioGroup, Radio } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useCart } from "../context/cart-context";

export const OrderOnline: React.FC = () => {
  const [orderType, setOrderType] = React.useState("delivery");
  const [paymentMethod, setPaymentMethod] = React.useState("card");
  const [isAsap, setIsAsap] = React.useState(true);
  const [pickupTime, setPickupTime] = React.useState("");
  
  const { items: cartItems, addItem, removeItem, subtotal } = useCart();
  
  const popularItems = [
    { id: "p5", name: "Gyoza (5)", price: 7 },
    { id: "p9", name: "Spring Roll (2)", price: 4.50 },
    { id: "p6", name: "Cream Cheese Rangoons", price: 8 }
  ];
  
  const handleAddToCart = (item: {id: string; name: string; price: number}) => {
    addItem(item);
  };
  
  const handleRemoveFromCart = (id: string) => {
    removeItem(id);
  };
  
  const calculateTax = () => {
    return subtotal * 0.07; // 7% tax
  };
  
  const calculateDeliveryFee = () => {
    return orderType === "delivery" ? (subtotal >= 25 ? 0 : 3.99) : 0;
  };
  
  const calculateGrandTotal = () => {
    return subtotal + calculateTax() + calculateDeliveryFee();
  };

  return (
    <section id="order" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Order Online</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            Enjoy our delicious hibachi meals from the comfort of your home with our easy online ordering system
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border border-divider">
              <CardBody className="p-6">
                <motion.h3 
                  className="text-xl font-semibold mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Start Your Order
                </motion.h3>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Tabs 
                    aria-label="Order Type" 
                    selectedKey={orderType} 
                    onSelectionChange={setOrderType as any}
                    color="primary"
                    variant="bordered"
                    fullWidth
                    classNames={{
                      tabList: "mb-6",
                    }}
                  >
                    <Tab 
                      key="delivery" 
                      title={
                        <div className="flex items-center gap-2">
                          <Icon icon="lucide:truck" />
                          <span>Delivery</span>
                        </div>
                      } 
                    />
                    <Tab 
                      key="pickup" 
                      title={
                        <div className="flex items-center gap-2">
                          <Icon icon="lucide:shopping-bag" />
                          <span>Pickup</span>
                        </div>
                      } 
                    />
                  </Tabs>
                </motion.div>
                
                {orderType === "delivery" ? (
                  <motion.div 
                    className="space-y-4 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Input
                      label="Delivery Address"
                      placeholder="Enter your full address"
                      startContent={<Icon icon="lucide:map-pin" />}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="City"
                        placeholder="City"
                        defaultValue="Charleston"
                      />
                      <Input
                        label="Zip Code"
                        placeholder="Zip Code"
                        defaultValue="29403"
                      />
                    </div>
                    <Input
                      label="Delivery Instructions (Optional)"
                      placeholder="Any special instructions for delivery"
                    />
                  </motion.div>
                ) : (
                  <motion.div 
                    className="space-y-4 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-foreground-600 mb-2">
                      Pickup from our location at:
                    </p>
                    <div className="bg-content2 p-4 rounded-medium flex items-start gap-3">
                      <Icon icon="lucide:map-pin" className="text-primary mt-1" />
                      <div>
                        <p className="font-medium">Jade Hibachi Grill</p>
                        <p className="text-sm text-foreground-600">271 Ashley Ave, Charleston, SC 29403</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          isSelected={isAsap}
                          onValueChange={setIsAsap}
                          color="primary"
                        >
                          ASAP Pickup
                        </Checkbox>
                      </div>
                      
                      {!isAsap && (
                        <Input
                          type="time"
                          label="Preferred Pickup Time"
                          placeholder="Select time"
                          value={pickupTime}
                          onValueChange={setPickupTime}
                        />
                      )}
                    </div>
                  </motion.div>
                )}
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium mb-3 text-foreground-600">Popular Items</h4>
                  <div className="space-y-2">
                    {popularItems.map(item => {
                      const cartItem = cartItems.find(i => i.id === item.id);
                      const quantity = cartItem?.quantity || 0;
                      
                      return (
                        <motion.div 
                          key={item.id} 
                          className="flex items-center justify-between p-3 border border-divider/60 rounded-medium bg-content1/50"
                          whileHover={{ scale: 1.01 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex-1">
                            <p className="font-medium text-foreground-700">{item.name}</p>
                            <p className="text-sm text-foreground-500">${item.price.toFixed(2)}</p>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            {quantity > 0 && (
                              <>
                                <motion.div whileTap={{ scale: 0.9 }}>
                                  <Button 
                                    isIconOnly 
                                    size="sm" 
                                    variant="light" 
                                    onPress={() => handleRemoveFromCart(item.id)}
                                  >
                                    <Icon icon="lucide:minus" />
                                  </Button>
                                </motion.div>
                                <span className="w-6 text-center text-foreground-600">{quantity}</span>
                              </>
                            )}
                            <motion.div whileTap={{ scale: 0.9 }}>
                              <Button 
                                isIconOnly 
                                size="sm" 
                                color="primary" 
                                variant={quantity > 0 ? "flat" : "solid"}
                                onPress={() => handleAddToCart(item)}
                                className={quantity > 0 ? "opacity-80" : ""}
                              >
                                <Icon icon="lucide:plus" />
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
                
                {cartItems.length > 0 && (
                  <motion.div 
                    className="mb-6 p-4 bg-content2 rounded-medium"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Icon icon="lucide:shopping-cart" />
                      Your Order
                    </h4>
                    
                    <div className="space-y-2 mb-4">
                      {/* FIXED: Now showing ALL cart items, not just popular items */}
                      {cartItems.map(item => (
                        <motion.div 
                          key={item.id} 
                          className="flex justify-between items-center"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-center gap-2">
                            <span>{item.quantity}x</span>
                            <span className="text-sm">{item.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <motion.div whileTap={{ scale: 0.9 }}>
                              <Button 
                                isIconOnly 
                                size="md" 
                                variant="light" 
                                color="danger"
                                onPress={() => handleRemoveFromCart(item.id)}
                                className="opacity-70 hover:opacity-100"
                              >
                                <Icon icon="lucide:minus" size={16} />
                              </Button>
                            </motion.div>
                            <span className="text-sm min-w-[60px] text-center">${(item.price * item.quantity).toFixed(2)}</span>
                            <motion.div whileTap={{ scale: 0.9 }}>
                              <Button 
                                isIconOnly 
                                size="md" 
                                variant="light" 
                                color="primary"
                                onPress={() => handleAddToCart(item)}
                                className="opacity-70 hover:opacity-100"
                              >
                                <Icon icon="lucide:plus" size={16} />
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="border-t border-divider pt-3 space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tax (7%):</span>
                        <span>${calculateTax().toFixed(2)}</span>
                      </div>
                      {orderType === "delivery" && (
                        <div className="flex justify-between text-sm">
                          <span>Delivery Fee:</span>
                          <span>
                            {calculateDeliveryFee() === 0 
                              ? "Free" 
                              : `$${calculateDeliveryFee().toFixed(2)}`}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between font-semibold pt-2 border-t border-divider mt-2">
                        <span>Total:</span>
                        <span>${calculateGrandTotal().toFixed(2)}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium mb-3">Payment Method</h4>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <Radio value="card" description="Pay with credit/debit card">
                      Credit/Debit Card
                    </Radio>
                    <Radio value="cash" description="Pay when your order arrives">
                      Cash on Delivery
                    </Radio>
                  </RadioGroup>
                </motion.div>
                
                {paymentMethod === "card" && (
                  <motion.div 
                    className="space-y-4 mb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Input
                      label="Cardholder Name"
                      placeholder="John Doe"
                      startContent={<Icon icon="lucide:user" />}
                      isRequired
                    />
                    <Input
                      label="Card Number"
                      placeholder="1234 5678 9012 3456"
                      startContent={<Icon icon="lucide:credit-card" />}
                      isRequired
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Expiration Date"
                        placeholder="MM/YY"
                        isRequired
                      />
                      <Input
                        label="CVV"
                        placeholder="123"
                        type="password"
                        isRequired
                      />
                    </div>
                  </motion.div>
                )}
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    color="primary" 
                    size="lg" 
                    className="w-full font-medium"
                    startContent={<Icon icon="lucide:shopping-bag" />}
                    isDisabled={cartItems.length === 0}
                  >
                    {cartItems.length === 0 ? "Add items to order" : `Place Order ($${calculateGrandTotal().toFixed(2)})`}
                  </Button>
                </motion.div>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border border-divider">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Order Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:clock" className="text-primary" />
                      <div>
                        <p className="font-medium">Delivery Time</p>
                        <p className="text-sm text-foreground-600">30-45 minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:dollar-sign" className="text-primary" />
                      <div>
                        <p className="font-medium">Delivery Fee</p>
                        <p className="text-sm text-foreground-600">$3.99 (Free for orders over $25)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:utensils" className="text-primary" />
                      <div>
                        <p className="font-medium">Minimum Order</p>
                        <p className="text-sm text-foreground-600">$15.00</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border border-divider">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Hours of Operation</h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday</span>
                      <span className="font-medium text-danger">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tuesday</span>
                      <span className="font-medium">5:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Wednesday</span>
                      <span className="font-medium">6:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thursday</span>
                      <span className="font-medium">5:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday</span>
                      <span className="font-medium">5:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">5:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">5:00 PM - 10:00 PM</span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border border-divider">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:phone" className="text-primary" />
                      <div>
                        <p className="font-medium">Call Us</p>
                        <p className="text-sm text-foreground-600">(854) 999-3943</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon icon="lucide:mail" className="text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-foreground-600">contact@jadehibachi.com</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};