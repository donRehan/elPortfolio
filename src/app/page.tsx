"use client";

import { Github, Linkedin, Code, Zap, Minimize, ArrowRight, FileDown, X} from "lucide-react";
import Link from "next/link";
import Button from "./ui/Button/Button";
import { ibm } from "./ui/fonts"
import Image from 'next/image';
import { useEffect, useState } from "react";

interface ListItem {
  title: string
  description: string
  slug: string
}

function WarningModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-yellow-400 border-4 border-black p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-black mb-4">WARNING</h2>
        <p className="text-black mb-6">This website is under construction. Some features may not be fully functional.</p>
        <button
          onClick={onClose}
          className="bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition-colors"
        >
          Understood
        </button>
      </div>
    </div>
  );
}

const sampleItems: ListItem[] = [
  {
    title: "Example Product",
    description: `Example description to be fetched from the backend.`,
    slug: "brutalist-chair",
  },
  {
    title: "Example Product",
    description: `Example description to be fetched from the backend.`,
    slug: "concrete-coffee-table",
  },
  {
    title: "Example Product",
    description: `Example description to be fetched from the backend.`,
    slug: "minimalist-lamp",
  },
  {
    title: "Example Product",
    description: `Example description to be fetched from the backend.`,
    slug: "raw-steel-bookshelf",
  },
  {
    title: "Example Product",
    description: `Example description to be fetched from the backend.`,
    slug: "exposed-brick-wallpaper",
  },
]

function ListComponent() {
  return (
    <div className={`${ibm.className} container mx-auto px-4 py-8 bg-gray-100 min-h-screen`}>
      <ul className="space-y-8">
        {sampleItems.map((item, index) => (
          <div className="group">
          <li key={index} className="border-b border-black pb-4 group-hover:border-b-4">
            <Link href={`/product/${item.slug}`} className="block pb-2  border-black transition-all">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-sm mb-4 text-wrap">{item.description}</p>
                <span className="text-sm underline md:text-right group-hover:font-bold transition-all">
                  View Product
                </span>
            </Link>
          </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <div className={`${ibm.className} antialiased min-h-screen bg-[#f5f5f5] text-black font-mono`}>
      <WarningModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="bg-[#f5f5f5] mx-auto max-w-5xl">
        {/* Header Section */}
        <header className="container mx-auto px-4 py-8 border-b-4 border-black text-center">
          <h1 className="text-4xl font-bold">ALHUSSIEN REHAN</h1>
          <p className="text-xl">Front-End Developer | UI/UX Enthusiast</p>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 border-b-4 border-black">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[3rem] font-bold mb-6 break-words sm:text-6xl">CRAFTING DIGITAL EXPERIENCES</h2>
            <p className="text-2xl mb-8">I build responsive, user-friendly websites that make an impact.</p>
            <Link
              href="#contact"
            >
              <Button>
                Let's work together
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="container mx-auto px-4 py-20 border-b-4 border-black">
          <h2 className="text-4xl font-bold mb-8 text-center">WORKING METHODOLOGY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-black p-6">
              <Minimize className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-center">MINIMAL CODE</h3>
              <p className="text-center">Less is more. I write concise, purposeful code.</p>
            </div>
            <div className="border-2 border-black p-6">
              <Code className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-center">CLEAN CODE</h3>
              <p className="text-center">Readable, maintainable, and well-structured code is my priority.</p>
            </div>
            <div className="border-2 border-black p-6">
              <Zap className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 text-center">EFFICIENT CODE</h3>
              <p className="text-center">I optimize for performance and speed.</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto px-4 py-20 border-b-4 border-black">
          <h2 className="text-4xl font-bold mb-8 text-left">NOTABLE PROJECTS</h2>
              <ListComponent />
        </section>

        {/* Experience Section ? */}

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-20 border-b-4 border-black">
          <h2 className="text-4xl font-bold mb-8 text-center">GET IN TOUCH</h2>
          <div className="border-2 border-black p-6 text-center">
            <p className="text-2xl mb-6">Ready to start your next project? Let's talk!</p>
            <Link
              href="mailto:alhussienrehan@hotmail.com"
              className="inline-block"
            >
              <Button>
                Email Me
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 flex justify-between items-center">
          <p>&copy; 2024 Alhussien Rehan. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="https://github.com/donRehan" className="hover:opacity-75 transition-opacity" target="_blank">
              <Github className="w-8 h-8" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/alhussain-rehan-3347a422b/" className="hover:opacity-75 transition-opacity" target="_blank">
              <Linkedin className="w-8 h-8" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="assets/Resume.pdf" className="hover:opacity-75 transition-opacity" target="_blank">
              <FileDown className="w-8 h-8" />
              <span className="sr-only">Resume</span>
            </Link>

          </div>
        </footer>
      </div>
    </div>
  )
}
