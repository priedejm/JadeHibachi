import React from "react";
import { Card, CardBody, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { TreePalm, Leaf, Monitor, ChefHat } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">About Jade Hibachi Grill</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
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
                  className="w-full h-auto object-cover"
                  src="assets/images/hibachi2.jpg"
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
            <motion.h3 
              className="text-2xl font-semibold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Welcome to Jade Hibachi Grill
            </motion.h3>
            <motion.p 
              className="text-foreground-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              A family-owned and operated spot in Charleston's Westside neighborhood, Jade Hibachi serves 
              familiar Japanese-style hibachi and Filipino recipes passed down from our own families.
            </motion.p>
            <motion.p 
              className="text-foreground-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              We extend a warm Filipino-Charlestonian welcome and hope to see you soon! Our menu includes 
              delicious chicken and shrimp combos, teriyaki, steak dishes, and vegan options to accommodate all dietary preferences.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="border border-divider rounded-medium p-4 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <TreePalm className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-lg">Outdoor Dining</p>
                <p className="text-sm text-foreground-500">Friendly atmosphere</p>
              </motion.div>
              <motion.div 
                className="border border-divider rounded-medium p-4 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Leaf className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-lg">Vegan Options</p>
                <p className="text-sm text-foreground-500">For all preferences</p>
              </motion.div>
              <motion.div 
                className="border border-divider rounded-medium p-4 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Monitor className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-lg">Sports Viewing</p>
                <p className="text-sm text-foreground-500">Watch while you dine</p>
              </motion.div>
              <motion.div 
                className="border border-divider rounded-medium p-4 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <ChefHat className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-lg">Hibachi Style</p>
                <p className="text-sm text-foreground-500">Authentic cuisine</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};