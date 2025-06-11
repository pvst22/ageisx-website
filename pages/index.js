
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, HelpCircle } from 'lucide-react';
import { useRouter } from 'next/router';

const sections = [
  { title: 'Founder', description: 'Meet the visionary behind AgeisX.' },
  { title: 'Co-Founders', description: 'The minds building innovation together.' },
  { title: 'Our Team', description: 'A passionate, skilled, and driven crew.' },
  { title: 'Success', description: 'Milestones and achievements we are proud of.' },
  { title: 'Products', description: 'Explore our intelligent solutions.' },
  { title: 'Domains', description: 'We work across AI, Blockchain, and more.' },
];

export default function HomePage() {
  const router = useRouter();
  const handleRedirect = (title) => {
    const routes = {
      'Founder': '/founder',
      'Co-Founders': '/co-founders',
      'Our Team': '/our-team',
      'Success': '/success',
      'Products': '/products',
      'Domains': '/domains'
    };
    if (routes[title]) router.push(routes[title]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 relative">
      <header className="text-center mb-12">
        <nav className="flex justify-between items-center px-4 py-2">
          <div className="text-xl font-bold text-white">AgeisX</div>
          <ul className="hidden md:flex space-x-6 text-sm">
            <li className="hover:text-purple-400 cursor-pointer">Home</li>
            <li className="hover:text-purple-400 cursor-pointer">Products</li>
            <li className="hover:text-purple-400 cursor-pointer">Team</li>
            <li className="hover:text-purple-400 cursor-pointer">Contact</li>
            <li>
              <button
                onClick={() => router.push('/login')}
                className="bg-purple-700 px-4 py-1 rounded text-sm hover:bg-purple-800"
              >
                Login / Signup
              </button>
            </li>
          </ul>
        </nav>
        <img src="/logo.png" alt="AgeisX Logo" className="mx-auto w-24 h-24" />
        <h1 className="text-4xl font-bold mt-4">AGEISX</h1>
        <p className="text-purple-400 mt-2 italic">[Tagline Goes Here]</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 rounded-2xl overflow-hidden p-6 group shadow-lg"
            whileHover={{ y: -5 }}
          >
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-sm text-gray-300 mb-4">{section.description}</p>
            <motion.div
              initial={{ y: '100%' }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 bg-purple-600 bg-opacity-90 text-white p-4 flex justify-between items-center translate-y-full group-hover:translate-y-0"
            >
              <span className="font-semibold">Learn More</span>
              <button
                onClick={() => handleRedirect(section.title)}
                className="bg-black px-3 py-1 text-sm rounded hover:bg-gray-800"
              >
                Go →
              </button>
            </motion.div>
          </motion.div>
        ))}
      </section>

      <footer className="mt-16 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} AgeisX. All rights reserved.
      </footer>

      <button className="fixed bottom-20 right-6 bg-purple-600 p-3 rounded-full shadow-xl hover:bg-purple-700">
        <MessageSquare className="text-white" size={24} />
      </button>
      <button className="fixed bottom-6 right-6 bg-gray-700 p-3 rounded-full shadow-xl hover:bg-gray-800">
        <HelpCircle className="text-white" size={24} />
      </button>
    </main>
  );
}
