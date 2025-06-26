import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="hero-gradient w-full h-[90vh] flex items-center justify-center text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 px-2">
            Authentic Hibachi Experience
          </h1>
          <p className="text-base md:text-xl mb-8 opacity-90 px-2">
            Enjoy the finest hibachi-style cuisine in Charleston, SC
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button 
              size="lg" 
              color="primary"
              as="a" 
              href="#menu"
              className="font-medium"
              startContent={<Icon icon="lucide:menu" />}
            >
              View Menu
            </Button>
            <Button 
              size="lg" 
              variant="bordered" 
              as="a" 
              href="#order"
              className="text-white border-white font-medium"
              startContent={<Icon icon="lucide:shopping-bag" />}
            >
              Order Online
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="flex items-center">
              <Icon icon="lucide:star" className="text-yellow-400" />
              <span className="ml-1 font-semibold">4.1</span>
              <span className="ml-1 text-sm opacity-80">(108 reviews)</span>
            </div>
            <div className="h-4 border-r border-white/30"></div>
            <div className="flex items-center">
              <Icon icon="lucide:map-pin" className="text-red-400" />
              <span className="ml-1">Charleston, SC</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};