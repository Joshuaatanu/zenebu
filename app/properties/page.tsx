'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

// Mock data for properties
const mockProperties = [
  {
    id: 1,
    title: 'Modern Apartment in Downtown',
    address: '123 Main St, New York, NY',
    price: 2500,
    bedrooms: 2,
    bathrooms: 2,
    size: 1200,
    image: '/property1.jpg',
    type: 'apartment',
    amenities: ['Parking', 'Gym', 'Pool']
  },
  {
    id: 2,
    title: 'Cozy Studio with City View',
    address: '456 Park Ave, New York, NY',
    price: 1800,
    bedrooms: 1,
    bathrooms: 1,
    size: 800,
    image: '/property2.jpg',
    type: 'studio',
    amenities: ['Air Conditioning', 'Laundry']
  },
  // Add more mock properties as needed
];

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const propertyTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'house', label: 'House' },
    { value: 'condo', label: 'Condo' },
    { value: 'townhouse', label: 'Townhouse' },
    { value: 'studio', label: 'Studio' }
  ];

  const filteredProperties = mockProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || property.type === selectedType;
    const matchesPrice = (!minPrice || property.price >= parseInt(minPrice)) &&
                        (!maxPrice || property.price <= parseInt(maxPrice));
    const matchesBedrooms = !bedrooms || property.bedrooms === parseInt(bedrooms);
    
    return matchesSearch && matchesType && matchesPrice && matchesBedrooms;
  });

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 md:p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Properties</h1>
            <Link href="/properties/new" className="bg-[#6C5DD3] text-white px-6 py-2 rounded-lg hover:bg-[#5A4DB8] transition-colors flex items-center">
              Add Property
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 border mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search properties..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C5DD3]"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3]">
                <option>All Types</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Commercial</option>
              </select>
              <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3]">
                <option>All Status</option>
                <option>Available</option>
                <option>Occupied</option>
                <option>Maintenance</option>
              </select>
              <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3]">
                <option>Sort by</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Recently Added</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map(property => (
              <div key={property.id} className="bg-white rounded-2xl border overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
                    <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded">Available</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{property.address}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">${property.price}/mo</span>
                    <button className="text-[#6C5DD3] hover:text-[#5A4DB8] font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
} 