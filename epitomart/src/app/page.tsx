"use client"; // This is a client component 

import HomePage from "@/pages/epitomart/src/components/home-page";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import LoginPage from "@/pages/epitomart/src/components/login";
import ProductGallery from "@/pages/epitomart/src/components/product-gallery";
import RootLayout from "./layout";
import Navbar from "@/pages/epitomart/src/components/navbar";
export default function Home() {
  return (
      <BrowserRouter>
       <Navbar></Navbar>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/productGallery" Component={ProductGallery} />
        </Routes>
      </BrowserRouter>
  );
}
