import React from "react";
import { Card, CardBody, Button, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Contact: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
      alert("Thank you for your message! We'll get back to you soon.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-content2 mobile-section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto px-1">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border border-divider h-full">
              <CardBody className="p-4 md:p-6 mobile-card-padding">
                <h3 className="text-xl font-semibold mb-4 md:mb-6">Get In Touch</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 mobile-spacing">
                  <Input
                    label="Name"
                    placeholder="Your name"
                    value={name}
                    onValueChange={setName}
                    isRequired
                    classNames={{
                      inputWrapper: "px-3 py-1 md:px-4 md:py-2"
                    }}
                  />
                  
                  <Input
                    label="Email"
                    placeholder="Your email address"
                    value={email}
                    onValueChange={setEmail}
                    type="email"
                    isRequired
                    classNames={{
                      inputWrapper: "px-3 py-1 md:px-4 md:py-2"
                    }}
                  />
                  
                  <Textarea
                    label="Message"
                    placeholder="How can we help you?"
                    value={message}
                    onValueChange={setMessage}
                    minRows={4}
                    isRequired
                    classNames={{
                      inputWrapper: "px-3 py-1 md:px-4 md:py-2"
                    }}
                  />
                  
                  <Button 
                    type="submit" 
                    color="primary" 
                    className="w-full font-medium"
                    startContent={<Icon icon="lucide:send" />}
                    isLoading={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border border-divider h-full">
              <CardBody className="p-6">
                <h3 className="text-xl font-semibold mb-6">Restaurant Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-medium">
                      <Icon icon="lucide:map-pin" className="text-primary" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-foreground-600">271 Ashley Ave, Charleston, SC 29403</p>
                      <Button 
                        color="primary" 
                        variant="light" 
                        size="sm" 
                        className="mt-2 px-0"
                        as="a"
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        startContent={<Icon icon="lucide:external-link" size={14} />}
                      >
                        Get Directions
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-medium">
                      <Icon icon="lucide:phone" className="text-primary" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-foreground-600">(854) 999-3943</p>
                      <Button 
                        color="primary" 
                        variant="light" 
                        size="sm" 
                        className="mt-2 px-0"
                        as="a"
                        href="tel:+18549993943"
                        startContent={<Icon icon="lucide:phone" size={14} />}
                      >
                        Call Now
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-medium">
                      <Icon icon="lucide:clock" className="text-primary" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Hours</h4>
                      <ul className="text-foreground-600 space-y-1">
                        <li className="flex justify-between">
                          <span>Monday:</span>
                          <span className="font-medium text-danger">Closed</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Tuesday:</span>
                          <span>5:00 PM - 10:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Wednesday:</span>
                          <span>6:00 PM - 10:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Thursday:</span>
                          <span>5:00 PM - 10:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Friday:</span>
                          <span>5:00 PM - 10:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Saturday:</span>
                          <span>5:00 PM - 10:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sunday:</span>
                          <span>5:00 PM - 10:00 PM</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-medium">
                      <Icon icon="lucide:info" className="text-primary" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Additional Information</h4>
                      <ul className="text-foreground-600 space-y-1">
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:x" size={14} />
                          <span>Doesn't accept reservations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-success" size={14} />
                          <span>Vegan options available</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-success" size={14} />
                          <span>Good for watching sports</span>
                        </li>
                      </ul>
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