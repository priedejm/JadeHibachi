import React from "react";
import { Card, CardBody, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Leaf, Monitor, ChefHat, Sun } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Jade Hibachi Grill</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-none">
              <CardBody className="p-0">
                <Image
                  removeWrapper
                  alt="Jade Hibachi Grill Restaurant"
                  className="w-full h-auto"
                  src="/assets/images/hibachi2.jpg"
                />
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Welcome to Jade Hibachi Grill</h3>
            <p className="text-foreground-600">
              Jade Hibachi Grill is a casual eatery in Charleston specializing in authentic hibachi-style cuisine. 
              Our skilled chefs prepare delicious chicken and shrimp combos, teriyaki, and steak dishes right before your eyes.
            </p>
            <p className="text-foreground-600">
              We pride ourselves on creating a friendly atmosphere where you can enjoy great food while watching sports. 
              Our menu includes vegan options to accommodate all dietary preferences.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="border border-divider rounded-medium p-4 text-center">
                <Sun className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="font-semibold text-lg">Outdoor Seating</p>
                <p className="text-sm text-foreground-500">Enjoy fresh air</p>
              </div>
              <div className="border border-divider rounded-medium p-4 text-center">
                <Leaf className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="font-semibold text-lg">Vegan Options</p>
                <p className="text-sm text-foreground-500">For all preferences</p>
              </div>
              <div className="border border-divider rounded-medium p-4 text-center">
                <Monitor className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="font-semibold text-lg">Sports Viewing</p>
                <p className="text-sm text-foreground-500">Watch while you dine</p>
              </div>
              <div className="border border-divider rounded-medium p-4 text-center">
                <ChefHat className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="font-semibold text-lg">Hibachi Style</p>
                <p className="text-sm text-foreground-500">Authentic cuisine</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};