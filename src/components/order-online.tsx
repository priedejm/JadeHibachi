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
    { id: "p1", name: "Gyoza (5)", price: 7 },
    { id: "p2", name: "Spring Roll (2)", price: 4.50 },
    { id: "p3", name: "Cream Cheese Rangoons", price: 8 }
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Order Online</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            Enjoy our delicious hibachi meals from the comfort of your home with our easy online ordering system
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border border-divider">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-6">Start Your Order</h3>
                
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
                
                {orderType === "delivery" ? (
                  <div className="space-y-4 mb-6">
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
                  </div>
                ) : (
                  <div className="space-y-4 mb-6">
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
                  </div>
                )}
                
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Popular Items</h4>
                  <div className="space-y-2">
                    {popularItems.map(item => {
                      const cartItem = cartItems.find(i => i.id === item.id);
                      const quantity = cartItem?.quantity || 0;
                      
                      return (
                        <div key={item.id} className="flex items-center justify-between p-3 border border-divider rounded-medium">
                          <div className="flex-1">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-foreground-600">${item.price.toFixed(2)}</p>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            {quantity > 0 && (
                              <>
                                <Button 
                                  isIconOnly 
                                  size="sm" 
                                  variant="light" 
                                  onPress={() => handleRemoveFromCart(item.id)}
                                >
                                  <Icon icon="lucide:minus" />
                                </Button>
                                <span className="w-6 text-center">{quantity}</span>
                              </>
                            )}
                            <Button 
                              isIconOnly 
                              size="sm" 
                              color="primary" 
                              variant={quantity > 0 ? "flat" : "solid"}
                              onPress={() => handleAddToCart(item)}
                            >
                              <Icon icon="lucide:plus" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {cartItems.length > 0 && (
                  <div className="mb-6 p-4 bg-content2 rounded-medium">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Icon icon="lucide:shopping-cart" />
                      Your Order
                    </h4>
                    
                    <div className="space-y-2 mb-4">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span>{item.quantity}x</span>
                            <span>{item.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                            <Button 
                              isIconOnly 
                              size="sm" 
                              variant="light" 
                              color="danger"
                              onPress={() => handleRemoveFromCart(item.id)}
                              className="opacity-70 hover:opacity-100"
                            >
                              <Icon icon="lucide:minus" size={14} />
                            </Button>
                          </div>
                        </div>
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
                  </div>
                )}
                
                <div className="mb-6">
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
                </div>
                
                {paymentMethod === "card" && (
                  <div className="space-y-4 mb-6">
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
                  </div>
                )}
                
                <Button 
                  color="primary" 
                  size="lg" 
                  className="w-full font-medium"
                  startContent={<Icon icon="lucide:shopping-bag" />}
                  isDisabled={cartItems.length === 0}
                >
                  {cartItems.length === 0 ? "Add items to order" : `Place Order ($${calculateGrandTotal().toFixed(2)})`}
                </Button>
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
        </div>
      </div>
    </section>
  );
};