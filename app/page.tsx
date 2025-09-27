'use client';
import Image from "next/image";
import { Hero } from "@/components/ui/animated-hero";
import Intro from "@/components/about";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Intro/>
    </div>
  );
}
