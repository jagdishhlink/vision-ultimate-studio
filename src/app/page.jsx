'use client';

import Image from 'next/image';
import { HiOutlineStar, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineUserGroup, HiOutlineHeart, HiOutlineSparkles } from 'react-icons/hi2';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cinematic Hero Split */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#D4A574] to-gray-800">
        {/* Background Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#F4E4C1]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 text-white">
                  <HiOutlineStar className="w-5 h-5 text-[#F4E4C1] mr-2" />
                  <span className="text-sm">4.9★ Rated by 150+ Happy Families</span>
                </div>
                
                <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight">
                  Capture <br />
                  <span className="text-[#F4E4C1]">Precious</span> <br />
                  Moments <br />
                  <span className="text-white/80">Perfectly</span>
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                  Patient, friendly photographers specializing in baby milestones and birthday celebrations. Beautiful setups that make your little ones comfortable.
                </p>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <HiOutlineCheckCircle className="w-6 h-6 text-[#F4E4C1] flex-shrink-0" />
                  <span className="text-white/90 text-sm">Patient & Friendly Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HiOutlineCheckCircle className="w-6 h-6 text-[#F4E4C1] flex-shrink-0" />
                  <span className="text-white/90 text-sm">Beautiful Setups & Props</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HiOutlineCheckCircle className="w-6 h-6 text-[#F4E4C1] flex-shrink-0" />
                  <span className="text-white/90 text-sm">Milestone Photography Expert</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HiOutlineCheckCircle className="w-6 h-6 text-[#F4E4C1] flex-shrink-0" />
                  <span className="text-white/90 text-sm">Cooperative Experience</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-[#F4E4C1] text-[#8B4513] px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 flex items-center justify-center group">
                  Book Your Photoshoot Today
                  <HiOutlineArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 backdrop-blur-xl transition-all duration-300">
                  View Our Gallery
                </button>
              </div>
            </div>
            
            {/* Right Image with Creative Frame */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F4E4C1]/30 to-transparent rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="bg-gradient-to-br from-[#D4A574] to-gray-600 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/business-1.jpg"
                    alt="Newborn baby photoshoot studio setup with props"
                    width={600}
                    height={700}
                    className="w-full h-[500px] object-cover"
                    unoptimized
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <HiOutlineHeart className="w-6 h-6 text-[#8B4513]" />
                  <div>
                    <div className="text-sm font-semibold text-[#8B4513]">150+</div>
                    <div className="text-xs text-gray-600">Happy Families</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-[#F4E4C1] rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <HiOutlineSparkles className="w-6 h-6 text-[#8B4513]" />
                  <div>
                    <div className="text-sm font-semibold text-[#8B4513]">4.9★</div>
                    <div className="text-xs text-[#8B4513]/70">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Gallery Showcase */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#F4E4C1]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#D4A574]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#8B4513] mb-6">
              Beautiful Setups,<br />
              <span className="text-[#D4A574]">Precious Moments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We specialize in milestone photography that captures your family's precious moments perfectly. 
              From newborn sessions to birthday celebrations, our patient team creates comfortable experiences.
            </p>
          </div>
          
          {/* Asymmetric Gallery Grid */}
          <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
            {/* Large Featured */}
            <div className="col-span-12 lg:col-span-7">
              <div className="group relative bg-gradient-to-br from-[#D4A574]/10 to-transparent rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/business-2.jpg"
                  alt="Pregnant woman maternity photoshoot golden hour"
                  width={700}
                  height={500}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Maternity Photography</h3>
                  <p className="text-white/90">Golden hour sessions capturing the beautiful journey</p>
                </div>
              </div>
            </div>
            
            {/* Stacked Right */}
            <div className="col-span-12 lg:col-span-5 space-y-6">
              <div className="group relative bg-gradient-to-br from-[#F4E4C1]/10 to-transparent rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/business-3.jpg"
                  alt="One year old baby birthday cake smash photoshoot"
                  width={400}
                  height={240}
                  className="w-full h-60 object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold">Birthday Celebrations</h4>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-[#D4A574]/10 to-transparent rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/business-6.jpg"
                  alt="Collection of framed baby photos on wall display"
                  width={400}
                  height={240}
                  className="w-full h-60 object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold">Professional Framing</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Timeline Services */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-[#8B4513] mb-6">
              Your Baby's <span className="text-[#D4A574]">Growth Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From first smiles to first steps, we capture every precious milestone with perfectly arranged setups and patient, friendly service.
            </p>
          </div>
          
          {/* Film Strip Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#F4E4C1] to-[#D4A574] h-full hidden lg:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-20">
              {/* Newborn */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:text-right space-y-6">
                  <div className="inline-flex items-center bg-[#F4E4C1] text-[#8B4513] px-4 py-2 rounded-full text-sm font-semibold lg:ml-auto">
                    <HiOutlineHeart className="w-4 h-4 mr-2" />
                    Newborn (0-2 weeks)
                  </div>
                  <h3 className="text-3xl font-bold text-[#8B4513]">First Hello Photos</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Gentle newborn sessions with soft, safe setups. Our patient photographers work with your baby's schedule 
                    to capture those precious first moments with beautiful, professionally arranged props.
                  </p>
                  <div className="flex lg:justify-end">
                    <button className="text-[#D4A574] font-semibold hover:text-[#8B4513] transition-colors flex items-center">
                      Learn More <HiOutlineArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#F4E4C1]/20 to-[#D4A574]/10 rounded-3xl p-6 transform hover:scale-105 transition-all duration-500">
                    <Image
                      src="/images/business-1.jpg"
                      alt="Newborn photography setup"
                      width={500}
                      height={400}
                      className="w-full h-80 object-cover rounded-2xl"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
              
              {/* Milestone */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2 space-y-6">
                  <div className="inline-flex items-center bg-[#D4A574] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <HiOutlineSparkles className="w-4 h-4 mr-2" />
                    Milestones (6-12 months)
                  </div>
                  <h3 className="text-3xl font-bold text-[#8B4513]">Growing Moments</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sitting up, crawling, first smiles - we capture each milestone with colorful, engaging setups. 
                    Our cooperative team makes every session comfortable and fun for your growing baby.
                  </p>
                  <button className="text-[#D4A574] font-semibold hover:text-[#8B4513] transition-colors flex items-center">
                    View Gallery <HiOutlineArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
                <div className="lg:order-1 relative">
                  <div className="bg-gradient-to-br from-[#D4A574]/20 to-[#F4E4C1]/10 rounded-3xl p-6 transform hover:scale-105 transition-all duration-500">
                    <Image
                      src="/images/business-9.jpg"
                      alt="Baby milestone photography props"
                      width={500}
                      height={400}
                      className="w-full h-80 object-cover rounded-2xl"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
              
              {/* Birthday */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:text-right space-y-6">
                  <div className="inline-flex items-center bg-[#8B4513] text-white px-4 py-2 rounded-full text-sm font-semibold lg:ml-auto">
                    <HiOutlineUserGroup className="w-4 h-4 mr-2" />
                    Birthday Celebrations
                  </div>
                  <h3 className="text-3xl font-bold text-[#8B4513]">First Birthday Magic</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cake smash sessions and birthday celebrations captured with joy and creativity. 
                    Beautiful backgrounds and themes that make your child's special day unforgettable.
                  </p>
                  <div className="flex lg:justify-end">
                    <button className="bg-[#F4E4C1] text-[#8B4513] px-6 py-3 rounded-full font-semibold hover:bg-[#D4A574] hover:text-white transition-all duration-300">
                      Book Birthday Session
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#F4E4C1]/30 to-[#D4A574]/20 rounded-3xl p-6 transform hover:scale-105 transition-all duration-500">
                    <Image
                      src="/images/business-3.jpg"
                      alt="Birthday cake smash photoshoot"
                      width={500}
                      height={400}
                      className="w-full h-80 object-cover rounded-2xl"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel with Photos */}
      <section className="py-32 bg-[#D4A574]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              What Happy Families Say
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Real experiences from families who've trusted us to capture their precious moments
            </p>
          </div>
          
          {/* Testimonial Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#F4E4C1] to-[#D4A574] rounded-full p-1">
                  <Image
                    src="/images/business-8.jpg"
                    alt="Happy family testimonial"
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Khushi Trivedi</h4>
                  <div className="flex text-[#F4E4C1]">
                    {[...Array(5)].map((_, i) => (
                      <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed mb-4">
                "The team is really very cooperative and friendly nature. We had done our new baby born photo shoot 
                also 1st bday and 5th Birthday of our son."
              </p>
              <div className="bg-[#F4E4C1]/20 rounded-lg p-3">
                <span className="text-[#F4E4C1] text-sm font-semibold">Highlight: </span>
                <span className="text-white/90 text-sm">cooperative and friendly nature</span>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 lg:transform lg:scale-110">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#F4E4C1] to-[#8B4513] rounded-full p-1">
                  <Image
                    src="/images/business-5.jpg"
                    alt="Photographer with family"
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Rajan Mistry</h4>
                  <div className="flex text-[#F4E4C1]">
                    {[...Array(5)].map((_, i) => (
                      <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed mb-4">
                "The team was patient, friendly, and made our baby feel comfortable. The photos turned out beautiful 
                and captured precious moments perfectly."
              </p>
              <div className="bg-[#F4E4C1]/20 rounded-lg p-3">
                <span className="text-[#F4E4C1] text-sm font-semibold">Highlight: </span>
                <span className="text-white/90 text-sm">captured precious moments perfectly</span>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-white to-[#F4E4C1] rounded-full p-1">
                  <Image
                    src="/images/business-4.jpg"
                    alt="Studio setup"
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Mitul Patel</h4>
                  <div className="flex text-[#F4E4C1]">
                    {[...Array(5)].map((_, i) => (
                      <HiOutlineStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed mb-4">
                "Photographer was very patient and friendly with the baby. All the setups, props and background 
                were beautiful and perfectly arranged."
              </p>
              <div className="bg-[#F4E4C1]/20 rounded-lg p-3">
                <span className="text-[#F4E4C1] text-sm font-semibold">Highlight: </span>
                <span className="text-white/90 text-sm">beautiful and perfectly arranged</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Reveal */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4E4C1]/5 via-transparent to-[#D4A574]/5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#F4E4C1] to-[#D4A574] rounded-2xl p-6 mb-4 group-hover:scale-110 transition-all duration-300">
                <HiOutlineStar className="w-8 h-8 text-white mx-auto" />
              </div>
              <div className="text-4xl font-bold text-[#8B4513] mb-2">4.9★</div>
              <div className="text-gray-600 font-semibold">Average Rating</div>
              <div className="text-sm text-gray-500">from Google Reviews</div>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#D4A574] to-[#8B4513] rounded-2xl p-6 mb-4 group-hover:scale-110 transition-all duration-300">
                <HiOutlineUserGroup className="w-8 h-8 text-white mx-auto" />
              </div>
              <div className="text-4xl font-bold text-[#8B4513] mb-2">150+</div>
              <div className="text-gray-600 font-semibold">Happy Families</div>
              <div className="text-sm text-gray-500">served with love</div>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#8B4513] to-[#D4A574] rounded-2xl p-6 mb-4 group-hover:scale-110 transition-all duration-300">
                <HiOutlineHeart className="w-8 h-8 text-white mx-auto" />
              </div>
              <div className="text-4xl font-bold text-[#8B4513] mb-2">1000+</div>
              <div className="text-gray-600 font-semibold">Precious Moments</div>
              <div className="text-sm text-gray-500">beautifully captured</div>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-[#F4E4C1] to-[#8B4513] rounded-2xl p-6 mb-4 group-hover:scale-110 transition-all duration-300">
                <HiOutlineSparkles className="w-8 h-8 text-white mx-auto" />
              </div>
              <div className="text-4xl font-bold text-[#8B4513] mb-2">5+</div>
              <div className="text-gray-600 font-semibold">Years Experience</div>
              <div className="text-sm text-gray-500">in milestone photography</div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Panel */}
      <section className="py-32 bg-gradient-to-br from-[#8B4513] via-[#D4A574] to-[#F4E4C1] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Ready to Capture Your <br />
              <span className="text-white/90">Precious Moments?</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Book your session today with Ahmedabad's most patient and friendly baby photography team. 
              Beautiful setups, cooperative service, and memories that last forever.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center">
                <HiOutlineCheckCircle className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-white font-semibold">Patient Photographers</div>
                <div className="text-white/80 text-sm">Work at baby's pace</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center">
                <HiOutlineSparkles className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-white font-semibold">Beautiful Setups</div>
                <div className="text-white/80 text-sm">Perfectly arranged props</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center">
                <HiOutlineHeart className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-white font-semibold">Amazing Experience</div>
                <div className="text-white/80 text-sm">Cooperative & friendly</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#8B4513] px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group shadow-xl">
                Book Your Photoshoot Today
                <HiOutlineArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 backdrop-blur-xl transition-all duration-300">
                View Our Gallery
              </button>
            </div>
            
            <div className="mt-8 text-white/80">
              <p className="text-sm">📍 Swarnim Business Hub, GIDC Bhat, Motera, Ahmedabad</p>
              <p className="text-sm mt-1">📞 091730 31325 • Open until 6 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}