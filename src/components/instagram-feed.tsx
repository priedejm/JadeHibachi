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
    <section className="py-16 md:py-20 bg-content2 mobile-section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Follow Us on Instagram</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto px-1">
            Stay updated with our latest dishes, promotions, and events by following us on Instagram
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <Card className="border border-divider max-w-md mx-auto mb-6 md:mb-8">
          <CardBody className="p-0">
            <div className="flex items-center justify-between p-4 border-b border-divider">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    removeWrapper
                    alt="Jade Hibachi Instagram"
                    className="w-full h-full object-cover"
                    src="https://img.heroui.chat/image/food?w=200&h=200&u=50"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">@jadehibachigrill</h3>
                  <p className="text-xs text-foreground-500">Charleston, SC</p>
                </div>
              </div>
              <Button 
                color="primary" 
                size="sm"
                startContent={<Icon icon="lucide:instagram" />}
                as="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow
              </Button>
            </div>
            <div className="p-4">
              <p className="text-sm">
                Serving the best hibachi in Charleston! Tag us in your photos to be featured. 
                #jadehibachi #charlestonsc #hibachigrill
              </p>
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