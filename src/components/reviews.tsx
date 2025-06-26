import React from "react";
import { Card, CardBody, Avatar, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  source: string;
}

export const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: "1",
      name: "Maya E",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1",
      rating: 5,
      text: "Amazing food, amazing prices, amazing portions and more than amazing staff!",
      source: "Google"
    },
    {
      id: "2",
      name: "Henry Danois, MD",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2",
      rating: 5,
      text: "Great atmosphere, great service, and most importantly.. food SLLAAPPPED!",
      source: "Google"
    },
    {
      id: "3",
      name: "Tim Albert",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=3",
      rating: 4,
      text: "I ordered the chicken and shrimp hibachi combo with a side of lumpia. Everything was delicious!",
      source: "Google"
    },
    {
      id: "4",
      name: "Sarah Johnson",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=4",
      rating: 5,
      text: "The food is always fresh and the service is excellent. My favorite hibachi place in Charleston!",
      source: "DoorDash"
    },
    {
      id: "5",
      name: "Michael Chen",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=5",
      rating: 4,
      text: "Great value for the price. The portions are generous and the food is consistently good.",
      source: "Uber Eats"
    },
    {
      id: "6",
      name: "Jessica Williams",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=6",
      rating: 5,
      text: "Love watching the chefs prepare the food. It's entertaining and delicious!",
      source: "Facebook"
    }
  ];
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Icon 
        key={index} 
        icon="lucide:star" 
        className={index < rating ? "text-yellow-400" : "text-gray-300"} 
        width={16} 
        height={16} 
      />
    ));
  };
  
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

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            See what our customers have to say about their dining experience at Jade Hibachi Grill
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex flex-col items-center p-4 bg-content1 rounded-medium">
            <div className="flex items-center">
              <Icon icon="logos:google-icon" width={24} height={24} />
              <span className="ml-2 font-semibold">Google</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="font-bold mr-2">4.1</span>
              <div className="flex">
                {renderStars(4)}
              </div>
            </div>
            <span className="text-sm text-foreground-500 mt-1">108 reviews</span>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-content1 rounded-medium">
            <div className="flex items-center">
              <Icon icon="logos:doordash-icon" width={24} height={24} />
              <span className="ml-2 font-semibold">DoorDash</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="font-bold mr-2">4.5</span>
              <div className="flex">
                {renderStars(4.5)}
              </div>
            </div>
            <span className="text-sm text-foreground-500 mt-1">50 reviews</span>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-content1 rounded-medium">
            <div className="flex items-center">
              <Icon icon="logos:facebook-icon" width={24} height={24} />
              <span className="ml-2 font-semibold">Facebook</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="font-bold mr-2">5.0</span>
              <div className="flex">
                {renderStars(5)}
              </div>
            </div>
            <span className="text-sm text-foreground-500 mt-1">8 reviews</span>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-content1 rounded-medium">
            <div className="flex items-center">
              <Icon icon="logos:uber-eats" width={24} height={24} />
              <span className="ml-2 font-semibold">Uber Eats</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="font-bold mr-2">4.6</span>
              <div className="flex">
                {renderStars(4.5)}
              </div>
            </div>
            <span className="text-sm text-foreground-500 mt-1">1,500 reviews</span>
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {reviews.map((review) => (
            <motion.div key={review.id} variants={item}>
              <Card className="border border-divider h-full">
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar src={review.avatar} name={review.name} />
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-xs text-foreground-500">via {review.source}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground-600 italic">"{review.text}"</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button 
            color="primary" 
            variant="bordered" 
            startContent={<Icon icon="lucide:message-square" />}
            as="a"
            href="#"
            className="font-medium"
          >
            Leave a Review
          </Button>
        </div>
      </div>
    </section>
  );
};