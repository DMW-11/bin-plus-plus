// This is a styled scaffold for a React-based social platform to rehome items and reduce landfill waste
// Updated with design elements inspired by uploaded UI image and refactored into reusable components

import PremiumServiceCard from './components/PremiumServiceCard';
import UpcycleItemCard from './components/UpcycleItemCard';

export default function HomePage() {
  const premiumServices = [
    {
      id: 1,
      name: 'Computer Recycling',
      description: 'Monitors, phones, tablets, etc.',
      contact: '(09) 8860558',
      rating: 4,
    },
    {
      id: 2,
      name: 'Gorilla Skip Bins',
      description: 'Compost, collection, recycling, etc.',
      contact: '0800 GORILLA',
      rating: 3,
    },
    {
      id: 3,
      name: 'Jazz Movers',
      description: 'Moving and storage services.',
      contact: '02040822328',
      rating: 4,
    },
    {
      id: 4,
      name: 'DumpMe Rubbish',
      description: 'Furniture, appliances, removal.',
      contact: '0800 DUMPME',
      rating: 5,
    },
  ];

  const upcycleItems = [
    {
      id: 1,
      title: 'Nike Trainers 9.5',
      image: 'https://via.placeholder.com/150',
      requests: 103,
    },
    {
      id: 2,
      title: 'Coffee Table',
      image: 'https://via.placeholder.com/150',
      requests: 97,
    },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      <header className="bg-green-600 text-white p-4 flex items-center justify-between shadow-md">
        <h1 className="text-2xl font-bold">Bin++ Marketplace</h1>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search Bin++"
            className="rounded px-3 py-1 text-black"
          />
          <button className="rounded-full bg-white text-green-600 p-2">👤</button>
        </div>
      </header>

      <section className="p-6 bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">🌟 Premium Services</h2>
        <div className="flex overflow-x-auto gap-4">
          {premiumServices.map((service) => (
            <PremiumServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-xl font-semibold mb-2">♻️ Up-cycle Zone</h2>
        <p className="mb-4 text-sm text-gray-600">Items given away for free in your area</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcycleItems.map((item) => (
            <UpcycleItemCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <footer className="text-center mt-10 py-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Bin++ Marketplace. All rights reserved.
      </footer>
    </div>
  );
}
