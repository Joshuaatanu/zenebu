'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { useRouter } from 'next/navigation';

export default function AddPropertyPage() {
  const [step, setStep] = useState(1);
  const [representation, setRepresentation] = useState('landlord');
  const router = useRouter();
  
  return (
    <div className="flex-1 flex flex-col">
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back to Dashboard */}
        <Link href="/properties" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Properties
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Property</h1>
          <p className="text-gray-600">
            Make sure you have filled in all the necessary fields and have uploaded all the required files.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                step === 1 ? 'bg-[#6C5DD3] text-white' : 'bg-gray-100 text-gray-500'
              }`}>
                1
              </div>
              <span className={`ml-2 font-medium ${
                step === 1 ? 'text-[#6C5DD3]' : 'text-gray-500'
              }`}>Request</span>
            </div>
            <div className="w-16 h-[2px] bg-gray-200 mx-2"></div>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                step === 2 ? 'bg-[#6C5DD3] text-white' : 'bg-gray-100 text-gray-500'
              }`}>
                2
              </div>
              <span className={`ml-2 font-medium ${
                step === 2 ? 'text-[#6C5DD3]' : 'text-gray-500'
              }`}>Listing Information</span>
            </div>
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          {step === 1 ? (
            // Step 1: Request Form
            <>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Property Address</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Street Address */}
                  <div className="md:col-span-2">
                    <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      placeholder="Enter address"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:border-transparent"
                    />
                  </div>

                  {/* Unit Number */}
                  <div>
                    <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-1">
                      Unit Number
                    </label>
                    <input
                      type="text"
                      id="unit"
                      name="unit"
                      placeholder="Unit number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:border-transparent"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="City name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:border-transparent"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="state"
                      name="state"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select state</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      {/* Add more states */}
                    </select>
                  </div>

                  {/* Zipcode */}
                  <div>
                    <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700 mb-1">
                      Zipcode<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="zipcode"
                      name="zipcode"
                      placeholder="Zipcode"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Representation */}
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium text-gray-700">I'm representing</span>
                    <button
                      type="button"
                      className="text-[#6C5DD3] hover:text-[#5B4EC2]"
                      title="Choose who you are representing"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="representation"
                        value="landlord"
                        checked={representation === 'landlord'}
                        onChange={(e) => setRepresentation(e.target.value)}
                        className="w-4 h-4 text-[#6C5DD3] focus:ring-[#6C5DD3] border-gray-300"
                      />
                      <span className="text-gray-700">The landlord or property</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="representation"
                        value="applicant"
                        checked={representation === 'applicant'}
                        onChange={(e) => setRepresentation(e.target.value)}
                        className="w-4 h-4 text-[#6C5DD3] focus:ring-[#6C5DD3] border-gray-300"
                      />
                      <span className="text-gray-700">Applicant(s)</span>
                    </label>
                  </div>
                </div>
              </form>
            </>
          ) : (
            // Step 2: Listing Information
            <>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Listing Information</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Property Type */}
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                      Property Type<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select property type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="studio">Studio</option>
                    </select>
                  </div>

                  {/* Property Size */}
                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                      Property Size (sq ft)<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="size"
                      name="size"
                      placeholder="Enter size in square feet"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:border-transparent"
                    />
                  </div>

                  {/* Bedrooms */}
                  <div>
                    <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Bedrooms<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="bedrooms"
                      name="bedrooms"
                      placeholder="Enter number of bedrooms"
                      required
                      min="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:border-transparent"
                    />
                  </div>

                  {/* Bathrooms */}
                  <div>
                    <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Bathrooms<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="bathrooms"
                      name="bathrooms"
                      placeholder="Enter number of bathrooms"
                      required
                      min="0"
                      step="0.5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:border-transparent"
                    />
                  </div>

                  {/* Monthly Rent */}
                  <div>
                    <label htmlFor="rent" className="block text-sm font-medium text-gray-700 mb-1">
                      Monthly Rent ($)<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="rent"
                      name="rent"
                      placeholder="Enter monthly rent"
                      required
                      min="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:border-transparent"
                    />
                  </div>

                  {/* Available Date */}
                  <div>
                    <label htmlFor="availableDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Available Date<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="availableDate"
                      name="availableDate"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Amenities */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Amenities
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      'Parking',
                      'Laundry',
                      'Air Conditioning',
                      'Heating',
                      'Dishwasher',
                      'Gym',
                      'Pool',
                      'Pet Friendly',
                      'Furnished',
                      'Balcony',
                      'Storage',
                      'Elevator'
                    ].map((amenity) => (
                      <label key={amenity} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="amenities"
                          value={amenity.toLowerCase().replace(' ', '_')}
                          className="w-4 h-4 text-[#6C5DD3] focus:ring-[#6C5DD3] border-gray-300 rounded"
                        />
                        <span className="text-gray-700">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Property Description<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    placeholder="Describe the property, its features, and any other important details"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:border-transparent"
                  ></textarea>
                </div>
              </form>
            </>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                if (step === 2) {
                  // Here you would normally handle form submission
                  router.push('/properties');
                } else {
                  setStep(step + 1);
                }
              }}
              className="px-6 py-3 bg-[#6C5DD3] text-white rounded-lg font-medium hover:bg-[#5B4EC2] transition-colors ml-auto"
            >
              {step === 2 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
} 