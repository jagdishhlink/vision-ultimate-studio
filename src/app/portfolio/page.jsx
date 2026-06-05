'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineHeart, HiOutlineStar, HiOutlineCheckCircle } from 'react-icons/hi2'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentSlide, setCurrentSlide] = useState(0)

  const portfolioItems = [
    { 
      id: 1, 
      category: 'newborn', 
      image: '/images/business-1.jpg',
      title: 'Sweet Dreams Session',
      age: 'Newborn - 2 weeks',
      description: 'Peaceful newborn session with natural props'
    },
    { 
      id: 2, 
      category: 'maternity', 
      image: '/images/business-2.jpg',
      title: 'Golden Hour Maternity',
      age: '32 weeks',
      description: 'Elegant maternity photography in natural light'
    },
    { 
      id: 3, 
      category: 'birthday', 
      image: '/images/business-3.jpg',
      title: 'First Birthday Magic',
      age: '12 months',
      description: 'Colorful cake smash celebration session'
    },
    { 
      id: 4, 
      category: 'family', 
      image: '/images/business-8.jpg',
      title: 'Growing Family Joy',
      age: 'Family of 4',
      description: 'Heartwarming family session with newborn'
    },
    { 
      id: 5, 
      category: 'newborn', 
      image: '/images/business-6.jpg',
      title: 'Tiny Miracle Collection',
      age: '1 week old',
      description: 'Artistic newborn portraits in soft lighting'
    },
    { 
      id: 6, 
      category: 'birthday', 
      image: '/images/business-9.jpg',
      title: 'Colorful Celebration',
      age: '2nd Birthday',
      description: 'Vibrant themed birthday photoshoot'
    }
  ]

  const beforeAfterSlides = [
    {
      before: '/images/business-4.jpg',
      after: '/images/business-7.jpg',
      title: 'Studio Setup Magic',
      description: 'From basic studio to dreamy portrait setup'
    },
    {
      before: '/images/business-10.jpg',
      after: '/images/business-5.jpg',
      title: 'Professional Touch',
      description: 'Equipment precision meets gentle interaction'
    }
  ]

  const clientStories = [
    {
      image: '/images/business-8.jpg',
      name: 'The Trivedi Family',
      story: 'We started with a newborn session and returned for every milestone',
      sessions: 'Newborn, 1st Birthday, 5th Birthday',
      quote: 'The team is really very cooperative and friendly nature. We had done our new baby born photo shoot also 1st bday and 5th Birthday of our son.',
      author: 'Khushi Trivedi',
      rating: 5
    },
    {
      image: '/images/business-2.jpg',
      name: 'The Mistry Journey',
      story: 'From maternity anticipation to first birthday celebration',
      sessions: 'Maternity, Newborn, 1st Birthday',
      quote: 'The team was patient, friendly, and made our baby feel comfortable. The photos turned out beautiful and captured precious moments perfectly.',
      author: 'Rajan Mistry',
      rating: 5
    },
    {
      image: '/images/business-1.jpg',
      name: 'The Patel Milestones',
      story: 'Documenting every precious moment with professional care',
      sessions: '6 Months, 1st Birthday',
      quote: 'Photographer was very patient and friendly with the baby. All the setups, props and background were beautiful and perfectly arranged.',
      author: 'Mitul Patel',
      rating: 5
    }
  ]

  const filters = [
    { id: 'all', label: 'All Sessions' },
    { id: 'newborn', label: 'Newborn' },
    { id: 'maternity', label: 'Maternity' },
    { id: 'birthday', label: 'Birthday' },
    { id: 'family', label: 'Family' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <div className="bg-white">
      {/* Portfolio Hero with Film Strip Design */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574] via-gray-700 to-gray-900"></div>
        
        {/* Film Strip Border Effect */}
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-transparent via-[#F4E4C1] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-transparent via-[#F4E4C1] to-transparent opacity-30"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-[#F4E4C1]/30">
              <HiOutlineStar className="text-[#F4E4C1] text-xl" />
              <span className="text-white font-medium">4.9 Stars from 150+ Happy Families</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Our Portfolio of
              <span className="block text-[#F4E4C1] italic">Precious Moments</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Every session tells a unique story. From peaceful newborn dreams to joyful birthday celebrations, 
              discover how we capture life's most precious milestones with artistic vision and gentle care.
            </p>
          </div>
        </div>
        
        {/* Floating Image Frames */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl transform -rotate-12 opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-32 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl transform rotate-6 opacity-20"></div>
      </section>

      {/* Portfolio Filter Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Filter Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#F4E4C1] text-white shadow-lg shadow-[#F4E4C1]/30 transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-[#D4A574]/10 hover:text-[#8B4513] border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Image Container */}
                <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200 mb-1">{item.age}</p>
                      <p className="text-sm text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Film Strip Holes Effect */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full border-2 border-white/30"></div>
                  ))}
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full border-2 border-white/30"></div>
                  ))}
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 right-6 bg-[#F4E4C1] text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Studio Magic */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Studio <span className="text-[#D4A574] italic">Magic</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how our beautiful setups and perfectly arranged props transform ordinary moments 
              into extraordinary memories through our patient, artistic approach.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-100 to-white rounded-3xl overflow-hidden shadow-2xl">
              {/* Slider Navigation */}
              <div className="flex justify-center gap-4 p-8 bg-[#D4A574]">
                {beforeAfterSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-white shadow-lg' 
                        : 'bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              {/* Before/After Container */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className="grid grid-cols-2 h-full">
                  {/* Before */}
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border-r-2 border-[#F4E4C1]">
                    <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-full text-sm font-semibold text-gray-800">
                      Before
                    </div>
                    <Image
                      src={beforeAfterSlides[currentSlide]?.before}
                      alt="Before studio setup"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* After */}
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="absolute top-4 right-4 bg-[#F4E4C1] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      After
                    </div>
                    <Image
                      src={beforeAfterSlides[currentSlide]?.after}
                      alt="After studio setup"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* Slide Info */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {beforeAfterSlides[currentSlide]?.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {beforeAfterSlides[currentSlide]?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Story Showcase */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#D4A574] to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Growing with <span className="text-[#F4E4C1] italic">Families</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The most rewarding part of our work is capturing multiple milestones for the same families. 
              These are the stories that make our hearts full.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {clientStories.map((story, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                {/* Family Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  
                  {/* Heart Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <HiOutlineHeart className="text-white text-xl" />
                  </div>
                </div>

                {/* Story Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{story.name}</h3>
                  <p className="text-[#F4E4C1] font-medium mb-3">{story.sessions}</p>
                  <p className="text-white/90 mb-6 leading-relaxed">{story.story}</p>
                  
                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <HiOutlineStar key={i} className="text-[#F4E4C1] text-lg fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-white/80 italic text-sm mb-4 border-l-4 border-[#F4E4C1] pl-4">
                    "{story.quote}"
                  </blockquote>
                  
                  <p className="text-[#F4E4C1] font-medium">— {story.author}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Story?
              </h3>
              <p className="text-white/90 mb-8">
                Let us capture your precious moments with the same care and artistry our families love.
              </p>
              <button className="bg-[#F4E4C1] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#8B4513] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Book Your Photoshoot Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}