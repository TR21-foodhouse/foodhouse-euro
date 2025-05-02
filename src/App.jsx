import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-screen bg-cover bg-center text-white px-6 py-32" style={{ backgroundImage: 'url(https://tse3.mm.bing.net/th?id=OIP.0_uP_Xml3mfB6vkbyKAv-gHaF-&pid=Api)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 drop-shadow">Welcome to Foodhouse Euro Ltd.</h1>
        <p className="text-xl drop-shadow">Quality, Tradition, and Innovation in every bite.</p>
        <Link to="/about" className="mt-8 inline-block bg-white text-pink-600 font-bold py-3 px-6 rounded-full hover:bg-pink-100 transition">Learn More</Link>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">Our Startup Journey</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img src="https://tse1.mm.bing.net/th?id=OIP.q_bdmwUmNLU-27Y9Q-Tt0AHaHa&pid=Api" alt="Startup" className="rounded-xl shadow-md" />
        <p className="text-lg leading-relaxed">
          With over 35 years of experience in the food industry, specializing in lentils and working closely with farmers, we’ve built a strong foundation of product knowledge. Our journey began with a passion for delivering high-quality, wholesome products directly to consumers. Starting small, we initially offered our products in small boxes and containers to family and friends, with a focus on sharing the true value of lentils.
          <br /><br />
          As demand grew, we gradually expanded from a home-based operation to a small-scale commercial unit. Today, we continue to grow, evolving into a trusted name in the food industry. Our commitment to quality, innovation, and sustainability remains at the core of everything we do. We are proud to be able to share our carefully crafted products with larger brands while still keeping that personal touch that defines our origins.
        </p>
      </div>
    </section>
  );
}

function Products() {
  const items = ["Goalsip", "Golfry", "Imli Paani (Standard)", "Imli Paani (Hot & Spicy)"];
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-10">Our Product Range</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4 text-center">
            <img src="https://tse2.mm.bing.net/th?id=OIP.R4iEd99UcitJoAVlULryQQHaFk&pid=Api" alt={item} className="h-40 w-full object-cover rounded mb-3" />
            <h3 className="text-lg font-semibold text-pink-600">{item}</h3>
          </div>
        ))}
      </div>
      <div className="mt-12 text-lg space-y-4">
        <p><strong>Quality & Hygiene:</strong> Rigorous checks and sanitary processes at every stage.</p>
        <p><strong>Health & Safety:</strong> Compliant with top food safety standards.</p>
        <p><strong>Production Capacity:</strong> Built to scale without compromising quality.</p>
        <p><strong>Nationwide Distribution:</strong> Seamless logistics throughout the UK.</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-green-700 mb-10">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded"></textarea>
        <button type="submit" className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700">Send Message</button>
      </form>
    </section>
  );
}

function App() {
  return (
    <Router>
      <header className="bg-white shadow sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-pink-600">Foodhouse</h2>
          <div className="space-x-6">
            <Link to="/" className="text-gray-700 hover:text-pink-500">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-500">About</Link>
            <Link to="/products" className="text-gray-700 hover:text-pink-500">Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-500">Contact</Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Foodhouse Euro Ltd. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
