import React from "react";
import { Card, CardBody, Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const InstagramFeed: React.FC = () => {
  const instagramPosts = [
    {
      id: "1",
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=11",
      likes: 124,
      comments: 8
    },
    {
      id: "2",
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=12",
      likes: 89,
      comments: 5
    },
    {
      id: "3",
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=13",
      likes: 156,
      comments: 12
    },
    {
      id: "4",
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=14",
      likes: 78,
      comments: 3
    },
    {
      id: "5",
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=15",
      likes: 112,
      comments: 9
    },
    {
      id: "6",
      image: "https://img.heroui.chat/image/food?w=400&h=400&u=16",
      likes: 95,
      comments: 7
    }
  ];
  
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
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-20 bg-content2">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Follow Us on Instagram</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            Stay updated with our latest dishes, promotions, and events by following us on Instagram
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <Card className="border border-divider max-w-xl mx-auto mb-12">
          <CardBody className="p-0">
            <div className="flex items-center justify-between p-6 border-b border-divider">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center">
                  <Icon icon="logos:instagram-icon" width={28} height={28} className="drop-shadow-sm" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">@jadehibachigrill</h3>
                  <p className="text-sm text-foreground-500">Jade Hibachi Grill • Charleston, SC</p>
                </div>
              </div>
              <Button 
                color="primary" 
                size="md"
                startContent={<Icon icon="lucide:instagram" />}
                as="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow
              </Button>
            </div>
          </CardBody>
        </Card>
        
        <motion.div 
          className="instagram-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {instagramPosts.map((post) => (
            <motion.div key={post.id} variants={item}>
              <Card className="border-none overflow-hidden">
                <CardBody className="p-0 relative group">
                  <Image
                    removeWrapper
                    alt="Instagram post"
                    className="w-full h-full aspect-square object-cover"
                    src={post.image}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white flex gap-4">
                      <div className="flex items-center">
                        <Icon icon="lucide:heart" />
                        <span className="ml-1">{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon icon="lucide:message-circle" />
                        <span className="ml-1">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-8">
          <Button 
            color="primary" 
            variant="bordered" 
            startContent={<Icon icon="lucide:instagram" />}
            as="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            View More on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};