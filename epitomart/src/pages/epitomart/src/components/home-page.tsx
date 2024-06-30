"use client"; // This is a client component 

import { useRouter } from "next/navigation";
import Navbar from "./navbar";
import { EpitomartContextProvider } from "../context";
import { Link } from "react-router-dom";

export default function HomePage() {
  const route = useRouter();
  return (
    <EpitomartContextProvider>
    <main> 
      <h1 className='text-primary centre'>Epitomart</h1>
      <Link to="/login">
      <button type="button" className="btn btn-success">Login</button>
      </Link>
      <footer></footer>
    </main> 
    </EpitomartContextProvider>
  );
}
