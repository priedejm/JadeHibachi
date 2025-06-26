import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Menu } from "./components/menu";
import { OrderOnline } from "./components/order-online";
import { InstagramFeed } from "./components/instagram-feed";
import { Reviews } from "./components/reviews";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { CartProvider } from "./context/cart-context";
import { BackToTop } from "./components/back-to-top";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <CartProvider>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Menu />
          <OrderOnline />
          <InstagramFeed />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </CartProvider>
    </div>
  );
}