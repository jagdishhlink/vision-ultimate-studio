'use client'

import Image from 'next/image'
import { useState } from 'react'
import { HiOutlineHeart, HiOutlineSparkles, HiOutlineStar, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineChevronRight } from 'react-icons/hi2'

export default function ServicesPage() {
  const [activePackage, setActivePackage] = useState('premium')
  const [openAccordion, setOpenAccordion] = useState(0)

  const packages = {
    premium: {
      name: 'Premium Package',
      price: '₹15,000',
      duration: '2-3 hours',
      photos: '50+ edited photos',
      features: [
        'Multiple setup changes',
        'Professional props included',
        'Online gallery delivery',
        'High-resolution images',
        'Print-ready formats',
        'Family group shots'
      ]
    },
    standard: {
      name: 'Standard Package',
      price: '₹10,000',
      duration: '1-2 hours',
      photos: '30+ edited photos',
      features: [
        '2 setup changes',
        'Basic props included',
        'Online gallery delivery',
        'High-resolution images',
        'Print-ready formats'
      ]
    },
    express: {
      name: 'Express Package',
      price: '₹7,500',
      duration: '1 hour',
      photos: '20+ edited photos',
      features: [
        '1 setup included',
        'Basic props',
        'Online gallery delivery',
        'High-resolution images'
      ]
    }
  }

  const pricingItems = [
    {
      title: 'Newborn Photography (0-2 weeks)',
      price: '₹12,000 - ₹18,000',
      description: 'Gentle, patient sessions capturing your baby\'s first precious moments with beautiful props and setups.',
      includes: ['Safety-first positioning', 'Parent shots included', 'Sibling photos', 'Multiple outfit changes', 'Wrap and headband options']
    },
    {
      title: '6-Month Baby Milestone',
      price: '₹10,000 - ₹15,000',
      description: 'Perfect timing for sitting milestone photos with colorful, engaging props and backgrounds.',
      includes: ['Sitting poses', 'Tummy time shots', 'Cake smash option', 'Multiple backgrounds', 'Family shots']
    },
    {
      title: 'First Birthday Cake Smash',
      price: '₹8,000 - ₹12,000',
      description: 'Fun, messy celebration shoots that capture the joy of your little one\'s first birthday.',
      includes: ['Custom cake setup', 'Before & after shots', 'Cleanup included', 'Party hat & props', 'Bath shots optional']
    },
    {
      title: 'Maternity Photography',
      price: '₹9,000 - ₹14,000',
      description: 'Beautiful golden hour sessions celebrating your pregnancy journey with elegant poses.',
      includes: ['Partner shots', 'Flowing gowns available', 'Outdoor & studio options', 'Belly casting option', 'Sibling inclusion']
    },
    {
      title: 'Family Portrait Sessions',
      price: '₹7,000 - ₹11,000',
      description: 'Capturing your growing family with comfortable, natural poses in beautiful settings.',
      includes: ['Multiple family combinations', 'Individual portraits', 'Candid moments', 'Outfit guidance', 'Location flexibility']
    }
  ]

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#D4A574] to-gray-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/90 to-gray-900/80 z-10"></div>
          <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
            <Image
              src="/images/business-9.jpg"
              alt="Photography props for baby photoshoot colorful setup"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-6">
              <HiOutlineSparkles className="text-[#F4E4C1] text-2xl" />
              <span className="text-[#F4E4C1] text-lg font-medium">Professional Photography Services</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Milestone Photography
              <span className="block text-[#F4E4C1]">Packages</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              We specialize in milestone photography that captures your family's precious moments perfectly. From newborn sessions to birthday celebrations, our patient team creates comfortable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#F4E4C1] text-gray-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105">
                View Packages
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Beautiful Photography Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Patient photographers experienced with babies and children, creating beautiful setups with perfectly arranged props and backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[800px]">
            {/* Baby Photography - Large Card */}
            <div className="lg:col-span-7 lg:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src="/images/business-1.jpg"
                alt="Newborn baby photoshoot studio setup with props"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <HiOutlineHeart className="text-[#F4E4C1] text-xl" />
                  <span className="text-[#F4E4C1] font-medium">Most Popular</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">Baby Photography</h3>
                <p className="text-lg text-gray-200 mb-6">Newborn to 12 months milestone sessions with patient, gentle approach and beautiful setups.</p>
                <div className="flex items-center text-[#F4E4C1] font-semibold">
                  <span>Starting ₹10,000</span>
                  <HiOutlineArrowRight className="ml-2" />
                </div>
              </div>
            </div>

            {/* Maternity Photography */}
            <div className="lg:col-span-5 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 min-h-[300px]">
              <Image
                src="/images/business-2.jpg"
                alt="Pregnant woman maternity photoshoot golden hour"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-3">Maternity Photography</h3>
                <p className="text-gray-200 mb-4">Golden hour sessions celebrating your beautiful pregnancy journey.</p>
                <div className="text-[#F4E4C1] font-semibold">Starting ₹9,000</div>
              </div>
            </div>

            {/* Birthday Photography */}
            <div className="lg:col-span-5 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 min-h-[300px]">
              <Image
                src="/images/business-3.jpg"
                alt="One year old baby birthday cake smash photoshoot"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-3">Birthday Photography</h3>
                <p className="text-gray-200 mb-4">Fun cake smash sessions and birthday celebrations that capture pure joy.</p>
                <div className="text-[#F4E4C1] font-semibold">Starting ₹8,000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Comparison Toggle */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cooperative team with excellent customer service experience. All packages include perfectly arranged setups and props.
            </p>
          </div>

          {/* Package Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              {Object.keys(packages).map((key) => (
                <button
                  key={key}
                  onClick={() => setActivePackage(key)}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activePackage === key
                      ? 'bg-[#F4E4C1] text-gray-900 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {packages[key].name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Package Display */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#D4A574] to-[#8B4513] p-8 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold">{packages[activePackage].name}</h3>
                <div className="text-right">
                  <div className="text-4xl font-bold">{packages[activePackage].price}</div>
                  <div className="text-lg opacity-90">{packages[activePackage].duration}</div>
                </div>
              </div>
              <div className="text-xl opacity-90">{packages[activePackage].photos}</div>
            </div>
            
            <div className="p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">What's Included:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {packages[activePackage].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <HiOutlineCheckCircle className="text-[#D4A574] text-xl flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <button className="bg-[#F4E4C1] text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-[#8B4513] hover:text-white transition-all duration-300 transform hover:scale-105">
                  Book This Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Masonry Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative w-full h-64 mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src="/images/business-6.jpg"
                alt="Collection of framed baby photos on wall display"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Recent Work</h2>
                  <p className="text-xl opacity-90">High-quality photos that capture precious moments perfectly</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Portfolio Grid Items */}
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src="/images/business-8.jpg"
                alt="Happy indian family with newborn baby smiling"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-square">
              <Image
                src="/images/business-1.jpg"
                alt="Newborn photography sample"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-square">
              <Image
                src="/images/business-3.jpg"
                alt="Birthday photography sample"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
            </div>
            
            <div className="col-span-2 relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-[2/1]">
              <Image
                src="/images/business-2.jpg"
                alt="Maternity photography sample"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#F4E4C1] text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-[#8B4513] hover:text-white transition-all duration-300 transform hover:scale-105">
              View Full Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-[#D4A574]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Photography Process
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Patient team that makes babies comfortable during shoots with amazing experience and cooperative nature.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/30 rounded-full"></div>

            <div className="space-y-16">
              {[
                {
                  step: '01',
                  title: 'Consultation & Planning',
                  description: 'We discuss your vision, preferred styles, and plan the perfect session timing for your baby\'s comfort.',
                  side: 'left'
                },
                {
                  step: '02',
                  title: 'Studio Preparation',
                  description: 'Our team arranges beautiful setups with perfectly organized props and backgrounds for your session.',
                  side: 'right'
                },
                {
                  step: '03',
                  title: 'Patient Photography Session',
                  description: 'Our friendly photographers work patiently with your family, ensuring everyone feels comfortable and relaxed.',
                  side: 'left'
                },
                {
                  step: '04',
                  title: 'Professional Editing',
                  description: 'We carefully edit and enhance your photos to deliver high-quality images that capture precious moments perfectly.',
                  side: 'right'
                },
                {
                  step: '05',
                  title: 'Gallery Delivery',
                  description: 'Receive your beautiful photos in an online gallery with high-resolution downloads and print-ready formats.',
                  side: 'left'
                }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center ${item.side === 'right' ? 'flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#F4E4C1] rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${item.side === 'right' ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="text-6xl font-bold text-[#D4A574]/20 mb-4">{item.step}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Accordion */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Detailed Pricing Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for all our photography services with perfectly arranged setups and professional quality.
            </p>
          </div>

          <div className="space-y-4">
            {pricingItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <div className="text-2xl font-bold text-[#D4A574]">{item.price}</div>
                  </div>
                  <HiOutlineChevronRight 
                    className={`text-2xl text-gray-400 transition-transform duration-300 ${
                      openAccordion === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                
                {openAccordion === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-600 mb-6 pt-6">{item.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {item.includes.map((include, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <HiOutlineCheckCircle className="text-[#D4A574] text-lg flex-shrink-0" />
                            <span className="text-gray-600">{include}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <button className="bg-[#F4E4C1] text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-[#8B4513] hover:text-white transition-all duration-300">
                        Book This Service
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Package?</h3>
              <p className="text-gray-600 mb-6">
                We're happy to create a personalized photography package that perfectly fits your needs and budget.
              </p>
              <button className="bg-[#F4E4C1] text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-[#8B4513] hover:text-white transition-all duration-300 transform hover:scale-105">
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}